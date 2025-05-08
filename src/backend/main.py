# This script defines the FastAPI backend for handling video summarization and AI chat.

from fastapi import FastAPI, Form, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.backend.summarizer import generate_summary
from src.backend.transcriber import transcribe_youtube
from src.backend.qa_and_reformulate import get_answer_from_text, reformulate_answer

# Initialize the FastAPI app.
app = FastAPI()

# Enable CORS to allow requests from the frontend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins.
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods.
    allow_headers=["*"],  # Allow all headers.
)

# Global storage for the transcription text.
text = ""  # Stores the full transcription of the video.

# Pydantic models for request validation.
class VideoRequest(BaseModel):
    url: str  # Represents a video URL.

class PromptRequest(BaseModel):
    prompt: str  # Represents a user prompt.

# Endpoint for summarizing a video.
@app.post("/summarize")
def summarize(request: Request, url: str = Form(...)):
    """
    Transcribes the video from the given URL, generates a summary, 
    and returns the summary as a JSON response.
    """
    global text
    text = transcribe_youtube(url)  # Transcribe the video.

    # Generate a summary with a length proportional to the transcription.
    word_count = len(text.split())
    max_len = min(150, int(word_count * 0.5))  # Limit the summary to 50% of the text, max 150 tokens.
    summary = generate_summary(text, max_length=max_len)

    return JSONResponse(content={"summary": summary})

# Endpoint for asking questions about the video.
@app.post("/ask")
def ask(request: Request, question: str = Form(...), context: str = Form(...)):
    """
    Processes a user's question and context, generates an answer, 
    and returns the answer as a JSON response.
    """
    try:
        # Step 1: Extract a raw answer from the context using the QA model.
        short_answer = get_answer_from_text(question, context)

        # Step 2: Reformulate the raw answer into a complete sentence.
        full_answer = reformulate_answer(question, short_answer)

        return JSONResponse(content={"answer": full_answer})

    except Exception as e:
        # Handle errors and return an error message.
        return JSONResponse(content={"answer": f"Erreur lors de la génération de la réponse : {str(e)}"})

