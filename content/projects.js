const filler = require('./filler')

// Project index, newest first. years: [start, end]; end null = ongoing ("2026–").
// cats: any of 'motion', 'stills', 'cd' (creative direction); decides which
// section(s) list it. A project gets its own page when it has a poster (and, optionally, a video).
// video: { provider: 'vimeo' | 'youtube', id }  poster: '/images/projects/<slug>.jpg'
// FILLER posters are Tempo Journal images assigned arbitrarily: replace them.
const projects = [
  { slug: 'swoosh-tc', cats: ['cd', 'motion', 'stills'], name: 'Swoosh TC', years: [2026, null], poster: filler.t02.src /* FILLER */ },
  { slug: 'project-stella', cats: ['cd', 'motion', 'stills'], name: 'Project Stella', years: [2026, 2026], poster: filler.t06.src /* FILLER */ },
  { slug: 'acg-x-rivian', cats: ['motion', 'stills'], name: 'ACG x Rivian', years: [2026, 2026] },
  { slug: 'oac', cats: ['motion', 'stills'], name: 'OAC', years: [2025, 2025] },
  { slug: 'sequence-experience', cats: ['motion'], name: 'Sequence Experience', years: [2025, 2025] },
  { slug: 'jacquemus-x-nike', cats: ['stills'], name: 'Jacquemus x Nike', years: [2024, 2024] },
  { slug: 'sova', cats: ['motion'], name: 'SOVA', years: [2024, 2024] },
  { slug: 'tcs', cats: ['motion'], name: 'TCS', years: [2022, null], poster: filler.t04.src /* FILLER */ },
  { slug: 'tinman-elite', cats: ['motion', 'stills'], name: 'Tinman Elite', years: [2021, 2025], poster: filler.t01.src /* FILLER */ },
  { slug: 'heartbreak-hill', cats: ['stills'], name: 'Heartbreak Hill Running Co', years: [2021, 2023], poster: filler.t05.src /* FILLER */ },
  { slug: 'loyola-ramblers', cats: ['motion', 'stills'], name: 'Loyola Ramblers', years: [2018, 2022], poster: filler.t03.src /* FILLER */ },
].map(p => ({ video: null, credits: [], images: [], ...p }))

projects.years = p => {
  const [a, b] = p.years
  return b === null ? `${a}–` : a === b ? `${a}` : `${a}–${b}`
}
// Tags shown next to each project, in this order.
projects.tags = p => projects.sections.filter(s => p.cats.includes(s.key)).map(s => s.label).join(' · ')

projects.sections = [
  { key: 'motion', label: 'Motion', path: '/motion' },
  { key: 'stills', label: 'Stills', path: '/stills' },
  { key: 'cd', label: 'CD', path: '/cd', title: 'Creative Direction' },
]
module.exports = projects
