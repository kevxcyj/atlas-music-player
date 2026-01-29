interface SongTitleProps {
  title: string;
  artist: string;
}

export default function SongTitle({ title, artist }: SongTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-atlas-text-light dark:text-atlas-text-dark truncate max-w-md">
        {title}
      </h2>
      <p className="text-atlas-secondary mt-1 text-lg">
        {artist}
      </p>
    </div>
  );
}
