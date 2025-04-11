
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-brand-purple mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <Button asChild size="lg">
          <Link to="/">
            <HomeIcon className="mr-2 h-5 w-5" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
