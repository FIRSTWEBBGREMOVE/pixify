
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { HeartIcon, CoffeeIcon, GiftIcon, SparklesIcon } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
  >
    <Card className="flex flex-col h-full">
      <CardHeader>
        <motion.div 
          className="mb-2" 
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="h-8 w-8 text-brand-purple" />
        </motion.div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <motion.div 
          className="text-3xl font-bold text-center my-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {amount}
        </motion.div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onDonate} 
          className="w-full bg-brand-purple hover:bg-brand-purple/90 group"
        >
          <span className="mr-2 group-hover:animate-bounce">Donate</span>
          <SparklesIcon className="h-4 w-4 group-hover:animate-spin" />
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

const DonationPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const buyMeCoffeeUrl = "https://www.buymeacoffee.com/yourname"; // Replace with your actual Buy Me a Coffee URL

  const handleDonate = (amount: string) => {
    setIsProcessing(true);
    
    // Simulate payment processing with animation
    toast.success('Thank you for your donation!', {
      description: `We're redirecting you to our Buy Me a Coffee page...`,
      duration: 3000,
    });
    
    // Redirect to Buy Me a Coffee after a short delay
    setTimeout(() => {
      window.location.href = buyMeCoffeeUrl;
    }, 2000);
  };

  return (
    <div className="container py-12">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div 
          className="inline-block mb-4"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0, -5, 0],
            color: ["#6366F1", "#3B82F6", "#6366F1"]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <HeartIcon className="h-12 w-12 text-brand-purple mx-auto" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold mb-4"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ 
            backgroundImage: "linear-gradient(90deg, #6366F1, #3B82F6, #6366F1)",
            backgroundSize: "200% auto",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text"
          }}
        >
          Support Pixify
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your donations help us maintain our servers, API costs, and continue providing this tool free of charge to everyone.
        </motion.p>
      </motion.div>

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

      <motion.div 
        className="mt-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
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
      </motion.div>

      <motion.div 
        className="mt-12 text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p>
          For business inquiries or other ways to support the project, please contact us at <span className="font-medium">support@pixify.com</span>
        </p>
      </motion.div>
    </div>
  );
};

export default DonationPage;
