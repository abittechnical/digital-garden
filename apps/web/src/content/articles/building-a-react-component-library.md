---
title: Building A React Component Library
description:
  In the process of planning and creating the [Twix](@tag/Twix) project, I ran across a UI Kit called [Photon](http://photonkit.com/) that offered components specifically designed with Electron applications in mind and the goal of providing a clean *Mac OS* look. The project was a simple set of SCSS defined styles that was distributed both as source code and precompiled css files. This allowed users to simply link the css and add classes to their Electron html renderer files.
  I also found a forked [react version](https://github.com/react-photonkit/react-photonkit). Unfortunelty not only are both of these projects no longer active but I wasn't very statisfied with the React implementation.
created: 2019-07-24T06:24:51.219Z
pubDate: 2019-07-24T09:04:00.437Z
tags:
  - design systems
  - planning
  - react
  - javascript
  - web
---

## Motivation

In the process of planning and creating the [Twix](@tag/Twix) project, I ran across a UI Kit called [Photon](http://photonkit.com/) that offered components specifically designed with Electron applications in mind and the goal of providing a clean _Mac OS_ look. The project was a simple set of SCSS defined styles that was distributed both as source code and precompiled css files. This allowed users to simply link the css and add classes to their Electron html renderer files.
I also found a forked [react version](https://github.com/react-photonkit/react-photonkit). Unfortunelty not only are both of these projects no longer active but I wasn't very statisfied with the React implementation.

**UPDATE: There is a currently active fork of the original project at [MauriceConrad/Photon](https://github.com/MauriceConrad/Photon)**

## Why not just use React-Phontonkit

The reason for not simply using a package that at the time of this writing was used in 61 projects (accrouding to Github) is both practical and personal.

**1. I wanted practice building a component library.**

I'm still in the early to intermediate phase of my React knowledge and building a component library seems like the kind of project to help me move into the intermediate to **way over my head** phase.

**2. The React implementation of Photon left a lot to be desired.**

From looking at the source code, you can see that the package is really just basic React JSX with styling provided by passing the `className` prop the associated Photon classes. Not _throwing shade_ (as the kids say) but I had a brigther idea...

Take the wonderful building blocks of Photon and implement a more React styled library for sweet results... photons, and processing that produces sweet consumables... sounds **Photosynthesis** (don't say I didn't try)

### Main concerns / missing features

- Lacks themeing

While the default Mac OS look is obviously the appeal of the original project, my initial goal was to use it to build a Twitch.tv client for link. I need a clean and reactive means to change default button colors and design aspects without fidling around with overriding css properties and the mess that could bring if not centralized or isolated when requried

## Goals
