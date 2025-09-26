import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';
import { Song } from './MusicPlayer';

interface CurrentlyPlayingProps {
  song: Song | null;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
  isShuffling: boolean;
  setIsShuffling: (isShuffling: boolean) => void;
  volume: number;
  onVolumeChange: (newVolume: number) => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ song, isPlaying, setIsPlaying, playbackSpeed, setPlaybackSpeed, isShuffling, setIsShuffling, volume, onVolumeChange, playNextSong, playPreviousSong }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      <div className="w-full max-w-sm mx-auto">
        <CoverArt song={song} />
      </div>
      <SongTitle song={song} />
      <PlayControls 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        playbackSpeed={playbackSpeed}
        setPlaybackSpeed={setPlaybackSpeed}
        isShuffling={isShuffling}
        setIsShuffling={setIsShuffling}
        playNextSong={playNextSong}
        playPreviousSong={playPreviousSong}
      />
      <VolumeControls 
        volume={volume}
        onVolumeChange={onVolumeChange}
      />
    </div>
  );
};

export default CurrentlyPlaying;