
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

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold animated-gradient-text">Pixify</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost">
            <Link to="/about">About</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/pricing">Pricing</Link>
          </Button>
          
          {user ? (
            <>
              <Button asChild>
                <Link to="/remove-background">Try Now</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarFallback>
                        {user.email?.charAt(0).toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
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
              <Button asChild variant="outline">
                <Link to="/auth/login">Sign in</Link>
              </Button>
              <Button asChild>
                <Link to="/auth/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
