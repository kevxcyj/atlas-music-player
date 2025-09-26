import PlaylistItem from './PlayListItem';

const Playlist = () => {
  // Mock data for the playlist
  const playlistData = [
    { title: 'Painted in Blue', artist: 'Soul Canvas', length: '5:55' },
    { title: 'Title Drift', artist: 'Cosmic Seas', length: '8:02' },
    { title: 'Fading Shadows', artist: 'The Emberlight', length: '3:01' },
    { title: 'Cosmic Drift', artist: 'Solar Flare', length: '5:01' },
    { title: 'Urban Serenade', artist: 'Midnight Groove', length: '4:54' },
    { title: 'Whispers in the Wind', artist: 'Rust & Rain', length: '6:13' },
    { title: 'Electric Fever', artist: 'Moon Jungle', length: '8:41' },
    { title: 'Edge of the Abyss', artist: 'Steel Horizon', length: '2:27' },
    { title: 'Golden Haze', artist: 'Velvet Waves', length: '3:15' },
    { title: 'Shatter the Silence', artist: 'Thunderclap Echo', length: '8:22' },
  ];

  return (
    <div className="flex flex-col p-6 space-y-2">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Playlist</h2>
      <div className="space-y-2">
        {playlistData.map((song, index) => (
          <PlaylistItem
            key={index}
            // Pass the song data as props
            title={song.title}
            artist={song.artist}
            length={song.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;