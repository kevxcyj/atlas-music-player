import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, test, describe, beforeEach } from 'vitest';
import MusicPlayer from '../components/MusicPlayer';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

// Mock data to simulate API responses for the playlist and song details.
const mockPlaylist = [
  {
    id: 'cm3ixp4sy0thg0cmtdzukgg56',
    title: 'Painted in Blue',
    artist: 'Soul Canvas',
    genre: 'Neo-Soul',
    duration: 194,
  },
  {
    id: 'soammx6oibpan244my4toqke',
    title: 'Tidal Drift',
    artist: 'Echoes of the Sea',
    genre: 'Ambient',
    duration: 191,
  },
];

const mockSongDetails = {
  'cm3ixp4sy0thg0cmtdzukgg56': {
    id: 'cm3ixp4sy0thg0cmtdzukgg56',
    title: 'Painted in Blue',
    artist: 'Soul Canvas',
    artwork: 'https://placehold.co/100x100',
    duration: 194,
    song: 'http://localhost:5173/api/v1/audio?songId=cm3ixp4sy0thg0cmtdzukgg56',
    url: 'http://localhost:5173/api/v1/audio?songId=cm3ixp4sy0thg0cmtdzukgg56'
  },
  'soammx6oibpan244my4toqke': {
    id: 'soammx6oibpan244my4toqke',
    title: 'Tidal Drift',
    artist: 'Echoes of the Sea',
    artwork: 'https://placehold.co/100x100',
    duration: 191,
    song: 'http://localhost:5173/api/v1/audio?songId=soammx6oibpan244my4toqke',
    url: 'http://localhost:5173/api/v1/audio?songId=soammx6oibpan244my4toqke'
  },
};

// Test suite for the MusicPlayer component.
describe('MusicPlayer', () => {
  beforeEach(() => {
    server.use(
      http.get('/api/v1/playlist', () => {
        return HttpResponse.json(mockPlaylist);
      }),
      http.get('/api/v1/songs/:songId', ({ params }) => {
        const songId = params.songId as keyof typeof mockSongDetails;
        if (mockSongDetails[songId]) {
          return HttpResponse.json(mockSongDetails[songId]);
        }
        return new HttpResponse(null, { status: 404 });
      })
    );
  });


  test('should render and display the first song of the playlist by default', async () => {
    render(<MusicPlayer />);


    await waitFor(() => {
      expect(screen.getByText('Painted in Blue')).toBeInTheDocument();
      expect(screen.getByText('Soul Canvas')).toBeInTheDocument();
    });
  });

  
  test('should toggle play/pause when the play/pause button is clicked', async () => {
    render(<MusicPlayer />);

    await waitFor(() => {
        expect(screen.getByLabelText('Play')).toBeInTheDocument();
    });

    const playButton = screen.getByLabelText('Play');
    fireEvent.click(playButton);

    await waitFor(() => {
        expect(screen.getByLabelText('Pause')).toBeInTheDocument();
    });

    const pauseButton = screen.getByLabelText('Pause');
    fireEvent.click(pauseButton);

   
    await waitFor(() => {
        expect(screen.getByLabelText('Play')).toBeInTheDocument();
    });
  });


  test('should play the next song when the forward button is clicked', async () => {
    render(<MusicPlayer />);

   
    await waitFor(() => {
      expect(screen.getByText('Painted in Blue')).toBeInTheDocument();
    });

    const forwardButton = screen.getByLabelText('Play Next Song');
    fireEvent.click(forwardButton);

   
    await waitFor(() => {
      expect(screen.getByText('Tidal Drift')).toBeInTheDocument();
    });
  });

  test('should play the previous song when the back button is clicked', async () => {
    render(<MusicPlayer />);

    await waitFor(() => {
        expect(screen.getByText('Painted in Blue')).toBeInTheDocument();
      });
    const forwardButton = screen.getByLabelText('Play Next Song');
    fireEvent.click(forwardButton);

    await waitFor(() => {
      expect(screen.getByText('Tidal Drift')).toBeInTheDocument();
    });


    const backButton = screen.getByLabelText('Play Previous Song');
    fireEvent.click(backButton);


    await waitFor(() => {
      expect(screen.getByText('Painted in Blue')).toBeInTheDocument();
    });
  });

 
  test('should change the current song when a song in the playlist is clicked', async () => {
    render(<MusicPlayer />);

    const secondSongInPlaylist = screen.getByText('Tidal Drift');
    fireEvent.click(secondSongInPlaylist);

   
    await waitFor(() => {
      expect(screen.getByText('Tidal Drift')).toBeInTheDocument();
    });
  });
});