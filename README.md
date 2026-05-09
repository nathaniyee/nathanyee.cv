# nathanyee.cv

Personal portfolio and interactive terminal — built with Next.js.

## About

A split-pane portfolio site with a Unix-style terminal on the right and a curated portfolio panel on the left. Navigate my experience, projects, education, and misc using familiar shell commands (`ls`, `cat`, `cd`, `open`).

## Tech Stack

- **Framework:** Next.js 16 (webpack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Local Development

```bash
npm install
npm run dev -- --webpack
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** Turbopack is not supported on this machine. Use the `--webpack` flag.

## Content

All site content lives in [`data/content.ts`](./data/content.ts). Edit that file to update experience, projects, education, and misc entries — no other files need to change for content updates.

## Credits

Site design originally by [Nolan Yee](https://github.com/nolanqyee). Forked and customized for Nathan Yee.
