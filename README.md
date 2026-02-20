# DevOps Engineer Portfolio

Portfolio site built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev`: start development server
- `npm run typecheck`: run TypeScript checks
- `npm run lint`: run ESLint
- `npm run build`: typecheck + production build
- `npm run start`: run production server

## Environment variables

Copy `.env.example` to `.env.local` and adjust values:

- `NEXT_PUBLIC_CV_URL`: CV link shown in profile card. If it starts with `/`, it will be treated as a local downloadable file.
- `GITHUB_TOKEN` (optional): GitHub token for higher API rate limits when fetching repositories in `/api/github`.
