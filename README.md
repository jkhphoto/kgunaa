# Kevin Gunawan — portfolio

Next.js 14 static export on Cloudflare (Worker with static assets, see wrangler.jsonc).
all content lives in three plain files under `content/`.

## Run it

```bash
npm install
npm run dev            # http://localhost:3000
```

## Add or change work

| What | Where |
| --- | --- |
| Email, one-line bio, reel, cover, press | `content/site.js` |
| Films (Vimeo/YouTube id, poster, credits) | `content/films.js` |
| Photography | originals in `stills-src/`, listed in `content/stills.js` |

**Before launch:** every image marked `FILLER` is hotlinked from Tempo Journal's
profile (`content/filler.js`). Swap them all for Kevin's originals, then delete
`content/filler.js`.

- Stills: JPEGs around 2400 to 3000px on the long edge. The build makes WebP
  sizes and reads each image's true shape.
- Film posters: `public/images/films/`, 1920px wide.
- Cover loop: 10 to 20s, H.264, no audio, under ~8 MB at `public/video/hero.mp4`,
  then set `heroVideo` in `content/site.js`.

## Deploy (Cloudflare Pages)

```bash
npx wrangler login     # once
npm run deploy         # builds, then: wrangler pages deploy ./out --project-name=kgunaa
```

The first deploy creates the `kgunaa` Pages project. Then add the custom
domain in the Cloudflare dashboard (Workers & Pages → kgunaa → Custom domains).
Cache headers are in `public/_headers`.

### Cloudflare settings (Git-connected)

- **Pages:** build command `npm run build`, output directory `out`.
- **Workers Builds** (the newer default): build command `npm run build`,
  deploy command `npx wrangler deploy`. Uses `wrangler.jsonc`.
