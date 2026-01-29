import { Volume2 } from 'lucide-react';
import { VolumeControlsProps } from '../types';

export default function VolumeControls({ volume, onVolumeChange }: VolumeControlsProps) {
  return (
    <div className="flex items-center gap-3 w-full max-w-xs mx-auto text-atlas-secondary">
      <Volume2 size={20} />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-atlas-accent"
      />
    </div>
  );
}
