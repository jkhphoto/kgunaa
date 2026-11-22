const filler = require('./filler')

// Site-wide copy. Deliberately sparse: the work does the talking.
const site = {
  name: 'Kevin Gunawan',
  handle: 'kgunaa',
  email: 'hello@kgunaa.com',
  instagram: 'https://instagram.com/kgunaa',
  url: 'https://kgunaa.com', // TODO: confirm production domain

  // One line. Shown on /info only.
  line: 'Cinematographer and photographer. Boulder, Colorado.',

  // Full reel. provider: 'vimeo' | 'youtube'.
  reel: { provider: 'vimeo', id: '76979871', title: 'Reel' }, // TODO: Kevin's reel (public Vimeo sample)

  // Cover. A silent loop (public/video/hero.mp4, 10 to 20s, H.264, under ~8 MB)
  // beats a still: set heroVideo: '/video/hero.mp4' once there is one.
  heroVideo: null,
  hero: filler.t04, // FILLER

  press: [
    {
      outlet: 'Tempo Journal',
      title: 'The Teammate Behind the Lens',
      url: 'https://tempojournal.com/article/kevin-gunawan-the-teammate-behind-the-lens',
    },
  ],
}
module.exports = site
