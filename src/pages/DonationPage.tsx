
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { HeartIcon, CoffeeIcon, GiftIcon } from 'lucide-react';
import { toast } from 'sonner';

const DonationOption = ({ 
  icon: Icon, 
  title, 
  amount, 
  description, 
  onDonate 
}: { 
  icon: React.ElementType; 
  title: string; 
  amount: string; 
  description: string;
  onDonate: () => void;
}) => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <div className="mb-2">
        <Icon className="h-8 w-8 text-brand-purple" />
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="text-3xl font-bold text-center my-4">{amount}</div>
    </CardContent>
    <CardFooter>
      <Button 
        onClick={onDonate} 
        className="w-full bg-brand-purple hover:bg-brand-purple/90"
      >
        Donate
      </Button>
    </CardFooter>
  </Card>
);

const DonationPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonate = (amount: string) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast.success('Thank you for your donation!');
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="container py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block mb-4">
          <HeartIcon className="h-12 w-12 text-brand-purple mx-auto" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Support Pixify</h1>
        <p className="text-xl text-muted-foreground">
          Your donations help us maintain our servers, API costs, and continue providing this tool free of charge to everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <DonationOption
          icon={CoffeeIcon}
          title="Coffee"
          amount="$5"
          description="Buy our team a coffee to fuel late night coding sessions."
          onDonate={() => handleDonate('$5')}
        />
        
        <DonationOption
          icon={HeartIcon}
          title="Supporter"
          amount="$15"
          description="Help cover our monthly server and API costs."
          onDonate={() => handleDonate('$15')}
        />
        
        <DonationOption
          icon={GiftIcon}
          title="Champion"
          amount="$50"
          description="Become a champion and help fund new features and improvements."
          onDonate={() => handleDonate('$50')}
        />
      </div>

      <div className="mt-16 max-w-2xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Why We Need Your Support</h2>
            <p className="text-muted-foreground mb-4">
              Pixify is committed to providing high-quality background removal for free, but we do incur costs:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>API costs for our professional background removal service</li>
              <li>Server hosting and bandwidth charges</li>
              <li>Development time for new features and improvements</li>
              <li>Maintenance and keeping the service running smoothly</li>
            </ul>
            <p className="text-muted-foreground">
              Your donations directly support these costs and help ensure Pixify remains available for everyone.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center text-muted-foreground">
        <p>
          For business inquiries or other ways to support the project, please contact us at <span className="font-medium">support@pixify.com</span>
        </p>
      </div>
    </div>
  );
};

export default DonationPage;
