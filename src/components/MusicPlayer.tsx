import React, { useState, useEffect } from 'react';
import LoadingSkeleton from './LoadingSkeleton';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';
import AudioPlayer from './AudioPlayer';

export interface Song {
  id: any;
  title: string;
  artist: string;
  artwork: string;
  duration: number;
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

  const fetchSongDetails = async (songId: any) => {
    try {
      const response = await fetch(`/api/v1/songs/${songId}`);
      const songData = await response.json();
      return { ...songData, url: songData.song };
    } catch (error) {
      console.error(`Failed to fetch details for song ${songId}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const initializePlayer = async () => {
      try {
        const response = await fetch('/api/v1/playlist');
        const playlistData = await response.json();
        setPlaylist(playlistData);
        if (playlistData.length > 0) {
          const firstSongDetails = await fetchSongDetails(playlistData[0].id);
          setCurrentSong(firstSongDetails);
        }
      } catch (error) {
        console.error("Failed to fetch playlist:", error);
      } finally {
        setIsLoading(false);
      }
    };
    initializePlayer();
  }, []);

  const handleSongSelect = async (song: Song) => {
    const fullSong = await fetchSongDetails(song.id);
    if (fullSong) {
      setCurrentSong(fullSong);
      setIsPlaying(true);
    }
  };
  
  const handleVolumeChange = (newVolume: number) => {
      setVolume(newVolume);
  };

  const playPreviousSong = async () => {
    if (!playlist || playlist.length === 0 || !currentSong) return;
    const currentIndex = playlist.findIndex(song => song.id === currentSong.id);
    if (currentIndex > 0) {
        const prevSongDetails = await fetchSongDetails(playlist[currentIndex - 1].id);
        setCurrentSong(prevSongDetails);
        setIsPlaying(true);
    }
  };

  const playNextSong = async () => {
    if (!playlist || playlist.length === 0 || !currentSong) return;
    const currentIndex = playlist.findIndex(song => song.id === currentSong.id);
    let nextIndex;

    if (isShuffling) {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } else {
      nextIndex = currentIndex < playlist.length - 1 ? currentIndex + 1 : -1;
    }

    if (nextIndex !== -1) {
      const nextSongDetails = await fetchSongDetails(playlist[nextIndex].id);
      setCurrentSong(nextSongDetails);
      setIsPlaying(true);
    }
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="flex flex-col md:flex-row p-6 md:p-8 space-y-8 md:space-y-0 md:space-x-8">
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