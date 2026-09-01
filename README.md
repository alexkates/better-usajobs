# better-usajobs

A redesign concept for the [USAJOBS](https://www.usajobs.gov/) landing page — modern, sleek,
and quietly patriotic. Same content and information architecture as the real thing, rebuilt
as an editorial page instead of a form.

**Live:** https://better-usajobs.vercel.app

## Design notes

- **Restrained flag palette.** Muted navy (`#1b3a5c`) carries the page; a dusty barn red
  (`#a93f3c`) appears only in small doses — the wordmark star, event dates, a hover underline,
  one third of a 36px tricolor rule. No large red-white-blue fields.
- **Editorial type.** Instrument Serif for display, Inter for UI. Government documents are
  serif; that's the one thing worth keeping.
- **Subtle stars.** A tiled four-point-star motif at 10% opacity behind the hero and the
  early-career band, masked to fade out. You notice it on the second look.
- **Full dark mode** via `prefers-color-scheme`.

## Stack

Static HTML, CSS and ~90 lines of vanilla JS. No framework, no build step, no dependencies —
three files, ~40 KB uncompressed, one Google Fonts request.

```bash
npx serve .   # or just open index.html
```

## Not affiliated

An unofficial concept. Not affiliated with USAJOBS or the U.S. Office of Personnel Management.
Job counts and the pull quote are illustrative.
