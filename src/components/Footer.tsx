
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 10, color: "#6366F1" }
  };

  return (
    <motion.footer 
      className="border-t mt-auto bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="hover-expand">
            <motion.h3 
              className="text-xl font-semibold mb-4 gradient-text"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Pixify
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              AI-powered background removal made simple and fast. 
              Free for everyone to use.
            </motion.p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 animated-border inline-block pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <motion.li initial="initial" whileHover="hover" variants={linkVariants} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/" className="text-muted-foreground hover:text-foreground inline-block">Home</Link>
              </motion.li>
              <motion.li initial="initial" whileHover="hover" variants={linkVariants} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/about" className="text-muted-foreground hover:text-foreground inline-block">About</Link>
              </motion.li>
              <motion.li initial="initial" whileHover="hover" variants={linkVariants} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/donation" className="text-muted-foreground hover:text-foreground inline-block">Donate</Link>
              </motion.li>
              <motion.li initial="initial" whileHover="hover" variants={linkVariants} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/remove-background" className="text-muted-foreground hover:text-foreground inline-block">Remove Background</Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 animated-border inline-block pb-2">Legal</h4>
            <ul className="space-y-2">
              <motion.li initial="initial" whileHover="hover" variants={linkVariants} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground inline-block">Privacy Policy</Link>
              </motion.li>
              <motion.li initial="initial" whileHover="hover" variants={linkVariants} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground inline-block">Terms of Service</Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            © {new Date().getFullYear()} Pixify. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
