# Resume RAG Application

A personal portfolio website with a RAG (Retrieval-Augmented Generation) chatbot that can answer questions about Raghuveer Venkatesh's resume, experience, and skills.

## 🌐 Live Site

Visit the live portfolio and chat application at [raghuveervenkatesh.us](https://raghuveervenkatesh.us)

## 📝 Project Overview

This application combines a professional portfolio website with an AI-powered chatbot that can answer questions about Raghuveer Venkatesh's experience, skills, and background by referencing his resume. The system uses:

- A modern React frontend with TypeScript and Tailwind CSS
- A FastAPI backend with RAG capabilities 
- Google's Gemini AI for natural language processing
- Qdrant vector database for efficient document retrieval

## 🏗️ Architecture

The application consists of three main components:

1. **Frontend**: React application with a responsive design
2. **Backend**: FastAPI server that processes user queries and integrates with Gemini AI
3. **Vector Database**: Qdrant for storing and retrieving document embeddings

## ✨ Features

- **Modern Portfolio Website**: Showcasing projects, skills, experience, and blog posts
- **AI-Powered Chat Interface**: Allowing visitors to ask questions about the portfolio owner
- **RAG System**: The chatbot uses a resume document to provide accurate, personalized responses
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark/Light Mode**: User-selectable theme preference

## 🛠️ Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- React Router for navigation

### Backend
- FastAPI (Python)
- LangChain for RAG implementation
- Google Generative AI (Gemini)
- Qdrant for vector storage

### Infrastructure
- Docker and Docker Compose for containerization
- Nginx for routing and serving static content

## 🚀 Getting Started

### Prerequisites
- Docker and Docker Compose
- Google Generative AI API key

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/resume-rag.git
cd resume-rag


┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Frontend  │────▶│   Backend   │────▶│  Qdrant DB  │
│  (React/TS) │     │  (FastAPI)  │     │             │
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  Gemini AI  │
                    │             │
                    └─────────────┘


How the RAG System Works

Users upload a resume PDF through the web interface
The backend processes the PDF, splits it into chunks, and creates embeddings
Embeddings are stored in the Qdrant vector database
When a user asks a question, the system:

Converts the question to an embedding
Retrieves the most relevant resume chunks from Qdrant
Prompts Gemini AI with the question and relevant context
Returns Gemini's response to the user



🔧 Configuration
Environment Variables

GOOGLE_API_KEY: API key for Google Generative AI
QDRANT_HOST: Hostname for Qdrant (default: "qdrant")
QDRANT_PORT: Port for Qdrant (default: 6333)

Docker Compose Settings
The application uses three services:

frontend: Serves the React application on port 2052
backend: Runs the FastAPI server on port 8000
qdrant: Runs the vector database on ports 6333 and 6334

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
📧 Contact

Raghuveer Venkatesh - raghuveervenkatesh7@gmail.com
Project Link: https://github.com/yourusername/resume-rag