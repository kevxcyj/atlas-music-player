export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: string; // "3:45"
  cover: string;
  audio: string;
}

export interface PlayListItemProps {
  title: string;
  artist: string;
  duration: string;
  isCurrent: boolean;
  onClick: () => void;
}
