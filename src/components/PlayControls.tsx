import { Play, Pause, SkipBack, SkipForward, Shuffle } from 'lucide-react';
import { PlayControlsProps } from '../types';

export default function PlayControls({
  isPlaying,
  speed,
  isShuffle,
  onTogglePlay,
  onToggleShuffle,
  onChangeSpeed,
  onNext,
  onPrev,
  hasPrevious,
  hasNext
}: PlayControlsProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto">
        {/* Speed Button */}
        <button 
            onClick={onChangeSpeed}
            className="text-xs font-bold w-10 text-atlas-secondary hover:text-atlas-accent transition-colors"
        >
            {speed}x
        </button>

        {/* Back */}
        <button 
            onClick={onPrev} 
            disabled={!hasPrevious}
            className="text-atlas-text-light dark:text-atlas-text-dark disabled:opacity-30 hover:text-atlas-accent transition-colors"
        >
            <SkipBack size={24} />
        </button>

        {/* Play/Pause */}
        <button 
            onClick={onTogglePlay}
            className="p-4 rounded-full bg-atlas-accent hover:bg-atlas-accent-hover text-white transition-transform hover:scale-105 shadow-lg"
        >
            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" />}
        </button>

        {/* Next */}
        <button 
            onClick={onNext}
            disabled={!hasNext}
            className="text-atlas-text-light dark:text-atlas-text-dark disabled:opacity-30 hover:text-atlas-accent transition-colors"
        >
            <SkipForward size={24} />
        </button>

        {/* Shuffle */}
        <button 
            onClick={onToggleShuffle}
            className={`transition-colors ${isShuffle ? 'text-atlas-accent' : 'text-atlas-secondary hover:text-gray-500'}`}
        >
            <Shuffle size={20} />
        </button>
    </div>
  );
}
