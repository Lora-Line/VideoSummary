
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface VideoEmbedProps {
  videoUrl: string;
}

const VideoEmbed = ({ videoUrl }: VideoEmbedProps) => {
  // Extract video ID from URL
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);
  
  if (!videoId) {
    return <div>Invalid video URL</div>;
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0 aspect-video">
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="border-0"
        ></iframe>
      </CardContent>
    </Card>
  );
};

export default VideoEmbed;
