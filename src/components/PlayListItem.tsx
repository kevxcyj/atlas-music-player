import { Song, PlayListItemProps } from '../types';


function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function PlayListItem({ song, isSelected, onSelect }: PlayListItemProps) {
  return (
    <div 
      onClick={() => onSelect(song)}
      className={`
        flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors
        ${isSelected 
          ? 'bg-atlas-accent text-white' 
          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
        }
      `}
    >
      <div className="flex flex-col">
        <span className={`font-medium ${isSelected ? 'text-white' : 'text-atlas-text-light dark:text-atlas-text-dark'}`}>
            {song.title}
        </span>
        <span className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
            {song.artist}
        </span>
      </div>
      <span className={`text-sm ${isSelected ? 'text-white' : 'text-gray-500'}`}>
        {formatTime(song.duration)}
      </span>
    </div>
  );
}
