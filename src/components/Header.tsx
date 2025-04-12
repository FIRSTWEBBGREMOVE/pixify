
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  
  const navItems = [
    { label: "About", path: "/about", delay: 0.2 },
    { label: "Donate", path: "/donation", delay: 0.3 },
  ];
  
  return (
    <motion.header 
      className="border-b"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <motion.span 
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pixify
          </motion.span>
        </Link>
        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Button asChild variant="ghost" className="relative animated-border">
                <Link to={item.path}>{item.label}</Link>
              </Button>
            </motion.div>
          ))}
          
          {user ? (
            <>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button asChild className="bg-gradient-to-r from-brand-purple to-brand-blue hover:bg-brand-purple">
                  <Link to="/remove-background">Try Now</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <Avatar className="animate-glow">
                          <AvatarFallback className="bg-gradient-to-br from-brand-purple to-brand-blue text-white">
                            {user.email?.charAt(0).toUpperCase() || 'U'}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="flex flex-col items-start">
                      <div className="text-sm font-medium">{user.email}</div>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={signOut}>Sign out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button asChild variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                  <Link to="/auth/login">Sign in</Link>
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button asChild className="bg-gradient-to-r from-brand-purple to-brand-blue hover:bg-brand-purple">
                  <Link to="/auth/signup">Sign up</Link>
                </Button>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
