import { SITECONFIG } from '@/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
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
