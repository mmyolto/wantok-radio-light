# Wantok Radio Light — Website

Official website of **Wantok Radio Light**, PNG Christian Broadcasting Network
(93.9 FM Port Moresby · 105.9 FM nationwide · live online).

## What's in this repository

| Path | Purpose |
|------|---------|
| `index.html` | The public website (Home, About, Programs, Projects, News, Support, On Demand, Contact). Single-page site with a background live-stream player. |
| `pledge-form.html` | Share-a-thon pledge form (also built into the Support page). |
| `newsroom.html` | Staff Newsroom — stories, TokSave/prayer/on-demand requests, song submissions and On Demand uploads. Sign-in required. |
| `admin.html` | Admin dashboard — live pledges, donations and totals. Admin accounts only. |
| `aboutus.html`, `news.html`, … | Redirects so links to the old website still work. |
| `images/` | Photos and video used on the site. |
| `firebase/firestore.rules` | Database security rules (publish in Firebase console → Firestore → Rules). |
| `docs/` | Setup and how-to guides for staff. |

## Services used

- **Firebase (Firestore + Authentication)** — pledges, news stories, requests, songs, On Demand episodes, staff sign-in.
- **Cloudinary** (free plan) — storage for uploaded songs and On Demand audio.
- **AzuraCast** (radio.kinect.com.pg) — live stream and now-playing information.

## Publishing

The site is plain HTML, CSS and JavaScript — no build step.

1. Upload all files and folders (except `docs/`, `firebase/`, `README.md`) to the web host for **wantokradio.org**.
2. In Firebase console → Authentication → Settings → **Authorized domains**, add `wantokradio.org`.
3. Publish `firebase/firestore.rules` in Firebase console → Firestore Database → Rules.

## Staff guides

- `docs/NEWSROOM-SETUP.txt` — adding journalists and admins
- `docs/PLEDGE-SETUP.txt` — Share-a-thon pledges
- `docs/SONG-UPLOAD-SETUP.txt` — song submissions
- `docs/ONDEMAND-SETUP.txt` — weekly On Demand uploads

© Wantok Radio Light · PNG Christian Broadcasting Network
