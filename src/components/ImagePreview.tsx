
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, RotateCcw } from 'lucide-react';

interface ImagePreviewProps {
  originalImage: string | null;
  processedImage: string | null;
  onRemoveBackground: () => void;
  onReset: () => void;
  isLoading: boolean;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  originalImage,
  processedImage,
  onRemoveBackground,
  onReset,
  isLoading,
}) => {
  const [checkerboardBackground, setCheckerboardBackground] = useState<string>('');

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
              <div className="animate-pulse-opacity">Processing...</div>
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
        {!processedImage && !isLoading && (
          <Button onClick={onRemoveBackground} disabled={isLoading}>
            Remove Background
          </Button>
        )}
        
        {processedImage && (
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" /> Download
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
