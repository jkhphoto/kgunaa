const filler = require('./filler')

// Photography, in display order.
// Real images: put the original in stills-src/ and use { file: 'name.jpg', alt: '...' }.
// The build makes responsive WebP sizes. Remote filler uses { ...filler.tXX }.
const stills = [
  { ...filler.t05, alt: '' }, // FILLER
  { ...filler.t02, alt: '' }, // FILLER
  { ...filler.t03, alt: '' }, // FILLER
  { ...filler.t04, alt: '' }, // FILLER
  { ...filler.t01, alt: '' }, // FILLER
  { ...filler.t06, alt: '' }, // FILLER
]
module.exports = stills
