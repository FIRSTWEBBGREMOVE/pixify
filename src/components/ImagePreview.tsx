
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, RotateCcw, Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ImagePreviewProps {
  originalImage: string | null;
  processedImage: string | null;
  onRemoveBackground: () => void;
  onReset: () => void;
  isLoading: boolean;
  processingError?: string | null;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  originalImage,
  processedImage,
  onRemoveBackground,
  onReset,
  isLoading,
  processingError,
}) => {
  const [checkerboardBackground, setCheckerboardBackground] = useState<string>('');
  const [progress, setProgress] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Simulate progress when processing and track real time elapsed
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeInterval: NodeJS.Timeout;
    
    if (isLoading) {
      setProgress(0);
      setTimeElapsed(0);
      
      // Update progress simulation
      interval = setInterval(() => {
        setProgress(prev => {
          // Slow down progress as it gets higher to simulate real processing
          // More realistic progress bar that doesn't reach 100% too quickly
          const increment = prev < 30 ? 3 : prev < 70 ? 1.5 : 0.5;
          const newProgress = Math.min(prev + increment, 95);
          return newProgress;
        });
      }, 500);
      
      // Track actual time elapsed
      timeInterval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    } else if (processedImage) {
      setProgress(100);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timeInterval) clearInterval(timeInterval);
    };
  }, [isLoading, processedImage]);

  useEffect(() => {
    const size = 16;
    const canvas = document.createElement('canvas');
    canvas.width = size * 2;
    canvas.height = size * 2;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, size * 2, size * 2);
      ctx.fillStyle = '#e0e0e0';
      ctx.fillRect(0, 0, size, size);
      ctx.fillRect(size, size, size, size);
    }
    
    setCheckerboardBackground(`url(${canvas.toDataURL()})`);
  }, []);

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'pixify-removed-background.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Format time display
  const formatTime = (seconds: number): string => {
    if (seconds < 60) return `${seconds} seconds`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  if (!originalImage) return null;
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Original Image */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Original Image</h3>
          <div className="rounded-lg overflow-hidden border">
            <img 
              src={originalImage} 
              alt="Original" 
              className="w-full h-auto object-contain"
              style={{ maxHeight: '280px' }}
            />
          </div>
        </div>
        
        {/* Processed Image */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Processed Image</h3>
          <div 
            className="rounded-lg overflow-hidden border flex items-center justify-center"
            style={{ 
              background: processedImage ? checkerboardBackground : 'white',
              minHeight: '200px',
              maxHeight: '280px'
            }}
          >
            {processedImage ? (
              <img 
                src={processedImage} 
                alt="Processed" 
                className="w-full h-auto object-contain"
                style={{ maxHeight: '280px' }}
              />
            ) : isLoading ? (
              <div className="flex flex-col items-center p-4 w-full">
                <Loader2 className="h-8 w-8 animate-spin mb-4" />
                <div className="w-full max-w-xs">
                  <Progress value={progress} className="h-2 mb-2" />
                  <p className="text-center text-sm text-muted-foreground">
                    Processing image... {progress.toFixed(0)}%
                    {timeElapsed > 3 && (
                      <span className="block mt-1 text-xs">
                        (Time elapsed: {formatTime(timeElapsed)})
                      </span>
                    )}
                  </p>
                  {timeElapsed > 20 && (
                    <p className="text-center text-xs text-amber-600 mt-2">
                      Processing is taking longer than usual. Please be patient.
                    </p>
                  )}
                </div>
              </div>
            ) : processingError ? (
              <div className="text-destructive text-center p-4">
                <p className="font-medium">Error Processing Image</p>
                <p className="text-sm mt-2">{processingError}</p>
              </div>
            ) : (
              <div className="text-muted-foreground">
                Click "Remove Background" to process
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="flex justify-center gap-4">
        {!processedImage && !isLoading && !processingError && (
          <Button onClick={onRemoveBackground} disabled={isLoading}>
            Remove Background
          </Button>
        )}
        
        {processedImage && (
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        )}
        
        {processingError && (
          <Button onClick={onRemoveBackground} disabled={isLoading}>
            Try Again
          </Button>
        )}
        
        <Button variant="outline" onClick={onReset}>
          <RotateCcw className="mr-2 h-4 w-4" /> Start Over
        </Button>
      </div>
    </div>
  );
};

export default ImagePreview;
