import type { CollectionEntry } from 'astro:content'

export const getArticlesByTag = (posts: CollectionEntry<'articles'>[], tag: string) =>
  posts.filter(post => post.data.tags.includes(tag))
