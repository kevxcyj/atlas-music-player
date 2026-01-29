import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import CoverArt from '../components/CoverArt';
import { Song } from '../components/MusicPlayer';

const mockSong: Song = {
  id: 1,
  title: 'Test Song',
  artist: 'Test Artist',
  artwork: 'http://example.com/art.jpg',
  duration: 180, // Corrected to number
  url: 'http://example.com/song.mp3',
};

test('CoverArt renders correctly with a song', () => {
  const { container } = render(<CoverArt song={mockSong} />);
  expect(container).toMatchSnapshot();
});

test('CoverArt renders correctly without a song', () => {
  const { container } = render(<CoverArt song={null} />);
  expect(container).toMatchSnapshot();
});