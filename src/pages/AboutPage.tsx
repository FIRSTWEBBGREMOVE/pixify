
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Pixify</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Empowering everyone to create professional-looking images effortlessly.
        </p>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            At Pixify, we believe that powerful image editing capabilities shouldn't be limited to professional designers with expensive software. Our mission is to democratize image editing by leveraging cutting-edge AI technology that runs directly in your browser.
          </p>
          <p className="text-muted-foreground">
            We're passionate about helping content creators, marketers, e-commerce sellers, and everyday users achieve professional results without the learning curve or high costs traditionally associated with image editing.
          </p>
        </Card>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
          <p className="text-muted-foreground mb-4">
            Pixify uses an advanced machine learning model for semantic segmentation that identifies objects in your images with remarkable accuracy. Unlike many other services that send your images to external servers, our solution works entirely within your browser.
          </p>
          <p className="text-muted-foreground">
            This approach offers two major benefits: lightning-fast processing times and complete privacy. Your images are never uploaded to our servers, ensuring your sensitive visual content remains secure and private.
          </p>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Future Development</h2>
          <p className="text-muted-foreground mb-4">
            We're continuously improving our background removal algorithm to handle even the most challenging cases, like fine hair details and complex edges.
          </p>
          <p className="text-muted-foreground">
            In the coming months, we'll be introducing additional features such as custom background replacement, batch processing for multiple images, and advanced editing tools — all with the same commitment to privacy, speed, and ease of use.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
