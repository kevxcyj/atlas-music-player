export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover?: string;
  song?: string;
}

export interface PlayListItemProps {
  song: Song;
  isSelected: boolean;
  onSelect: (song: Song) => void;
}

export interface PlayControlsProps {
  isPlaying: boolean;
  speed: number;
  isShuffle: boolean;
  onTogglePlay: () => void;
  onToggleShuffle: () => void;
  onChangeSpeed: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface VolumeControlsProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}
