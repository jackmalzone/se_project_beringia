# Fix: 404 Error for main.tsx

## Issue

The development server was returning a 404 (Not Found) error when trying to load `main.tsx`.

## Solution

The issue was resolved by updating the following configurations:

### 1. vite.config.ts

```typescript
export default defineConfig({
  // ... other config
  base: process.env.NODE_ENV === "production" ? "/se_project_beringia/" : "/",
  server: {
    port: 3001,
    strictPort: false,
    open: true,
  },
});
```

### 2. index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Removed base href tag -->
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <!-- ... other meta tags ... -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Key Changes

1. Implemented conditional base URL for development/production environments
2. Removed the `<base>` tag from index.html
3. Added leading slashes to asset paths
4. Set `strictPort: false` for development server flexibility

## Status

✅ Fixed and verified working
