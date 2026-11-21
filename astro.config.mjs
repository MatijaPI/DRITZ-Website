// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dritz.si',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Keep small stylesheets inline to avoid render-blocking requests.
    inlineStylesheets: 'auto',
  },
  i18n: {
    locales: ['sl', 'en'],
    defaultLocale: 'sl',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  image: {
    responsiveStyles: false,
  },
  devToolbar: { enabled: false },
});
