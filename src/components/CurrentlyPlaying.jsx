import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';

const CurrentlyPlaying = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      <div className="w-64">
        <CoverArt />
      </div>
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  );
};

export default CurrentlyPlaying;