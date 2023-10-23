---
tags: [Notebooks/Photosynthesis, Planning]
title: Research
created: '2019-07-24T09:42:48.740Z'
modified: '2019-08-12T01:26:31.030Z'
---

# Research

## Philosophy & Discussion

- [On Building Component Libraries](https://clearleft.com/posts/on-building-component-libraries)
- [Our Engineering Experience with React and Storybook](https://auth0.com/blog/our-engineering-experience-with-react-and-storybook/)
- [Setting Up a Component Library with React and Storybook](https://auth0.com/blog/setting-up-a-component-library-with-react-and-storybook/)
- [Building a Component Library with React and Storybook](https://auth0.com/blog/building-a-component-library-with-react-and-storybook/)

### TL;DR

#### Definitions

- **Components:**

  > A generic term to describe a piece of the website UI. It can refer to a single static HTML element, a whole page or (more commonly) something in between. At its bare minimum it will consist of just a piece of markup, however more complex components can also potentially include styles, behaviour, tests, documentation and more.

- **Component Library:**
  > A collection of components, organised in a meaningful manner, and often (but not necessarily) providing some way to browse and preview those components and their associated assets."

#### Be clear on what you are building

1. Who you are

- An agency building component libraries for clients
- An in-house development team
- A freelancer

2. The end goal of the component library.

How will the component library you are building be used?:

- A deeply integrated, living part of a website or application's codebase.
- A code and documentation deliverable for implementation by an in-house team.
- A code and documentation deliverable for implementation by a third party development agency.
- A reference document for different teams in the same organisation, to ensure consistency between sites and/or platforms.
- A public facing site, predominantly for external marketing purposes.
- Any combination of the above (or the many other potential uses!).

#### Build for implementation, not for your tool

Don't get in the way of the consuming endpoint. How you package and bundle your component library should not become an added _feature_ of its use. If I decide to use rollup, I shouldn't force any end user of the library to add an additional dependcy of rollup. Think of this constraint like "pre-cooked" meals. A user should be able to just "heat and consume"

#### Integration is hard, so figure it out first

This means a better understanding of how React + Electron coexist in 2019

## The Process

1. Use a style guide for consistent branding

> A style guide clearly deomonstrates how all interface elemnets and components are to be visually represented. It's essentially a master refernce for the user interace (UI) -- Marve Design Team

This can be accomplished by using a designer's 'UI kit' document

2. Use Rollup

As Webpack was created for bundling applications it doesn't support building ESM modules.

> We setup our build system using rollup. It allowed us to bundle our code in two formats: [ECMAScript Modules (EMS)](https://nodejs.org/api/esm.html?source=post_page---------------------------) and [CommonJS Modules (CJS)](https://nodejs.org/docs/latest/api/modules.html?source=post_page---------------------------). We used [babel-plugin-rollup](https://github.com/rollup/rollup-plugin-babel?source=post_page---------------------------) for our JavaScript and [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss?source=post_page---------------------------)

## Reference Articles

- [Why you should build a React Component Library, and style it with CSS in JS](https://techblog.commercetools.com/why-you-should-build-a-react-component-library-and-style-it-with-css-in-js-12397fd69c58)
- [Webpack and Rollup: the same but different](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)
- [Building and publishing a module with TypeScript and Rollup.js](https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396)
- [Comparing Bundlers Webpack v. Rollup v. Parcel](https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd)

## Tools

### Component Library Starters

- [create-react-library](https://github.com/transitive-bullshit/create-react-library#readme)
- [leandrooriente/react-ui-kit-boilerplate](https://github.com/leandrooriente/react-ui-kit-boilerplate)
- [natterstefan/react-component-library-lerna](https://github.com/natterstefan/react-component-library-lerna)

### Component Development Utilities & Environments

- [Storybook](https://storybook.js.org/)
- [React Styleguidist](https://github.com/styleguidist/react-styleguidist)
- [docz](https://github.com/pedronauck/docz)
- ~~[Fabricator](https://fbrctr.github.io/)~~
- ~~[Pattern Lab](https://patternlab.io/)~~
- ~~[Fractal](https://github.com/frctl/fractal)~~

## UI Kits

- [commercetools/ui-kit](https://github.com/commercetools/ui-kit)
- [pinterest/gestalt](https://github.com/pinterest/gestalt)
