import { SITECONFIG } from './src/config.ts'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'
import remarkToc from 'remark-toc';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'material-theme-darker' },
  },
  site: SITECONFIG.siteUrl,
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
  integrations: [tailwind(), react()],
  output: 'hybrid',
  adapter: vercel(),
})
