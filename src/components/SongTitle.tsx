import { Song } from './MusicPlayer';

interface SongTitleProps {
  song: Song | null;
}

const SongTitle: React.FC<SongTitleProps> = ({ song }) => {
  if (!song) {
    return (
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xl font-bold dark:text-bg-light">Loading...</h3>
        <p className="text-gray-500 dark:text-gray-400">...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-xl font-bold dark:text-bg-light">{song.title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{song.artist}</p>
    </div>
  );
};

export default SongTitle;