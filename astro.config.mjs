// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), 'PUBLIC_');
// Allow the optional analytics script origin in the CSP (see .env.example).
const analyticsOrigin = env.PUBLIC_ANALYTICS_SRC
  ? new URL(env.PUBLIC_ANALYTICS_SRC).origin
  : env.PUBLIC_ANALYTICS_PROVIDER === 'plausible'
    ? 'https://plausible.io'
    : undefined;

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
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  // GitHub Pages cannot send HTTP security headers, so the CSP is delivered as a
  // <meta> tag with hashes for every inline script/style Astro emits.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https:",
        "form-action 'self' https: mailto:",
        "base-uri 'self'",
        "object-src 'none'",
      ],
      scriptDirective: { resources: ["'self'", ...(analyticsOrigin ? [analyticsOrigin] : [])] },
    },
  },
  image: {
    responsiveStyles: false,
  },
  markdown: { syntaxHighlight: false },
  devToolbar: { enabled: false },
});
