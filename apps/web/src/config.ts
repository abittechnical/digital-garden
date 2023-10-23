// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from './types.ts'

export const SITECONFIG: Site = {
  siteUrl: 'https://garden.bitwhys.dev/', // Always put "/" at the end of the URL
  author: 'George Bockari | Bitwhys',
  desc: 'Color commentary on nlp, ml and software development, in black & white.',
  title: 'A Bit Technical',
  ogImage: 'images/astro-lane.png',
  keywords:
    'Natural Language Processing,Machine Learning,Software Development,Indie Hacker,Data Science',
  postPerPage: 4,
}

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
  {
    name: 'Github',
    href: 'https://github.com/christian-luntok/astro-lane/',
    icon: 'ph:github-logo-duotone',
    title: `Follow ${SITECONFIG.author} on Github`,
    active: true,
  },
  {
    name: 'Facebook',
    href: 'https://github.com/christian-luntok/astro-lane/',
    icon: 'ph:facebook-logo-duotone',
    title: `Follow ${SITECONFIG.title} on Facebook`,
    active: false,
  },
  {
    name: 'Instagram',
    href: 'https://github.com/christian-luntok/astro-lane/',
    icon: 'ph:instagram-logo-duotone',
    title: `Follow ${SITECONFIG.author} on Instagram`,
    active: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://github.com/christian-luntok/astro-lane/',
    icon: 'ph:linkedin-logo-duotone',
    title: `Follow ${SITECONFIG.title} on LinkedIn`,
    active: true,
  },
  {
    name: 'Mail',
    href: 'mailto:yourmail@gmail.com',
    title: `Send an email to ${SITECONFIG.title}`,
    icon: '',
    active: false,
  },
  {
    name: 'Twitter',
    href: 'https://github.com/christian-luntok/astro-lane/',
    icon: 'ph:twitter-logo-duotone',
    title: `Follow ${SITECONFIG.author} on Twitter`,
    active: true,
  },
  {
    name: 'YouTube',
    href: 'https://github.com/christian-luntok/astro-lane/',
    icon: '',
    title: `${SITECONFIG.title} on YouTube`,
    active: false,
  },
  {
    name: 'WhatsApp',
    href: 'https://github.com/christian-luntok/astro-lane/',
    icon: '',
    title: `${SITECONFIG.title} on WhatsApp`,
    active: false,
  },
  {
    name: 'Snapchat',
    href: 'https://github.com/christian-luntok/astro-lane/',
    icon: '',
    title: `${SITECONFIG.title} on Snapchat`,
    active: false,
  },
  {
    name: 'CodePen',
    href: 'https://github.com/christian-luntok/astro-lane/',
    icon: '',
    title: `${SITECONFIG.title} on CodePen`,
    active: false,
  },
  {
    name: 'Discord',
    href: 'https://github.com/christian-luntok/astro-lane/',
    icon: '',
    title: `${SITECONFIG.title} on Discord`,
    active: false,
  },
]
