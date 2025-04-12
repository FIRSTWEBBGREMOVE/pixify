
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
  
  return (
    <motion.header 
      className="border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <motion.span 
            className="text-2xl font-bold animated-gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
          <Button asChild variant="ghost">
            <Link to="/about">About</Link>
          </Button>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button asChild variant="ghost">
              <Link to="/donation">Donate</Link>
            </Button>
          </motion.div>
          
          {user ? (
            <>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild>
                  <Link to="/remove-background">Try Now</Link>
                </Button>
              </motion.div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <motion.div whileHover={{ rotate: 10 }}>
                      <Avatar>
                        <AvatarFallback>
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
            </>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button asChild variant="outline">
                  <Link to="/auth/login">Sign in</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button asChild>
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
