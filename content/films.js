// Motion work. Order here is the order on the home page.
// video.provider: 'vimeo' | 'youtube'. poster: a 16:9 frame (put it in public/images/films/).
// frames: optional frame grabs shown under the film (16:9 or 2.39:1 works best).
const films = [
  {
    slug: 'placeholder-nike-running',
    title: 'TODO: Film title',
    client: 'Nike',
    role: 'Director of Photography',
    year: 2026,
    video: { provider: 'vimeo', id: '76979871' },
    poster: '/images/placeholders/film-1.jpg',
    aspect: '16 / 9',
    credits: [
      ['Director', 'TODO'],
      ['Director of Photography', 'Kevin Gunawan'],
      ['Production', 'TODO'],
    ],
    frames: ['/images/placeholders/frame-1.jpg', '/images/placeholders/frame-2.jpg', '/images/placeholders/frame-3.jpg'],
  },
  {
    slug: 'placeholder-jacquemus',
    title: 'TODO: Film title',
    client: 'Jacquemus',
    role: 'Director of Photography',
    year: 2026,
    video: { provider: 'youtube', id: 'aqz-KE-bpKQ' },
    poster: '/images/placeholders/film-2.jpg',
    aspect: '16 / 9',
    credits: [['Director', 'TODO']],
    frames: [],
  },
  {
    slug: 'placeholder-tracksmith',
    title: 'TODO: Film title',
    client: 'Tracksmith',
    role: 'Director of Photography',
    year: 2025,
    video: { provider: 'vimeo', id: '76979871' },
    poster: '/images/placeholders/film-3.jpg',
    aspect: '16 / 9',
    credits: [],
    frames: [],
  },
  {
    slug: 'placeholder-project-stella',
    title: 'TODO: Film title',
    client: 'Project Stella',
    role: 'Director / DP',
    year: 2025,
    video: { provider: 'vimeo', id: '76979871' },
    poster: '/images/placeholders/film-4.jpg',
    aspect: '16 / 9',
    credits: [],
    frames: [],
  },
]
module.exports = films
