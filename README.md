# 📺 YouTube Video Summarizer & Q&A Bot

A web application that automatically summarizes YouTube videos and lets users interact with an AI chatbot to ask questions based on the video's content.

## 🚀 Features

- 🔗 Paste a YouTube URL
- 📝 Automatic video summarization
- 🤖 AI chatbot for question-answering based on the video
- ⚡ Modern, responsive UI (React + Tailwind CSS)
- 🧠 Backend powered by FastAPI and AI models (LLM + transcription)

## 🖼️ Preview

![screenshot]('public\Capture d'écran 2025-05-07 200714.png') <!-- Replace with a real image if you have one -->

---

## 🛠️ Installation

### Prerequisites

- Node.js >= 18
- Python >= 3.9
- `ffmpeg` installed (for audio processing)

### 1. Clone the repository

git clone https://github.com/your-username/video-summary.git
cd video-summary

### 2. Run the backend (FastAPI)

cd backend
python -m venv env
.venv\Scripts\activate 
pip install -r requirements.txt
uvicorn src.backend.main:app --reload

### 3. Run the frontend (React)

npm install
npm run dev
