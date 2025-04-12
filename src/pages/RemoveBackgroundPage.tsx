
import React, { useState } from 'react';
import DropZone from '@/components/DropZone';
import ImagePreview from '@/components/ImagePreview';
import { toast } from 'sonner';
import { loadImage, removeBackground } from '@/utils/backgroundRemoval';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const RemoveBackgroundPage: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [processingError, setProcessingError] = useState<string | null>(null);
  const [processingAttempts, setProcessingAttempts] = useState<number>(0);

  const handleImageSelected = (file: File) => {
    setSelectedFile(file);
    setOriginalImage(URL.createObjectURL(file));
    setProcessedImage(null);
    setProcessingError(null);
    setProcessingAttempts(0);
  };

  const handleRemoveBackground = async () => {
    if (!selectedFile) return;
    if (processingAttempts >= 2) {
      setProcessingError("Multiple processing attempts failed. Please try a different image or refresh the page.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setProcessingError(null);
    setProcessingAttempts(prev => prev + 1);
    
    try {
      toast.info('Processing image...', {
        duration: 3000,
      });
      
      const image = await loadImage(selectedFile);
      const processedBlob = await removeBackground(image, selectedFile);
      
      // Only set the processed image if we're still in a loading state
      // This prevents race conditions with multiple processing attempts
      setProcessedImage(URL.createObjectURL(processedBlob));
      setIsLoading(false);
      toast.success('Background removed successfully!');
    } catch (error) {
      console.error('Error removing background:', error);
      
      // Check if we're still in loading state (not cancelled)
      if (!isLoading) return;
      
      // More user-friendly error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      let userMessage = 'Failed to remove background.';
      
      if (errorMessage.includes('API error')) {
        userMessage = 'API error: Please try again later.';
      } else if (errorMessage.includes('memory') || errorMessage.includes('allocation')) {
        userMessage = 'Not enough memory to process this image. Try a smaller image or a different device.';
      } else {
        userMessage = 'Image processing failed. Try using a smaller or simpler image.';
      }
      
      setProcessingError(userMessage);
      setIsLoading(false);
      toast.error(userMessage);
    }
  };

  const handleReset = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setSelectedFile(null);
    setProcessingError(null);
    setProcessingAttempts(0);
  };

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Remove Image Background</h1>
        <p className="text-muted-foreground mb-4">
          Upload your image and we'll automatically remove the background. Completely free!
        </p>
        
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            We use the remove.bg API for best results. If that fails, our built-in AI model will be used as a fallback.
          </AlertDescription>
        </Alert>

        <Card className="p-6">
          {!originalImage ? (
            <DropZone 
              onImageSelected={handleImageSelected}
              isLoading={isLoading}
            />
          ) : (
            <ImagePreview
              originalImage={originalImage}
              processedImage={processedImage}
              onRemoveBackground={handleRemoveBackground}
              onReset={handleReset}
              isLoading={isLoading}
              processingError={processingError}
            />
          )}
        </Card>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Tips for best results</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Use images with good contrast between subject and background</li>
            <li>Ensure your subject is clearly visible and well-lit</li>
            <li>For complex edges (like hair), use high resolution images when possible</li>
            <li>Simple images with clear subjects work best</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackgroundPage;
