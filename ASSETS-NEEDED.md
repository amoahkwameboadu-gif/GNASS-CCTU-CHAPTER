# Assets you still need to add

Your `images/` folder is empty (confirmed in your own README), but `index.html`
references real photos and a video by name. Cloudflare Pages will deploy
successfully either way — a missing image is not a "build error" — but every
path below will show as a broken image/video on the live site until you add
the file with this exact name.

All filenames below are already lowercase, hyphenated, and space-free on
purpose: Cloudflare Pages serves from a case-sensitive Linux filesystem, so
`Mr.Isaac Nyankson.jpeg` (with a space and mixed case) can work on your local
Windows/Mac machine while 404-ing in production. Save your files using these
exact names and you avoid that entirely.

## /images/
- gnasscctulogo.png — used in the header and footer
- mr-isaac-nyankson.jpeg — President
- mr-kwame-boadu-amoah.png — Vice President
- sarah-abena-wienu-secretary.jpeg — Secretary
- mr-samuel-aidoo.jpeg — Treasurer
- nelson-bayagimbey-coordinator.jpeg — Coordinator
- tweneboah-jacqueline-deputy-coordinator.jpeg — Deputy Coordinator
- takyiwaa-vanuella-sabbath-school-leader.jpeg — Sabbath School Leader
- francis-annu-music-leader.jpeg — Music Leader
- stephen-dwamena-media-and-publicity.jpg — Media and Publicity
- bright-appiah-deacon.jpeg — Deacon
- leticia-quansah-deaconess.jpeg — Deaconess
- enoch-abraham-arthur-newton-event-and-project.jpg — Event and Project

Note: Elder Dr. Theophilus Adu Gyamfi, Mr. Isaac Apegya, and Mr. Emmanuel Sam
currently use a CSS silhouette placeholder on purpose (no `<img>` tag) — add
real `<img>` tags for them later if you get their photos.

## /images/slideshows/
- IMG-20260114-WA0023.jpg through IMG-20260114-WA0028.jpg (6 images, Church Gallery)

## /sermons-events/
(renamed from "sermons and events" — the space in that folder name was risky)
- pastor-lawrence-ewoo.mp4 — Latest Message video
- prayer-meeting.png — Daily Prayer Meeting thumbnail

## Not a path problem
- The hero collage images (James & Ellen White, Joseph Bates, John Nevins
  Andrews) are hotlinked from Wikimedia Commons — no local file needed, and
  they'll keep working as long as Wikimedia's URLs don't change.
- `style.css` and `script.js` contain no local file/image references at all,
  so nothing there needed fixing.
