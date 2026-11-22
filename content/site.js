// Site-wide copy. Every "TODO" is a placeholder waiting on real content from Kevin.
const site = {
  name: 'Kevin Gunawan',
  handle: 'kgunaa',
  roles: ['Director of Photography', 'Photographer'],
  location: 'Boulder, Colorado',
  email: 'hello@kgunaa.com',
  instagram: 'https://instagram.com/kgunaa',
  url: 'https://kgunaa.com', // TODO: confirm production domain

  // Full reel, opened from the home page "Watch reel" button.
  // provider: 'vimeo' | 'youtube'. id is the numeric Vimeo id or the YouTube video id.
  reel: { provider: 'vimeo', id: '76979871', title: 'Reel 2026' }, // TODO: Kevin's reel (this id is a public Vimeo sample)

  // Silent, looping clip behind the home page title. Keep it short (10 to 20s),
  // 1080p, H.264, no audio, under ~8 MB. Drop it at public/video/hero.mp4.
  // Leave heroVideo null to show heroPoster only.
  heroVideo: null, // e.g. '/video/hero.mp4'
  heroPoster: '/images/placeholders/hero.jpg', // TODO: a frame from the reel

  // Facts here come from the Tempo Journal profile (see press). Have Kevin read it over.
  bio: [
    'Kevin Gunawan is a cinematographer and photographer based in Boulder, Colorado, working in and around running.',
    'He ran NCAA Division I cross country and track at Loyola University Chicago while studying film and digital media. When injury ended his racing, he stayed on the team as the runner with the camera.',
    'Since then he has made work with Tinman Elite, Heartbreak Hill Running Company, Puma and Brooks, co-founded the production collective Footstep Creative, and now helps build Nike Running’s Swoosh TC channel. The projects he rates highest bring people together: Project Stella, and Generations, a 300-page book on seven years of Tinman Elite.',
  ],

  // Shown as a big list on the About page. All named in the Tempo profile.
  // TODO: add anyone else Kevin wants listed (e.g. Jacquemus, if he shot that work).
  clients: ['Nike Running', 'Swoosh TC', 'Puma', 'Brooks', 'TCS', 'Tinman Elite', 'Heartbreak Hill'],

  press: [
    {
      outlet: 'Tempo Journal',
      title: 'Kevin Gunawan: The Teammate Behind the Lens',
      date: 'September 2026',
      url: 'https://tempojournal.com/article/kevin-gunawan-the-teammate-behind-the-lens',
    },
  ],

  // Optional representation. Set to null to hide.
  representation: null, // e.g. { label: 'Represented by', name: 'Agency', email: 'agent@agency.com' }

  aboutPortrait: '/images/placeholders/portrait.jpg', // TODO
}
module.exports = site
