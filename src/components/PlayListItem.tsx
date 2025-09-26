import { Song } from './MusicPlayer';

const formatDuration = (durationInSeconds: number): string => {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

interface PlaylistItemProps {
  song: Song;
  isSelected: boolean;
  onSelect: (song: Song) => void;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({ song, isSelected, onSelect }) => {
  const itemClasses = isSelected
    ? "flex items-center justify-between p-4 rounded-lg bg-gray-200 dark:bg-gray-700"
    : "flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105";

  return (
    <div className={itemClasses} onClick={() => onSelect(song)}>
      <div className="flex-1">
        <h4 className="text-primaryText dark:text-bgLight font-bold text-lg">{song.title}</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{song.artist}</p>
      </div>
      <span className="text-primaryText dark:text-bgLight text-sm">{formatDuration(song.duration)}</span>
    </div>
  );
};

export default PlaylistItem;