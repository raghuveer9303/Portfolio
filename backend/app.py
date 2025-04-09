import os
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import google.generativeai as genai
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.embeddings import VertexAIEmbeddings
import tempfile

# Initialize API key
os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY", "your_api_key")
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

app = FastAPI(title="Resume RAG API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins in development
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Initialize vector store
vector_store = None

@app.post("/api/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    """Upload and process a resume PDF"""
    global vector_store
    
    if not file.filename.endswith('.pdf'):
        raise HTTPException(status_code=400, detail="Only PDF files are supported")
    
    # Save uploaded file temporarily
    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.pdf')
    try:
        contents = await file.read()
        with open(temp_file.name, 'wb') as f:
            f.write(contents)
        
        # Process the PDF
        loader = PyPDFLoader(temp_file.name)
        documents = loader.load()
        
        # Split text into chunks
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )
        chunks = text_splitter.split_documents(documents)
        
        # Create embeddings and store in Chroma
        embeddings = VertexAIEmbeddings()
        vector_store = Chroma.from_documents(
            documents=chunks,
            embedding=embeddings,
            persist_directory="./data/chroma_db"
        )
        vector_store.persist()
        
        return JSONResponse(content={"message": "Resume processed successfully"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing PDF: {str(e)}")
    finally:
        # Clean up temp file
        os.unlink(temp_file.name)

@app.post("/api/chat")
async def chat(question: str = Form(...)):
    """Handle chat queries using RAG"""
    global vector_store
    
    if not vector_store:
        raise HTTPException(status_code=400, detail="No resume has been uploaded yet")
    
    try:
        # Get relevant documents from vector store
        docs = vector_store.similarity_search(question, k=3)
        context = "\n\n".join([doc.page_content for doc in docs])
        
        # Generate response using Gemini
        model = genai.GenerativeModel('gemini-pro')
        prompt = f"""
        You are an AI assistant that helps with questions about a resume.
        Use the following resume information to answer the question.
        If you don't know the answer, say so.
        
        Resume information:
        {context}
        
        Question: {question}
        """
        
        response = model.generate_content(prompt)
        return {"answer": response.text}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating response: {str(e)}")

@app.get("/api/health")
async def health_check():
    """Simple health check endpoint"""
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)