// services/api.ts

// Function to fetch the video summary from the backend.
// It sends the video URL to the backend and expects a JSON response containing the summary.
export const getVideoSummary = async (videoUrl: string) => {
  // Create a FormData object to send the video URL as form data.
  const formData = new FormData();
  formData.append('url', videoUrl);  // Attach the video URL.

  // Make a POST request to the backend endpoint for summarization.
  const response = await fetch('http://127.0.0.1:8000/summarize', {
    method: 'POST',
    body: formData,
  });

  // Throw an error if the request fails.
  if (!response.ok) {
    throw new Error('Failed to fetch video summary');
  }

  // Parse and return the JSON response containing the summary.
  return await response.json();  // Expected format: { summary: string }
};

// Function to send a message to the AI and receive a response.
// It sends the user's question and context to the backend and expects a JSON response containing the answer.
export const chatWithAI = async (message: string, context: string) => {
  // Create a FormData object to send the question and context as form data.
  const formData = new FormData();
  formData.append('question', message);  // Attach the user's question.
  formData.append('context', context);  // Attach the context (e.g., video summary).

  // Make a POST request to the backend endpoint for AI chat.
  const response = await fetch('http://127.0.0.1:8000/ask', {
    method: 'POST',
    body: formData,
  });

  // Throw an error if the request fails.
  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  // Parse and return the JSON response containing the AI's answer.
  return await response.json();  // Expected format: { answer: string }
};

