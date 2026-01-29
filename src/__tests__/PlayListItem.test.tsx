import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import PlaylistItem from '../components/PlayListItem';
import { Song } from '../components/MusicPlayer';

const mockSong: Song = {
  id: 1,
  title: 'Painted in Blue',
  artist: 'Soul Canvas',
  artwork: '',
  duration: 355,
  url: '',
};

test('PlaylistItem renders correctly when not selected', () => {
  const { container } = render(<PlaylistItem song={mockSong} isSelected={false} onSelect={() => {}} />);
  expect(container).toMatchSnapshot();
});

test('PlaylistItem renders correctly when selected', () => {
  const { container } = render(<PlaylistItem song={mockSong} isSelected={true} onSelect={() => {}} />);
  expect(container).toMatchSnapshot();
});