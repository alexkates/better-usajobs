# better-usajobs

A redesign concept for the [USAJOBS](https://www.usajobs.gov/) landing page — modern, sleek,
and quietly patriotic. Same content and information architecture as the real thing, rebuilt
as an editorial page instead of a form.

**Live:** https://better-usajobs.vercel.app

## Design notes

- **The actual flag colors.** Old Glory Blue `#0A3161`, White `#FFFFFF`, Old Glory Red
  `#B31942`, per the official specification. White page, blue carries everything, and red is
  rationed to four places: the tricolor rules, event dates, the nav hover underline, and one
  star before the footer. Nowhere else.
- **Real five-pointed stars, on the flag's lattice.** The background motif is the union's
  arrangement — alternating rows offset by half a step — at ~6% opacity, fading out before it
  reaches any body copy. Star geometry is generated, not eyeballed: outer/inner radius ratio
  `0.382`, point up.
- **The union, literally.** The early-career band is a field of Old Glory Blue with white
  stars in the same lattice.
- **Editorial type.** Instrument Serif for display, Inter for UI. Government documents are
  serif; that's the one thing worth keeping.

## Stack

Static HTML, CSS and ~100 lines of vanilla JS. No framework, no build step, no dependencies —
three files, ~12 KB gzipped over the wire, one Google Fonts request.

```bash
npx serve .   # or just open index.html
```

## Not affiliated

An unofficial concept. Not affiliated with USAJOBS or the U.S. Office of Personnel Management.
Job counts and the pull quote are illustrative.
