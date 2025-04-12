
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { HeartIcon, CoffeeIcon, GiftIcon, SparklesIcon, StarIcon } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

const DonationOption = ({ 
  icon: Icon, 
  title, 
  amount, 
  description, 
  onDonate,
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  amount: string; 
  description: string;
  onDonate: () => void;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 * index }}
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0px 10px 30px rgba(99, 102, 241, 0.2)",
      y: -10
    }}
  >
    <Card className="flex flex-col h-full overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t-4 border-t-brand-purple">
      <CardHeader>
        <motion.div 
          className="mb-2 bg-brand-purple/10 p-3 rounded-full w-fit mx-auto" 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 60 }}
        >
          <Icon className="h-8 w-8 text-brand-purple" />
        </motion.div>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <motion.div 
          className="text-3xl font-bold text-center my-4 gradient-text"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          {amount}
        </motion.div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onDonate} 
          className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 group relative overflow-hidden"
        >
          <span className="relative z-10 mr-2 group-hover:animate-bounce">Donate</span>
          <motion.span 
            className="relative z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <SparklesIcon className="h-4 w-4" />
          </motion.span>
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100"
            initial={{ x: "100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.4 }}
          />
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
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div 
          className="inline-block mb-4"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <HeartIcon className="h-12 w-12 animate-glow text-brand-purple mx-auto" />
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
          index={0}
        />
        
        <DonationOption
          icon={HeartIcon}
          title="Supporter"
          amount="$15"
          description="Help cover our monthly server and API costs."
          onDonate={() => handleDonate('$15')}
          index={1}
        />
        
        <DonationOption
          icon={GiftIcon}
          title="Champion"
          amount="$50"
          description="Become a champion and help fund new features and improvements."
          onDonate={() => handleDonate('$50')}
          index={2}
        />
      </div>

      <motion.div 
        className="mt-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden hover-expand">
          <CardContent className="pt-6">
            <motion.div 
              className="absolute top-0 right-0 -mt-4 -mr-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="text-brand-purple/10">
                <StarIcon className="h-24 w-24" />
              </div>
            </motion.div>
            <motion.h2 
              className="text-2xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Why We Need Your Support
            </motion.h2>
            <motion.p 
              className="text-muted-foreground mb-4 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Pixify is committed to providing high-quality background removal for free, but we do incur costs:
            </motion.p>
            <motion.ul 
              className="list-disc pl-6 space-y-2 text-muted-foreground mb-6 relative z-10 staggered-animation-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                API costs for our professional background removal service
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                Server hosting and bandwidth charges
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                Development time for new features and improvements
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                Maintenance and keeping the service running smoothly
              </motion.li>
            </motion.ul>
            <motion.p 
              className="text-muted-foreground relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              Your donations directly support these costs and help ensure Pixify remains available for everyone.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="mt-12 text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.p
          whileHover={{ scale: 1.05 }}
        >
          For business inquiries or other ways to support the project, please contact us at{' '}
          <motion.span 
            className="font-medium animate-pulse-slow"
            whileHover={{ color: "#6366F1" }}
          >
            support@pixify.com
          </motion.span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default DonationPage;
