import React, { useEffect, useRef } from 'react';
import { Song } from './MusicPlayer';

interface AudioPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ currentSong, isPlaying, volume, playbackSpeed }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.url;
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return (
    <audio ref={audioRef} />
  );
};

export default AudioPlayer;