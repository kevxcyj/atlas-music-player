import { Play, SkipForward, Rewind, Shuffle } from 'lucide-react';

const PlayControls = () => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-primary-text dark:text-bg-light">1x</span>
      <button className="p-2 rounded-full text-primary-text dark:text-bg-light hover:bg-bg-light dark:hover:bg-bg-dark transition-colors duration-200">
        <Rewind size={24} />
      </button>
      <button className="p-4 rounded-lg bg-primary-accent text-bg-light hover:bg-primary-accent/80 transition-colors duration-200">
        <Play size={32} />
      </button>
      <button className="p-2 rounded-full text-primary-text dark:text-bg-light hover:bg-bg-light dark:hover:bg-bg-dark transition-colors duration-200">
        <SkipForward size={24} />
      </button>
      <button className="p-2 rounded-full text-primary-text dark:text-bg-light hover:bg-bg-light dark:hover:bg-bg-dark transition-colors duration-200">
        <Shuffle size={24} />
      </button>
    </div>
  );
};

export default PlayControls;