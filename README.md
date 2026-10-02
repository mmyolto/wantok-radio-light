# Wantok Radio Light — Website

Official website of **Wantok Radio Light**, PNG Christian Broadcasting Network
(93.9 FM Port Moresby · 105.9 FM nationwide · live online).

## Files

| Path | Purpose |
|------|---------|
| `index.html` | The public website (Home, About, Programs, Projects, News, Support, On Demand, Contact). One page with a live player that keeps playing while you browse. |
| `css/style.css` | All site styles. |
| `js/main.js` | Site logic: pages, live player, news, On Demand, requests, giving, song uploads. Firebase settings are at the top. |
| `js/extras.js` | Home page news cards, the giving pop-up and the pledge form pop-up. |
| `pledge-form.html` | Share-a-thon pledge form (also opens inside the site). |
| `newsroom.html` | Staff Newsroom — stories, TokSave/prayer/On Demand requests, song submissions and On Demand uploads. Sign-in required. |
| `admin.html` | Admin dashboard — live pledges, donations and totals. Admin accounts only. |
| `aboutus.html`, `news.html`, … | Redirects so links to the old website still work. |
| `images/` | Photos, team portraits, bank logos and video used on the site. |
| `favicon.png`, `apple-touch-icon.png` | Browser and phone icons. |
| `robots.txt`, `sitemap.xml` | For search engines. |
| `firebase/firestore.rules` | Database security rules (publish in Firebase console → Firestore → Rules). |
| `docs/` | Setup and how-to guides for staff. |

## Services used

- **Firebase (Firestore + Authentication)** — pledges, news stories, requests, songs, On Demand episodes, staff sign-in.
- **Cloudinary** (free plan) — storage for uploaded songs and On Demand audio.
- **AzuraCast** (radio.kinect.com.pg) — live stream and now-playing information.

## Publishing

The site is plain HTML, CSS and JavaScript — no build step.

1. Upload everything **except** `docs/`, `firebase/` and `README.md` to the web root for **wantokradio.org**
   (usually `public_html/`). Keep the folder structure (`css/`, `js/`, `images/`).
2. In Firebase console → Authentication → Settings → **Authorized domains**, add `wantokradio.org`
   (and `www.wantokradio.org` if you use it).
3. Publish `firebase/firestore.rules` in Firebase console → Firestore Database → Rules.
4. Open the site and check: live stream plays, News loads, the pledge form opens and submits.

Gallery and some partner logos are loaded from `wantokradio.org/assets/images/` — keep that folder on the server.

## Bank details shown on the site

| | BSP | Kina Bank |
|---|---|---|
| Account name | Wantok Radio Light | Wantok Radio Light |
| Account number | 1000908049 | 11757718 |
| SWIFT | BOSPPGPM | KINIPGPG |
| BSB | 088-950 | 028-038 |

These appear on the Support page and giving pop-up (`index.html`) and in the pledge form and receipt (`pledge-form.html`).

## GitHub

The repository can be uploaded as-is. Everything in it is static, so it also runs on GitHub Pages
(Settings → Pages → Deploy from branch → `main` / root). The live site stays on wantokradio.org;
if you test on GitHub Pages, add `<username>.github.io` to Firebase → Authentication → Authorized domains.

## Staff guides

- `docs/NEWSROOM-SETUP.txt` — adding journalists and admins
- `docs/PLEDGE-SETUP.txt` — Share-a-thon pledges
- `docs/SONG-UPLOAD-SETUP.txt` — song submissions
- `docs/ONDEMAND-SETUP.txt` — weekly On Demand uploads

© Wantok Radio Light · PNG Christian Broadcasting Network
