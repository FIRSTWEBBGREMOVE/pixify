
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

  const handleImageSelected = (file: File) => {
    setSelectedFile(file);
    setOriginalImage(URL.createObjectURL(file));
    setProcessedImage(null);
    setProcessingError(null);
  };

  const handleRemoveBackground = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setProcessingError(null);
    
    try {
      toast.info('Processing image...', {
        duration: 3000,
      });
      
      const image = await loadImage(selectedFile);
      const processedBlob = await removeBackground(image);
      
      setProcessedImage(URL.createObjectURL(processedBlob));
      toast.success('Background removed successfully!');
    } catch (error) {
      console.error('Error removing background:', error);
      
      // More user-friendly error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      let userMessage = 'Failed to remove background.';
      
      if (errorMessage.includes('WebGPU') || errorMessage.includes('GPU adapter')) {
        userMessage = 'Your browser doesn\'t fully support WebGPU. We\'ll try WebAssembly instead.';
        // Try again automatically with WASM
        handleRemoveBackground();
        return;
      } else if (errorMessage.includes('memory') || errorMessage.includes('allocation')) {
        userMessage = 'Not enough memory to process this image. Try a smaller image or a different device.';
      }
      
      setProcessingError(userMessage);
      toast.error(userMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setSelectedFile(null);
    setProcessingError(null);
  };

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Remove Image Background</h1>
        <p className="text-muted-foreground mb-4">
          Upload your image and our AI will automatically remove the background.
        </p>
        
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            This feature uses AI to remove image backgrounds. It works best in Chrome browser with WebGPU support.
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
            <li>If results aren't perfect, try adjusting the lighting or contrast of your original image</li>
            <li>For best performance, use Google Chrome with WebGPU support enabled</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackgroundPage;
