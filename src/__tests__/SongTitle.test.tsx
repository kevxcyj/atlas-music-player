import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import SongTitle from '../components/SongTitle';

// Mock song data
const mockSong = {
  id: 1,
  title: 'Test Song',
  artist: 'Test Artist',
  artwork: '',
  duration: '3:00',
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