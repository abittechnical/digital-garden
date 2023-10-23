import generateOgImage from '@/utils/generateOgImage.tsx'
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const get: APIRoute = async ({ params }) => ({
  body: await generateOgImage(params.ogImage),
})

const postImportResult = await getCollection('articles', ({ data }) => !data.draft)
const posts = Object.values(postImportResult)

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.cover)
    .map(({ data }) => ({
      params: { ogImage: data.title },
    }))
}
