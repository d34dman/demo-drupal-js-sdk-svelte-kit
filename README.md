# Drupal Javascript SDK Demo - SvelteKit

Sveltekit based example for consuming Drupal Javascript SDK.

## Installing

```bash
npm install
```

## Configuration
Copy `example.env` to `.env` file in project root and modify the settings as per your prorject.

Config | Explanation
--- | ---
`VITE_DRUPAL_BASE_URL `| Drupal base url to connect to

Alternatively, you can also set them via environment variables with sanem config name.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
The project should be available at http://localhost:3000.