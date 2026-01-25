import { Volume2 } from 'lucide-react';

interface VolumeControlsProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
}

const VolumeControls: React.FC<VolumeControlsProps> = ({ volume, onVolumeChange }) => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <button aria-label="Volume Icon">
        <Volume2 size={24} className="text-black dark:text-white" />
      </button>
      <input
        type="range"
        aria-label="Volume Slider"
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
      />
    </div>
  );
};

export default VolumeControls;