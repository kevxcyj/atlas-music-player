import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

const MusicPlayer = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 md:p-8 space-y-8 md:space-y-0 md:space-x-8 bg-bg-light dark:bg-bg-dark">
      <div className="flex-1">
        <CurrentlyPlaying />
      </div>
      <div className="flex-1">
        <Playlist />
      </div>
    </div>
  );
};

export default MusicPlayer;
