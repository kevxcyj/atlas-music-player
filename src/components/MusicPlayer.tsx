import { useState, useEffect } from 'react';
import { Song } from '../types';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';
import LoadingSkeleton from './LoadingSkeleton';
import AudioPlayer from './AudioPlayer';

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [currentSongDetails, setCurrentSongDetails] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [speed, setSpeed] = useState(1);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('/api/v1/playlist');
        const data = await response.json();
        setPlaylist(data);
        if (data.length > 0) {
          setCurrentSong(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch playlist", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlaylist();
  }, []);

  useEffect(() => {
    if (currentSong) {
      fetch(`/api/v1/songs/${currentSong.id}`)
        .then((res) => res.json())
        .then((data: Song) => {
          setCurrentSongDetails(data); // song details uploaded
        })
        .catch((err) => console.error("Failed to fetch song details", err));
    }
  }, [currentSong]);

  const handleNext = () => {
    if (!currentSong) return;
    
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentSong(playlist[randomIndex]);
    } else {
      const currentIndex = playlist.findIndex(s => s.id === currentSong.id);
      if (currentIndex < playlist.length - 1) {
        setCurrentSong(playlist[currentIndex + 1]);
      }
    }
  };

  const handlePrev = () => {
    if (!currentSong) return;
    const currentIndex = playlist.findIndex(s => s.id === currentSong.id);
    if (currentIndex > 0) {
      setCurrentSong(playlist[currentIndex - 1]);
    }
  };

  const handleSongSelect = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handleSpeedChange = () => {
    const speeds = [0.5, 1, 2];
    const nextIndex = (speeds.indexOf(speed) + 1) % speeds.length;
    setSpeed(speeds[nextIndex]);
  };

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 gap-6">
      <div className="flex-1">
        {(currentSongDetails || currentSong) && (
          <CurrentlyPlaying
            song={currentSongDetails || currentSong} 
            isPlaying={isPlaying}
            volume={volume}
            speed={speed}
            isShuffle={isShuffle}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            onToggleShuffle={() => setIsShuffle(!isShuffle)}
            onChangeSpeed={handleSpeedChange}
            onNext={handleNext}
            onPrev={handlePrev}
            onVolumeChange={setVolume}
            hasPrevious={playlist.findIndex(s => s.id === currentSong?.id) > 0}
            hasNext={playlist.findIndex(s => s.id === currentSong?.id) < playlist.length - 1 || isShuffle}
          />
        )}
      </div>
      
      <div className="w-full md:w-96">
        <Playlist 
          songs={playlist} 
          currentSongId={currentSong?.id || null} 
          onSongSelect={handleSongSelect} 
        />
      </div>

      {}
      {currentSongDetails?.song && (
        <AudioPlayer
          key={currentSongDetails.id}
          url={currentSongDetails.song}
          isPlaying={isPlaying}
          volume={volume}
          speed={speed}
          onEnded={handleNext}
        />
      )}
    </div>
  );
}
