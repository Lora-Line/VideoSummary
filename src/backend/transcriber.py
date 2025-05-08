# This script handles the transcription of YouTube videos using the Whisper model.

from src.backend.downloader import download_audio  # Import the audio downloader.
import whisper  # Import the Whisper library for transcription.
import os  # Import os for file management.

# Load the Whisper model. The "base" model is used here, but it can be replaced with other sizes like "small" or "medium".
model = whisper.load_model("base")

def transcribe_youtube(url):
    """
    Downloads the audio from a YouTube video, transcribes it using Whisper, 
    and returns the transcription text.
    """
    # Step 1: Download the audio from the YouTube video.
    output = download_audio(url)  # The audio is saved as a temporary file.
    output = output + ".mp3"  # Append the .mp3 extension to the file.

    # Step 2: Transcribe the audio using the Whisper model.
    result = model.transcribe(output)

    # Step 3: Remove the temporary audio file to save space.
    os.remove(output)

    # Step 4: Return the transcription text.
    return result["text"]

