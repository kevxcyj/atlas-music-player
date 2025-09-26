import React from 'react';
import { Play, SkipForward, Rewind, Shuffle, Pause } from 'lucide-react';
import { Song } from './MusicPlayer';

interface PlayControlsProps {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
  isShuffling: boolean;
  setIsShuffling: (isShuffling: boolean) => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
  song: Song | null;
  playlist: Song[];
}

const PlayControls: React.FC<PlayControlsProps> = ({ 
  isPlaying, 
  setIsPlaying, 
  playbackSpeed, 
  setPlaybackSpeed, 
  isShuffling, 
  setIsShuffling, 
  playNextSong, 
  playPreviousSong,
  song,
  playlist
}) => {
  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const toggleSpeed = () => {
    const speeds = [1, 2, 0.5];
    const currentSpeedIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentSpeedIndex + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
  };

  const currentIndex = playlist.findIndex(item => item.id === song?.id);
  const isFirstSong = currentIndex === 0;
  const isLastSong = currentIndex === playlist.length - 1;

  return (
    <div className="flex items-center space-x-4">
      <button aria-label="Playback Speed" onClick={toggleSpeed}>
        <span className="text-primaryText dark:text-bgLight">{playbackSpeed}x</span>
      </button>
      <button 
        aria-label="Play Previous Song" 
        onClick={playPreviousSong} 
        className="p-2 rounded-full text-primaryText dark:text-bgLight hover:bg-bgLight dark:hover:bg-bgDark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isFirstSong}
      >
        <Rewind size={24} />
      </button>
      <button aria-label={isPlaying ? "Pause" : "Play"} onClick={togglePlay} className="p-4 rounded-lg bg-primaryAccent text-bgLight hover:bg-primaryAccent/80 transition-colors duration-200">
        {isPlaying ? <Pause size={32} /> : <Play size={32} />}
      </button>
      <button 
        aria-label="Play Next Song" 
        onClick={playNextSong} 
        className="p-2 rounded-full text-primaryText dark:text-bgLight hover:bg-bgLight dark:hover:bg-bgDark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLastSong && !isShuffling}
      >
        <SkipForward size={24} />
      </button>
      <button aria-label="Toggle Shuffle" onClick={() => setIsShuffling(!isShuffling)} className={`p-2 rounded-full hover:bg-bgLight dark:hover:bg-bgDark transition-colors duration-200 ${isShuffling ? 'text-primaryAccent' : 'text-primaryText dark:text-bgLight'}`}>
        <Shuffle size={24} />
      </button>
    </div>
  );
};

export default PlayControls;