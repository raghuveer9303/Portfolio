import os
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import google.generativeai as genai
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Qdrant
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from qdrant_client import QdrantClient
import tempfile

# Hardcoded API Key - replace with your actual key
GEMINI_API_KEY = "AIzaSyBPS3MblzMA0tK1_h7aOFOKKJvaO1NOqqc"

# Configure Gemini with hardcoded key
genai.configure(api_key=GEMINI_API_KEY)

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

# Initialize embeddings
embeddings = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001",
    google_api_key=GEMINI_API_KEY
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
        
        # Generate response using Gemini
        model = genai.GenerativeModel('gemini-2.0-flash')
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
        
        response = model.generate_content(prompt)
        return {"answer": response.text}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating response: {str(e)}")


@app.post("/api/chat-sii") 
async def chat_sii(question: str = Form(...)):
    """Handle chat queries for the Sports Innovation Institute using RAG"""
    try:
        # Initialize Qdrant vector store with SII collection
        vector_store = Qdrant(
            client=qdrant_client,
            collection_name="SII",
            embeddings=embeddings
        )
        
        # Get relevant documents from vector store
        docs = vector_store.similarity_search(question, k=3)
        if not docs:
            return {"answer": "Hey there! Jagz here. I don't have any information about the Sports Innovation Institute in my database. Please contact the institute directly via email at lwanless@iu.edu for more details."}
        
        context = "\n\n".join([doc.page_content for doc in docs])
        
        # Generate response using Gemini
        model = genai.GenerativeModel('gemini-2.0-flash')
        prompt = f"""
        You are JAGZ, the friendly and knowledgeable virtual assistant for the Indiana University (IU) Sports Innovation Institute.

        GREETING:
        - Begin each response with a unique, enthusiastic greeting (e.g., "Hi there, sports innovation fan!" or "Welcome to IU Sports Innovation, I'm Jagz!")

        INFORMATION HANDLING:
        1. FIRST: Search the provided knowledge base for relevant information about the IU Sports Innovation Institute to answer the user's question.
        2. SECOND: If the knowledge base doesn't contain the specific information:
        - Use your general knowledge about sports innovation, academic institutes, or related topics to provide a helpful response
        - Clearly indicate when you're providing general information versus retrieved information
        3. THIRD: If you still cannot provide a satisfactory answer:
        - Acknowledge the limitation politely
        - Suggest contacting Dr. Liz Wanless directly at lwanless@iu.edu for more detailed information

        RESPONSE STRUCTURE:
        - Keep responses concise but informative
        - Use bullet points or numbered lists for clarity when appropriate
        - Highlight key information in **bold** when useful
        - Maintain a friendly, enthusiastic tone consistent with a sports mascot personality
        - End each response with a brief, encouraging sign-off

        PERSONALITY:
        - Friendly and approachable
        - Enthusiastic about sports innovation
        - Helpful and service-oriented
        - Proud representative of IU and the Sports Innovation Institute
        Context:
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