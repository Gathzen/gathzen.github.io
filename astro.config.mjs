// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace USERNAME with your GitHub username before first deploy.
  // This must match your GitHub Pages URL (e.g. https://ashdev.github.io).
  site: 'https://gathzen.github.io',

  // This repo follows the `<username>.github.io` pattern, so the site is served
  // from the domain root and no `base` prefix is needed. If you ever move this
  // to a project repo (e.g. username.github.io/portfolio), set `base: '/portfolio'`
  // here — internal links already use `import.meta.env.BASE_URL` and will adapt.
  vite: {
    plugins: [tailwindcss()],
  },
});