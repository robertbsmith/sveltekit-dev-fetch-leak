# SvelteKit dev: `globalThis.fetch` is wrapped again on every server reload

1. `npm install && npm run dev`
2. Open http://localhost:5173. The terminal logs `globalThis.fetch is wrapped 1 time(s)`.
3. Save `src/routes/+page.server.js` (any change) and reload the page. Repeat.

The count goes up by one on each save: 2, 3, 4, …
