# Gayatri Jumani: tuition website

Plain HTML, CSS and vanilla JS. No build step. Served by GitHub Pages from the root of `main`.

## Structure
- `index.html` Home
- `school.html` School Students (Grades 1 to 8)
- `chess.html` Chess for Beginners (beginners only)
- `book.html` Book a 15-minute call, plus contact
- `style.css` shared styles (colours are CSS variables at the top)
- `config.js` **booking URL, WhatsApp number, email**
- `main.js` menu, contact links, booking embed
- `favicon.svg`, `sitemap.xml`, `robots.txt`
- `TODO.md` placeholders still to fill in

## Editing the booking URL and WhatsApp number
Open `config.js`:
- `BOOKING_URL`: the Google Calendar appointment link (used for the "Open booking page in a new tab" button). If left as `PASTE_GOOGLE_APPOINTMENT_URL_HERE`, the page shows a "Booking opens soon" message instead.
- `BOOKING_EMBED_URL`: the embeddable version of the schedule (the full `calendar.google.com/.../schedules/...` URL ending in `?gv=true`). The short `calendar.app.google` link cannot be shown in an iframe. Set to `""` to show only the button.
- `WHATSAPP_NUMBER`: country code plus number, digits only (e.g. `919884362068`).

Placeholders in page text look like `[ADD: ...]` (highlighted yellow). Search for `[ADD:` to find them.
