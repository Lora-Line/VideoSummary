
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VideoEmbed from './VideoEmbed';
import { Separator } from '@/components/ui/separator';

interface SummarySectionProps {
  videoUrl: string;
  summary: string;
  title: string;
}

const SummarySection = ({ videoUrl, summary, title }: SummarySectionProps) => {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <VideoEmbed videoUrl={videoUrl} />
        </div>
        <div>
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl">{title}</CardTitle>
              <Separator className="my-2" />
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h3 className="text-lg font-medium mb-2">Résumé</h3>
              <div className="space-y-4 text-pretty">
                {summary.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
