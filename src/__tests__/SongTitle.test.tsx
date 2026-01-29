import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import SongTitle from '../components/SongTitle';
import { Song } from '../components/MusicPlayer';

const mockSong: Song = {
  id: 1,
  title: 'Test Song',
  artist: 'Test Artist',
  artwork: '',
  duration: 180,
  url: '',
};

test('SongTitle renders correctly with a song', () => {
  const { container } = render(<SongTitle song={mockSong} />);
  expect(container).toMatchSnapshot();
});

test('SongTitle renders correctly without a song', () => {
  const { container } = render(<SongTitle song={null} />);
  expect(container).toMatchSnapshot();
});