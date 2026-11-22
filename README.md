# Kevin Gunawan — portfolio

Next.js 14 static export, hosted on Cloudflare Pages. No server, no CMS:
all content lives in three plain files under `content/`.

## Run it

```bash
npm install
npm run dev            # http://localhost:3000
```

## Add or change work

| What | Where |
| --- | --- |
| Name, bio, email, clients, reel, hero clip | `content/site.js` |
| Films (Vimeo/YouTube id, poster, credits, frame grabs) | `content/films.js` |
| Photography | drop originals in `stills-src/`, list them in `content/stills.js` |

- **Stills**: export JPEGs around 2400–3000px on the long edge. `npm run build`
  (or `npm run images`) makes WebP sizes at 640/1080/1600/2400 and records each
  image's true shape and colour, so the grid never jumps while loading.
- **Film posters / frame grabs**: put them in `public/images/films/`, 1920px wide JPEG.
- **Hero loop**: 10–20s, 1080p H.264, no audio, under ~8 MB, at
  `public/video/hero.mp4`, then set `heroVideo: '/video/hero.mp4'` in `content/site.js`.
  Cloudflare Pages caps single files at 25 MB.
- Placeholders live in `public/images/placeholders/` and `stills-src/ph-*.jpg`.
  Delete them once real assets are in. `scripts/make-placeholders.mjs` can go too.

## Deploy (Cloudflare Pages)

```bash
npx wrangler login     # once
npm run deploy         # builds, then: wrangler pages deploy ./out --project-name=kgunaa
```

The first deploy creates the `kgunaa` Pages project. Then add the custom
domain in the Cloudflare dashboard (Workers & Pages → kgunaa → Custom domains).
Cache headers are in `public/_headers`.
