---
title: Web Developer Tooling
description: Notes about tools and tricks of the trade from web development
pubDate: 2021-11-20
tags:
  - web
  - devops
  - javascript
---

## Myths

> I can build a better tool from scratch

**No you can't, and even if you can it won't be worth it.**

> This 2 week old build tool built by this random dude is 20% faster than Gulp! Get it in there

**This is a case of Idealistic vs. Pragmatic. Don't just trust your instincs, think about the long-term values for your project**

> This tool is self contained and does everything we want right now

**Life is too short to be stuck using a tool that you can't escape from**

> If the user triggers the Konami code, it could _theoretically_ result in app failure

---

## Build Tools

**Grunt, Gulp** are known as _task runners_. They help you automate commonly performed task.

**Webpack** is known as a _bundler_. It helps you construct a single file that is composed of the code from separate files.

### Gulp & Webpack

#### Creating Task

> Ultimately we'll create tow Gulp commands: a **build** command, that will build our site for deployment, and a **develop** command, that will spin off a development server that rebuilds and reloads the site in response to changes.

The **build** command will require two tasks:

- Build the webpack assets
- Run the static site generator (_source material assumed the use of a SSG_)

The **develop** command will be similar to the build command, but with a couple extra steps:

- Build the Webpack assets
- Run the static site generator
- Start the developer server
- Watch files for changes, re-run the builds, and reload the dev server
