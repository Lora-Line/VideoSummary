
// This is a mock API service
// In a real application, you would connect to an actual backend

// Simulate API request delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Parse YouTube URL to get video details
const parseYouTubeUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = (match && match[2].length === 11) ? match[2] : null;
  
  return {
    videoId,
    valid: !!videoId
  };
};

// Mock function to get video summary
export const getVideoSummary = async (url: string) => {
  const { valid, videoId } = parseYouTubeUrl(url);
  
  if (!valid) {
    throw new Error('Invalid YouTube URL');
  }
  
  // Simulate API call delay
  await delay(3000);
  
  // Mock response
  return {
    title: "How Artificial Intelligence is Transforming Our World",
    summary: "This video explores the transformational impact of artificial intelligence on our modern society. It begins with a historical overview of AI development, from its theoretical beginnings to current applications.\n\nThe main points covered include:\n\n1. The evolution of machine learning algorithms and their impact on various industries.\n\n2. The ethical implications of AI, particularly regarding privacy, automated decision-making, and algorithmic bias.\n\n3. How AI is revolutionizing sectors like healthcare, transportation, and education, with concrete examples of innovative applications.\n\n4. Future challenges and opportunities, including the superintelligence question and how societies can adapt to these rapid changes.\n\nThe conclusion emphasizes the importance of a balanced approach to AI development, maximizing its benefits while mitigating potential risks."
  };
};

// Mock function to chat about the video
export const chatWithAI = async (message: string) => {
  // Simulate API call delay
  await delay(1500);
  
  // Mock responses based on keywords in the message
  if (message.toLowerCase().includes('ethics') || message.toLowerCase().includes('ethical')) {
    return "Ethical questions are indeed central to AI development. The video addresses several aspects such as algorithmic bias that can perpetuate existing inequalities, privacy issues related to massive data collection, and the question of transparency in decisions made by AI systems. An important point raised is the need to establish appropriate regulatory frameworks to ensure that AI development remains beneficial for humanity.";
  }
  
  if (message.toLowerCase().includes('health') || message.toLowerCase().includes('healthcare') || message.toLowerCase().includes('medical')) {
    return "In healthcare, AI is making significant advances. The video mentions diagnostic support systems that can detect certain pathologies in medical images with accuracy equal to or better than doctors. It also discusses virtual assistants for patient monitoring, AI-accelerated drug discovery, and possibilities for personalized medicine. One example cited is algorithms capable of predicting heart disease risks from multiple parameters.";
  }
  
  if (message.toLowerCase().includes('future')) {
    return "Regarding the future of AI, the video takes a nuanced perspective. It discusses the concept of superintelligence and the challenges it could pose, but without alarmism. The emphasis is on the importance of developing AI aligned with human values. Among identified future trends: generative AI will continue to develop and improve, AI will become more accessible and democratized, and we'll see deeper integration of AI into our daily lives, with more natural interfaces. The video also emphasizes the importance of education to adapt to these changes.";
  }
  
  // Default response
  return "Thanks for your question! The video covers this topic by detailing how AI is transforming our society across different sectors. It addresses both the benefits, such as automating repetitive tasks and improving decision-making, and challenges, particularly in terms of ethics and social adaptation. If you have more specific questions about certain aspects like ethics, healthcare, or future perspectives, please feel free to ask me.";
};
