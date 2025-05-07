
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
    throw new Error('URL YouTube invalide');
  }
  
  // Simulate API call delay
  await delay(3000);
  
  // Mock response
  return {
    title: "Comment l'Intelligence Artificielle transforme notre monde",
    summary: "Cette vidéo explore l'impact transformationnel de l'intelligence artificielle sur notre société moderne. Elle commence par un aperçu historique du développement de l'IA, depuis ses débuts théoriques jusqu'aux applications actuelles.\n\nLes principaux points abordés incluent :\n\n1. L'évolution des algorithmes d'apprentissage automatique et leur impact sur diverses industries.\n\n2. Les implications éthiques de l'IA, notamment en ce qui concerne la vie privée, la prise de décision automatisée et les biais algorithmiques.\n\n3. Comment l'IA révolutionne des secteurs comme la santé, les transports et l'éducation, avec des exemples concrets d'applications innovantes.\n\n4. Les défis et opportunités futurs, y compris la question de la superintelligence et comment les sociétés peuvent s'adapter à ces changements rapides.\n\nLa conclusion souligne l'importance d'une approche équilibrée du développement de l'IA, qui maximise ses avantages tout en atténuant ses risques potentiels."
  };
};

// Mock function to chat about the video
export const chatWithAI = async (message: string) => {
  // Simulate API call delay
  await delay(1500);
  
  // Mock responses based on keywords in the message
  if (message.toLowerCase().includes('éthique') || message.toLowerCase().includes('ethique')) {
    return "Les questions éthiques sont en effet centrales dans le développement de l'IA. La vidéo aborde plusieurs aspects comme les biais algorithmiques qui peuvent perpétuer des inégalités existantes, les problèmes de vie privée liés à la collecte massive de données, et la question de la transparence des décisions prises par les systèmes d'IA. Un point important soulevé est la nécessité d'établir des cadres réglementaires adaptés pour garantir que le développement de l'IA reste bénéfique pour l'humanité.";
  }
  
  if (message.toLowerCase().includes('santé') || message.toLowerCase().includes('sante') || message.toLowerCase().includes('médical') || message.toLowerCase().includes('medical')) {
    return "Dans le domaine de la santé, l'IA apporte des avancées significatives. La vidéo mentionne notamment les systèmes d'aide au diagnostic qui peuvent détecter certaines pathologies sur des images médicales avec une précision égale ou supérieure à celle des médecins. Elle évoque également les assistants virtuels pour le suivi des patients, la découverte de médicaments accélérée par l'IA, et les possibilités de médecine personnalisée. Un exemple cité est celui des algorithmes capables de prédire les risques de maladies cardiaques à partir de multiples paramètres.";
  }
  
  if (message.toLowerCase().includes('futur') || message.toLowerCase().includes('avenir')) {
    return "Concernant l'avenir de l'IA, la vidéo adopte une perspective nuancée. Elle évoque le concept de superintelligence et les défis qu'elle pourrait poser, mais sans tomber dans l'alarmisme. L'accent est mis sur l'importance de développer une IA alignée sur les valeurs humaines. Parmi les tendances futures identifiées : l'IA générative continuera de se développer et de s'améliorer, l'IA deviendra plus accessible et démocratisée, et nous verrons une intégration plus profonde de l'IA dans notre quotidien, avec des interfaces plus naturelles. La vidéo souligne également l'importance de la formation pour s'adapter à ces changements.";
  }
  
  // Default response
  return "Merci pour votre question ! La vidéo couvre ce sujet en détaillant comment l'IA transforme notre société à travers différents secteurs. Elle aborde à la fois les avantages, comme l'automatisation des tâches répétitives et l'amélioration de la prise de décision, et les défis, notamment en termes d'éthique et d'adaptation sociale. Si vous avez des questions plus spécifiques sur certains aspects comme l'éthique, la santé ou les perspectives futures, n'hésitez pas à me les poser.";
};
