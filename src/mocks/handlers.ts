import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/v1/playlist', () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'Painted in Blue',
        artist: 'Soul Canvas',
        artwork: 'https://placehold.co/100x100',
        duration: 355,
        url: 'http://localhost:5173/api/v1/audio?songId=1',
      },
      {
        id: 2,
        title: 'Tidal Drift',
        artist: 'Cosmic Seas',
        artwork: 'https://placehold.co/100x100',
        duration: 482,
        url: 'http://localhost:5173/api/v1/audio?songId=2',
      },
    ]);
  }),
];