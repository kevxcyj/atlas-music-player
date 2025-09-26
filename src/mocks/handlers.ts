import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/v1/playlist', () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'Painted in Blue',
        artist: 'Soul Canvas',
        artwork: 'https://placehold.co/100x100',
        duration: '5:55',
        url: 'http://localhost:5173/api/v1/audio?songId=1',
      },
      {
        id: 2,
        title: 'Title Drift',
        artist: 'Cosmic Seas',
        artwork: 'https://placehold.co/100x100',
        duration: '8:02',
        url: 'http://localhost:5173/api/v1/audio?songId=2',
      },
    ]);
  }),
];