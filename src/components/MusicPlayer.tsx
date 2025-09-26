import React, { useState, useEffect } from 'react';
import LoadingSkeleton from './LoadingSkeleton';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';
import AudioPlayer from './AudioPlayer';

export interface Song {
  id: number;
  title: string;
  artist: string;
  artwork: string;
  duration: number; // Changed to number
  url: string;
}

const MusicPlayer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);

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
        console.error("Failed to fetch playlist:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  const handleSongSelect = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };
  
  const handleVolumeChange = (newVolume: number) => {
      setVolume(newVolume);
  };

  const playPreviousSong = () => {
    if (!playlist || playlist.length === 0 || !currentSong) return;
    const currentIndex = playlist.findIndex(song => song.id === currentSong.id);
    if (currentIndex > 0) {
        setCurrentSong(playlist[currentIndex - 1]);
        setIsPlaying(true);
    }
  };

  const playNextSong = () => {
    if (!playlist || playlist.length === 0 || !currentSong) return;
    const currentIndex = playlist.findIndex(song => song.id === currentSong.id);
    if (isShuffling) {
        const randomIndex = Math.floor(Math.random() * playlist.length);
        setCurrentSong(playlist[randomIndex]);
    } else if (currentIndex < playlist.length - 1) {
        setCurrentSong(playlist[currentIndex + 1]);
    }
    setIsPlaying(true);
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="flex flex-col md:flex-row p-6 md:p-8 space-y-8 md:space-y-0 md:space-x-8 bg-bg-light dark:bg-bg-dark text-primary-text dark:text-bg-light">
      <div className="flex-1">
        <CurrentlyPlaying 
          song={currentSong}
          playlist={playlist}
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying}
          playbackSpeed={playbackSpeed}
          setPlaybackSpeed={setPlaybackSpeed}
          isShuffling={isShuffling}
          setIsShuffling={setIsShuffling}
          volume={volume}
          onVolumeChange={handleVolumeChange}
          playPreviousSong={playPreviousSong}
          playNextSong={playNextSong}
        />
        <AudioPlayer 
          currentSong={currentSong}
          isPlaying={isPlaying}
          volume={volume / 100}
          playbackSpeed={playbackSpeed}
        />
      </div>
      <div className="flex-1">
        <Playlist 
          playlist={playlist} 
          currentSong={currentSong} 
          onSongSelect={handleSongSelect} 
        />
      </div>
    </div>
  );
};

export default MusicPlayer;