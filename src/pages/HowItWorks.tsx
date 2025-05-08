import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 md:px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">How VideoSummary Works</h1>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Step 1: Audio Transcription</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                When you upload a video, our AI first extracts the audio track. 
                This audio is then processed through an advanced speech recognition model, 
                similar to OpenAI's Whisper, which accurately transcribes spoken content into text.
                The model handles various accents, background noise, and can distinguish between multiple speakers.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Step 2: Content Analysis</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                Once transcribed, our AI analyzes the text to understand the content deeply.
                It identifies key topics, important arguments, and creates a structured summary 
                of the video. The system can recognize concepts, entities, and relationships 
                between different parts of the content, providing context-aware understanding.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Step 3: Interactive Conversation</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                The most powerful feature is the AI's ability to discuss the video content with you.
                Using a large language model trained on diverse data, the system can answer questions,
                provide additional context, and engage in meaningful conversations about the video's subject matter.
                This creates an interactive learning experience tailored to your specific interests.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Behind the scenes, VideoSummary uses a pipeline of sophisticated AI technologies:
              </p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <strong>Audio Extraction:</strong> We separate the audio track from video files and convert it to MP3 format for efficient processing.
                </li>
                <li>
                  <strong>Speech-to-Text:</strong> Advanced neural networks convert speech to text with high accuracy, even with challenging audio.
                </li>
                <li>
                  <strong>Natural Language Processing:</strong> The transcribed text is analyzed using transformer-based language models to extract meaning and context.
                </li>
                <li>
                  <strong>Summary Generation:</strong> Our specialized summarization algorithms create concise overviews while maintaining important details.
                </li>
                <li>
                  <strong>Conversational AI:</strong> A fine-tuned language model with context awareness enables natural discussions about the video content.
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;