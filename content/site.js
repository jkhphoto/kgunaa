// Site-wide copy. Every "TODO" is a placeholder waiting on real content from Kevin.
const site = {
  name: 'Kevin Gunawan',
  handle: 'kgunaa',
  roles: ['Director of Photography', 'Photographer'],
  location: 'TODO: City, ST',
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

  bio: [
    'TODO: Two or three sentences in Kevin’s voice. What he shoots, who he shoots with, what he cares about in an image.',
    'TODO: Background line. Where he came up (e.g. running with Tinman Elite and Swoosh TC), and how that shapes the work.',
  ],

  // Shown as a big list on the About page.
  clients: ['Nike', 'Jacquemus', 'Tracksmith', 'Swoosh TC', 'Tinman Elite', 'Project Stella', 'TODO: confirm list'],

  // Optional representation. Set to null to hide.
  representation: null, // e.g. { label: 'Represented by', name: 'Agency', email: 'agent@agency.com' }

  aboutPortrait: '/images/placeholders/portrait.jpg', // TODO
}
module.exports = site
