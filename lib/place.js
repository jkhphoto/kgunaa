// Loose, editorial placement on a 12-column grid: images drift left and right
// down the page instead of sitting in a uniform grid. Landscape frames get more
// width than portraits so they read at a similar visual weight.
const STARTS = [2, 6, 1, 8, 4, 1, 7]
export function place(i, ratio) {
  const span = ratio >= 1.2 ? 8 : ratio >= 0.9 ? 6 : 4
  const start = Math.min(STARTS[i % STARTS.length], 13 - span)
  return { gridColumn: `${start} / span ${span}` }
}
