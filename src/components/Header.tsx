
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
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
          <Button asChild>
            <Link to="/remove-background">Try Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
