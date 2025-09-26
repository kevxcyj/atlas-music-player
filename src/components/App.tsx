import React, { useState, useEffect } from 'react';
import MusicPlayer from './MusicPlayer';
import LoadingSkeleton from './LoadingSkeleton';
import '../index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bg-light dark:bg-bg-dark text-primary-text dark:text-bg-light">
      {isLoading ? <LoadingSkeleton /> : <MusicPlayer />}
    </div>
  );
}

export default App;
