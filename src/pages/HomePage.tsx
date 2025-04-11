
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ImageIcon, CheckIcon, ZapIcon, ShieldIcon } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="animated-gradient-text">Perfect images,</span><br />
            no background needed.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Remove image backgrounds instantly with our AI-powered tool.
            Fast, accurate, and incredibly simple to use.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/remove-background">Try for Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why choose <span className="animated-gradient-text">Pixify</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <ZapIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Process your images in seconds, not minutes. Our AI works directly in your browser for instant results.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <ImageIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pixel Perfect</h3>
              <p className="text-muted-foreground">
                Get clean edges and precise details with our state-of-the-art AI that preserves image quality.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <ShieldIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-muted-foreground">
                Your images never leave your device. All processing happens locally in your browser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Remove backgrounds in just three simple steps
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-purple">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Image</h3>
              <p className="text-muted-foreground">
                Drag and drop or click to upload your image
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-purple">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Process</h3>
              <p className="text-muted-foreground">
                Our AI automatically detects and removes the background
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-purple">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Download</h3>
              <p className="text-muted-foreground">
                Get your transparent background image as a PNG file
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to remove backgrounds?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of professionals who trust Pixify for their image editing needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/remove-background">Try Now - It's Free!</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
