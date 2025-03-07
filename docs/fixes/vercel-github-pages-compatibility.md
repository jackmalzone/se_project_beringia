# Fix: Vercel and GitHub Pages Compatibility

## Issue

The base URL configuration needed to support both Vercel deployments (at root '/') and GitHub Pages deployments (at '/se_project_beringia/').

## Solution

Updated the Vite configuration to use conditional base URLs depending on the deployment platform:

```typescript
// vite.config.ts
export default defineConfig({
  // ... other config
  base: process.env.VERCEL ? "/" : "/se_project_beringia/",
  // ... rest of config
});
```

## How It Works

- When deploying to Vercel: `process.env.VERCEL` is true, so base URL is '/'
- When deploying to GitHub Pages: `process.env.VERCEL` is undefined, so base URL is '/se_project_beringia/'
- Local development: `process.env.VERCEL` is undefined, matching GitHub Pages configuration

## Verification

- ✅ Local development working
- ✅ GitHub Pages deployment working
- ✅ Vercel deployment compatible

## Related Configuration

The project maintains separate build scripts in package.json:

```json
{
  "scripts": {
    "build": "vite build",
    "vercel-build": "vite build"
  }
}
```
