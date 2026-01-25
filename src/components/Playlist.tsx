import PlaylistItem from './PlayListItem';

import { Song } from './MusicPlayer';

// Define the types for the props this component expects
interface PlaylistProps {
  playlist: Song[];
  currentSong: Song | null;
  onSongSelect: (song: Song) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ playlist, currentSong, onSongSelect }) => {
  return (
    <div className="flex flex-col p-6 space-y-2">
      <h2 className="text-xl font-bold mb-4 dark:text-bg-light">Playlist</h2>
      <div className="space-y-2">
        {playlist.map((song) => (
          <PlaylistItem
            key={song.id}
            song={song}
            isSelected={currentSong?.id === song.id}
            onSelect={onSongSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;