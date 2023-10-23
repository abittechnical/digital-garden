import generateOgImage from '@/utils/generateOgImage.tsx'
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const get: APIRoute = async ({ params }) => ({
  body: await generateOgImage(params.ogImage),
})

const articleImportData = await getCollection('articles', ({ data }) => !data.draft)
const articles = Object.values(articleImportData)

export function getStaticPaths() {
  return articles
    .filter(({ data }) => !data.cover)
    .map(({ data }) => ({
      params: { ogImage: data.title },
    }))
}
