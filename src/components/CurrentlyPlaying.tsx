import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';
import { Song, PlayControlsProps, VolumeControlsProps } from '../types';

interface CurrentlyPlayingProps extends PlayControlsProps, VolumeControlsProps {
  song: Song;
}

export default function CurrentlyPlaying({ song, ...props }: CurrentlyPlayingProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-atlas-card-light dark:bg-atlas-card-dark rounded-xl shadow-xl transition-colors duration-300">
      <CoverArt coverUrl={song.cover} songId={song.id} />
      <SongTitle title={song.title} artist={song.artist} />
      
      <div className="w-full mt-6 space-y-4">
        <PlayControls {...props} />
        <VolumeControls volume={props.volume} onVolumeChange={props.onVolumeChange} />
      </div>
    </div>
  );
}
