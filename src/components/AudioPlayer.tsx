import { useEffect, useRef } from 'react';

interface AudioPlayerProps {
  url: string;
  isPlaying: boolean;
  volume: number;
  speed: number;
  onEnded: () => void;
}

export default function AudioPlayer({ url, isPlaying, volume, speed, onEnded }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  // 1. Handle Play/Pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // We use a promise catch here to see if the browser blocked autoplay
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Playback failed (Autoplay might be blocked):", error);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // 2. Handle Volume Changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100; // HTML Audio volume is 0.0 to 1.0
    }
  }, [volume]);

  // 3. Handle Speed Changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  return (
    <audio
      ref={audioRef}
      src={url}
      onEnded={onEnded}
      className="hidden" // Hidden because we use our own custom controls
    />
  );
}
