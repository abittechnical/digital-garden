// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
export const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform(str => (str ? new Date(str) : undefined)),
    cover: z.string().optional(),
    tags: z.array(z.string()).default(['others']),
    author: z.string().optional(),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
})

export const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    logo: z.string(),
    link: z.string(),
    shortExcerpt: z.string(),
    badgeContent: z.string().optional(),
  }),
})
