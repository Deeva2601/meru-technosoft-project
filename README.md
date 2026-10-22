# Raivatedu

Frontend internship assignment for **Meru Technosoft** — a small marketing site for a fictional live-learning brand.

Live demo: add your Vercel URL here after deploy.

## Run locally

Need Node 18+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Framework preset: Next.js. Leave build settings as default.
4. Deploy. No env variables needed.

## Pages

- `/` home
- `/courses` listing with search, category filter, sort
- `/courses/[slug]` syllabus, instructor, reviews, enrol form

## Design choices

- **Colours:** indigo (`#4338ca`) for trust, sunny yellow (`#f5c518`) for energy, off-white (`#f6f3eb`) so it does not look like a generic white SaaS page. Tokens live in `app/globals.css`.
- **Font:** Plus Jakarta Sans via `next/font`.
- **Logo:** simple “R” wordmark. Nothing copied from a real company.

## Assumptions

- No backend. Enrol form only validates on the client and shows a success message.
- Prices are INR. Batches are weekday evenings IST.
- Mentors live as a section on the home page, not a fourth route.
- Photos are from Unsplash.

## What I would add with more time

- Dark mode toggle
- Real payment / WhatsApp enrol
- More courses and a blog
- Proper Lighthouse pass on a production URL after deploy

## Lighthouse

Add a screenshot of mobile Lighthouse (Performance 85+, Accessibility / SEO 90+) in this folder as `lighthouse.png` after you deploy, then attach it with the submission.
