from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn", device=0)

def generate_summary(text, max_length=1000):
    return summarizer(text, max_length=max_length, min_length=100, do_sample=False)[0]["summary_text"]

