const filler = require('./filler')

// Project index, newest first. years: [start, end]; end null = ongoing ("2026–").
// A project gets its own page when it has a poster (and, optionally, a video).
// video: { provider: 'vimeo' | 'youtube', id }  poster: '/images/projects/<slug>.jpg'
// FILLER posters are Tempo Journal images assigned arbitrarily: replace them.
const projects = [
  { slug: 'swoosh-tc', name: 'Swoosh TC', years: [2026, null], poster: filler.t02.src /* FILLER */ },
  { slug: 'project-stella', name: 'Project Stella', years: [2026, 2026], poster: filler.t06.src /* FILLER */ },
  { slug: 'acg-x-rivian', name: 'ACG x Rivian', years: [2026, 2026] },
  { slug: 'oac', name: 'OAC', years: [2025, 2025] },
  { slug: 'sequence-experience', name: 'Sequence Experience', years: [2025, 2025] },
  { slug: 'jacquemus-x-nike', name: 'Jacquemus x Nike', years: [2024, 2024] },
  { slug: 'sova', name: 'SOVA', years: [2024, 2024] },
  { slug: 'tcs', name: 'TCS', years: [2022, null], poster: filler.t04.src /* FILLER */ },
  { slug: 'tinman-elite', name: 'Tinman Elite', years: [2021, 2025], poster: filler.t01.src /* FILLER */ },
  { slug: 'heartbreak-hill', name: 'Heartbreak Hill Running Co', years: [2021, 2023], poster: filler.t05.src /* FILLER */ },
  { slug: 'loyola-ramblers', name: 'Loyola Ramblers', years: [2018, 2022], poster: filler.t03.src /* FILLER */ },
].map(p => ({ video: null, credits: [], images: [], ...p }))

projects.years = p => {
  const [a, b] = p.years
  return b === null ? `${a}–` : a === b ? `${a}` : `${a}–${b}`
}
module.exports = projects
