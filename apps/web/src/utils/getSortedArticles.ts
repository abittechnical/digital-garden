import type { CollectionEntry } from 'astro:content'

export const getSortedArticles = (posts: CollectionEntry<'articles'>[]) =>
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
