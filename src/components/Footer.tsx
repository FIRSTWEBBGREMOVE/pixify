
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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

  return (
    <motion.footer 
      className="border-t mt-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 animated-gradient-text">Pixify</h3>
            <p className="text-muted-foreground">
              AI-powered background removal made simple and fast. 
              Free for everyone to use.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/donation" className="text-muted-foreground hover:text-foreground">Donate</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/remove-background" className="text-muted-foreground hover:text-foreground">Remove Background</Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Pixify. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
