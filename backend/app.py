import os
import tempfile
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Qdrant
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from qdrant_client import QdrantClient
from dotenv import load_dotenv
from groq import Groq

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise RuntimeError("GOOGLE_API_KEY is not set")

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
if not GROQ_API_KEY:
    raise RuntimeError("GROQ_API_KEY is not set")

groq_client = Groq(api_key=GROQ_API_KEY)

app = FastAPI(title="Resume RAG API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Qdrant client and collection name
qdrant_client = QdrantClient(host="qdrant", port=6333)  # Update with your Qdrant server details
collection_name = "resume_collection"

collection_2 = "SII"

# Initialize embeddings
embeddings = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001",
    google_api_key=GOOGLE_API_KEY
)


@app.post("/api/upload-knowledge")
async def upload_resume(file: UploadFile = File(...)):
    """Upload and process a resume PDF"""
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
        
        # Create embeddings and store in Qdrant
        # First delete existing collection if it exists
        try:
            qdrant_client.delete_collection('SII')
        except:
            pass  # Collection didn't exist
        
        Qdrant.from_documents(
            documents=chunks,
            embedding=embeddings,
            url="qdrant",  # Update with your Qdrant server details
            port=6333,
            collection_name='SII',
            prefer_grpc=True
        )
        
        return JSONResponse(content={"message": "Knowledge processed successfully"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing PDF: {str(e)}")
    finally:
        # Clean up temp file
        os.unlink(temp_file.name)

@app.post("/api/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    """Upload and process a resume PDF"""
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
        
        # Create embeddings and store in Qdrant
        # First delete existing collection if it exists
        try:
            qdrant_client.delete_collection(collection_name)
        except:
            pass  # Collection didn't exist
        
        Qdrant.from_documents(
            documents=chunks,
            embedding=embeddings,
            url="qdrant",  # Update with your Qdrant server details
            port=6333,
            collection_name=collection_name,
            prefer_grpc=True
        )
        
        return JSONResponse(content={"message": "Resume processed successfully"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing PDF: {str(e)}")
    finally:
        # Clean up temp file
        os.unlink(temp_file.name)

@app.post("/api/chat")
async def chat(question: str = Form(...)):
    """Handle chat queries using RAG"""
    try:
        # Initialize Qdrant vector store
        vector_store = Qdrant(
            client=qdrant_client,
            collection_name=collection_name,
            embeddings=embeddings
        )
        
        # Get relevant documents from vector store
        docs = vector_store.similarity_search(question, k=3)
        if not docs:
            return {"answer": "No resume information found. Please upload a resume first."}
        
        context = "\n\n".join([doc.page_content for doc in docs])
        
        # Generate response using Groq
        prompt = f"""
        You are an AI assistant that represents the person whose resume information is provided below.
        Answer all questions in the first person as if you are the resume owner.
        For example, use "I", "me", "my" instead of the person's name or "the candidate".

        Resume information:
        {context}

        Question: {question}

        Remember to respond as if you are the person described in the resume, speaking directly to the person asking the question.

        If you don't have enough information to answer the question, say please send an email to me at raghuveervenkatesh7@gmail.com and I will get back to you."
        """

        chat_completion = groq_client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
        )
        answer = chat_completion.choices[0].message.content
        return {"answer": answer}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating response: {str(e)}")


@app.get("/api/health")
async def health_check():
    """Simple health check endpoint"""
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)