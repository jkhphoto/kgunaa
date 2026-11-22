const filler = require('./filler')

// Motion work, in display order. video.provider: 'vimeo' | 'youtube'.
// poster: a 16:9 frame in public/images/films/ (e.g. '/images/films/swoosh.jpg').
// All entries below are PLACEHOLDERS: titles, ids and posters need Kevin's real work.
const films = [
  {
    slug: 'swoosh-tc',
    title: 'TODO',
    client: 'Swoosh TC',
    year: 2026,
    video: { provider: 'vimeo', id: '76979871' },
    poster: filler.t02.src, // FILLER
    credits: [['Director of Photography', 'Kevin Gunawan']],
  },
  {
    slug: 'project-stella',
    title: 'Project Stella',
    client: 'Project Stella',
    year: 2026,
    video: { provider: 'vimeo', id: '76979871' },
    poster: filler.t06.src, // FILLER
    credits: [],
  },
  {
    slug: 'puma',
    title: 'TODO',
    client: 'Puma',
    year: 2025,
    video: { provider: 'youtube', id: 'aqz-KE-bpKQ' },
    poster: filler.t01.src, // FILLER
    credits: [],
  },
]
module.exports = films
