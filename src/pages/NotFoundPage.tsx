import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-sm font-semibold text-accent tracking-widest uppercase mb-2">
        404 ERROR
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-muted text-sm sm:text-base max-w-md mb-8">
        The route you are navigating to does not exist or has moved.
      </p>
      <Link to="/">
        <Button variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
          Back to Portfolio
        </Button>
      </Link>
    </div>
  );
};
