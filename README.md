# WIFE-4

This is the web app for the WIFE-4 monorepo.

## Quick start

Prerequisites: Node >= 18, npm

Install dependencies and run the dev server (from the web app folder):

```powershell
cd apps/web
npm install
npm run dev
```

Build for production:

```powershell
cd apps/web
npm run build
```

## Notes
- The project uses Vite + React Router.
- Environment variables should be set in a `.env` file or your CI environment.
