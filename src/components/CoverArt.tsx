import placeholder from '../assets/placeholder.svg';
import { Song } from './MusicPlayer';

interface CoverArtProps {
  song: Song | null;
}

const CoverArt: React.FC<CoverArtProps> = ({ song }) => {
  const artworkSrc = song ? song.artwork : placeholder;

  return (
    <div className="w-full aspect-square bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden dark:bg-gray-800">
      <img src={artworkSrc} alt="Cover Art" className="object-cover w-full h-full" />
    </div>
  );
};

export default CoverArt;