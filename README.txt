BeYou — Whole & Healthy website (v1)
=====================================

WHAT'S HERE
- index.html       the page structure/content
- css/styles.css    all styling (colors, layout, fonts)
- js/script.js      the booking form logic (builds the WhatsApp message)
- images/           all photos used on the site, pulled from the BeYou Instagram

Splitting things this way makes it easier to change styling or content
independently as the site grows — e.g. update colors/fonts in styles.css
without touching the page content in index.html.

HOW TO USE
1. Keep index.html, css/, js/ and images/ together in the same folder —
   the page loads them all using relative paths, so if you move index.html
   on its own, styling and photos will break.
2. Double-click index.html to preview it locally in a browser.
3. To put it online, upload this whole folder to any web host (e.g. Netlify,
   Vercel, GitHub Pages, or a shared host via FTP) and point the domain at
   index.html.

MAKING CHANGES
- Text/content (menu items, prices, copy) -> edit index.html
- Colors, fonts, spacing, layout -> edit css/styles.css
- Booking form behavior -> edit js/script.js

THINGS TO UPDATE BEFORE LAUNCH
- The map section is a placeholder — swap it for a real Google Maps embed
  once there's a Google Business listing.
- Menu items, prices and the WhatsApp number (+250 795 448 852) were pulled
  from Instagram captions — double check they're still current.
- The booking form sends details via a WhatsApp message (no backend
  required), so it works as-is once hosted anywhere.
