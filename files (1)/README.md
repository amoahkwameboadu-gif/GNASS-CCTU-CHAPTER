# GNASS CCTU Chapter Website

## Files
- `index.html` — all page content and structure
- `css/style.css` — all styling, including dark mode and mobile layout
- `js/script.js` — dark mode toggle, mobile menu, Sabbath countdown, event filter, prayer wall demo
- `images/` — empty folder; add your real logo and photos here

## To open it
Just double-click `index.html` — no server or install needed.

## Still needs real content or a backend
These were part of the brief but need more than plain HTML/CSS/JS to work for real:
- **Logo & photos**: drop `gnasscctulogo.png` and any real photos into `images/`, then update the `<img>`/background references in `index.html` and `style.css`.
- **Background video**: swap the gradient in `.hero-media` (in `style.css`) for a real video once you have footage.
- **Accurate sunset times**: the countdown uses a rough 6:00 PM estimate — see the comment above `getNextSabbathStart()` in `script.js` for how to plug in a real sunset API.
- **Online giving**: the Give buttons are placeholders. Taking real payments needs a provider (e.g. Paystack, Flutterwave, PayPal) and a secure backend — that's a separate project from this static site.
- **Prayer wall & alumni portal**: currently front-end only demos. Saving requests or member accounts long-term needs a database and backend.
- **Live events calendar**: the events section is a static, filterable list. A calendar that updates itself needs a backend or a service like the Google Calendar API.
