import { useState, useEffect } from 'react';
import Placeholder from '../assets/placeholder.svg';

interface CoverArtProps {
  coverUrl: string;
  songId: string;
}

export default function CoverArt({ coverUrl, songId }: CoverArtProps) {
  const [lyrics, setLyrics] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  // Optional: Fetch Lyrics
  useEffect(() => {
    fetch(`/api/v1/lyrics/${songId}`)
        .then(res => res.json())
        .then(data => setLyrics(data.lyrics))
        .catch(() => setLyrics("No lyrics found."));
  }, [songId]);

  return (
    <div 
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-2xl mb-6 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={coverUrl || Placeholder} 
        alt="Album Cover" 
        className="w-full h-full object-cover"
      />
      
      {/* Lyrics Overlay on Hover */}
      <div className={`absolute inset-0 bg-black/70 p-4 overflow-y-auto transition-opacity duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
         <p className="text-white text-center whitespace-pre-wrap text-sm">
            {lyrics || "Loading lyrics..."}
         </p>
      </div>
    </div>
  );
}
