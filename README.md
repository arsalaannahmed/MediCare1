# MediCare1

A React + Vite + Tailwind CSS web app. The app code lives in the [`medilink/`](medilink/) folder.

## Tech Stack

React 19 · Vite 7 · TypeScript · Tailwind CSS 4

## Project structure

```
medilink/
├── index.html
├── package.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── components/
    ├── data/
    └── utils/
```

## Run it locally

```bash
cd medilink

# Install dependencies
npm install

# Run dev server
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
```

## Notes

- Single-file build via `vite-plugin-singlefile`
- No backend or database is required to run the frontend locally
