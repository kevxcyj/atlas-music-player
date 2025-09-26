import React from 'react';
import { Play, SkipForward, Rewind, Shuffle, Pause } from 'lucide-react';

interface PlayControlsProps {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
  isShuffling: boolean;
  setIsShuffling: (isShuffling: boolean) => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
}

const PlayControls: React.FC<PlayControlsProps> = ({ 
  isPlaying, 
  setIsPlaying, 
  playbackSpeed, 
  setPlaybackSpeed, 
  isShuffling, 
  setIsShuffling, 
  playNextSong, 
  playPreviousSong
}) => {
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleSpeed = () => {
    let newSpeed = 1;
    if (playbackSpeed === 1) {
      newSpeed = 2;
    } else if (playbackSpeed === 2) {
      newSpeed = 0.5;
    }
    setPlaybackSpeed(newSpeed);
  };

  return (
    <div className="flex items-center space-x-4">
      <button aria-label="Playback Speed" onClick={toggleSpeed}>
        <span className="text-primary-text dark:text-bg-light">{playbackSpeed}x</span>
      </button>
      <button aria-label="Play Previous Song" onClick={playPreviousSong} className="p-2 rounded-full text-primary-text dark:text-bg-light hover:bg-bg-light dark:hover:bg-bg-dark transition-colors duration-200">
        <Rewind size={24} />
      </button>
      <button aria-label={isPlaying ? "Pause" : "Play"} onClick={togglePlay} className="p-4 rounded-lg bg-primary-accent text-bg-light hover:bg-primary-accent/80 transition-colors duration-200">
        {isPlaying ? <Pause size={32} /> : <Play size={32} />}
      </button>
      <button aria-label="Play Next Song" onClick={playNextSong} className="p-2 rounded-full text-primary-text dark:text-bg-light hover:bg-bg-light dark:hover:bg-bg-dark transition-colors duration-200">
        <SkipForward size={24} />
      </button>
      <button aria-label="Toggle Shuffle" onClick={() => setIsShuffling(!isShuffling)} className={`p-2 rounded-full hover:bg-bg-light dark:hover:bg-bg-dark transition-colors duration-200 ${isShuffling ? 'text-primary-accent' : 'text-primary-text dark:text-bg-light'}`}>
        <Shuffle size={24} />
      </button>
    </div>
  );
};

export default PlayControls;