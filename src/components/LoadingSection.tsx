
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LoadingSection = () => {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <Card className="overflow-hidden">
            <CardContent className="p-0 aspect-video bg-muted/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-shimmer rounded animate-shimmer" />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="h-full">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="h-8 w-3/4 bg-muted/30 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-shimmer rounded animate-shimmer" />
                </div>
                <div className="h-4 w-full bg-muted/30 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-shimmer rounded animate-shimmer" />
                </div>
                <div className="h-4 w-full bg-muted/30 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-shimmer rounded animate-shimmer" />
                </div>
                <div className="h-4 w-3/4 bg-muted/30 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-shimmer rounded animate-shimmer" />
                </div>
                <div className="h-4 w-full bg-muted/30 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-shimmer rounded animate-shimmer" />
                </div>
                <div className="h-4 w-5/6 bg-muted/30 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-shimmer rounded animate-shimmer" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoadingSection;
