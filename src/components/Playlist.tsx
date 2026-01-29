import PlayListItem from './PlayListItem';
import { Song } from '../types';

interface PlaylistProps {
  songs: Song[];
  currentSongId: string | null;
  onSongSelect: (song: Song) => void;
}

export default function Playlist({ songs, currentSongId, onSongSelect }: PlaylistProps) {
  return (
    <div className="flex flex-col h-full bg-atlas-card-light dark:bg-atlas-card-dark rounded-xl shadow-xl overflow-hidden transition-colors duration-300">
      <h3 className="p-4 text-lg font-bold border-b border-gray-200 dark:border-gray-700">Queue</h3>
      <div className="overflow-y-auto flex-1 p-2 space-y-2">
        {songs.map((song) => (
          <PlayListItem
            key={song.id}
            song={song}
            isSelected={song.id === currentSongId}
            onSelect={onSongSelect}
          />
        ))}
      </div>
    </div>
  );
}
