
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { UploadIcon } from 'lucide-react';

interface DropZoneProps {
  onImageSelected: (file: File) => void;
  isLoading: boolean;
}

const DropZone: React.FC<DropZoneProps> = ({ onImageSelected, isLoading }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      validateAndProcessFile(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      validateAndProcessFile(file);
    }
  };

  const validateAndProcessFile = (file: File) => {
    // Validate file type
    if (!file.type.match('image.*')) {
      toast.error('Please select an image file');
      return;
    }

    // Validate file size (less than 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image size should be less than 10MB');
      return;
    }

    onImageSelected(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`drop-area border-2 rounded-lg p-8 text-center cursor-pointer ${
        isDragging ? 'active' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleButtonClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="image/*"
        className="hidden"
      />
      <div className="flex flex-col items-center justify-center p-6">
        <div className="mb-4 p-4 rounded-full bg-primary/10">
          <UploadIcon size={32} className="text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">
          {isLoading ? 'Processing...' : 'Drop your image here'}
        </h3>
        <p className="text-muted-foreground mb-4">
          {isLoading
            ? 'Please wait while we remove the background'
            : 'or click to browse (PNG, JPG, up to 10MB)'}
        </p>
        {isLoading ? (
          <div className="animate-pulse-opacity">
            <div className="h-2 w-32 bg-muted rounded-full"></div>
          </div>
        ) : (
          <Button variant="outline" type="button" disabled={isLoading}>
            Select Image
          </Button>
        )}
      </div>
    </div>
  );
};

export default DropZone;
