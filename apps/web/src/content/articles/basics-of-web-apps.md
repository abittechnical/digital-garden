---
title: Basics of Web Apps
description: Notes about the basics of web application development
created: 1970-01-01T00:00:00.000Z
pubDate: 2019-10-22T19:33:56.292Z
tags:
  - web
---

## Web Applications: Basic Concepts

### Historical View

### A Model

> **Client-server architecture** - The most basic model for describing the relationship between the cooperating programs in a networked software application.

1. **_Server_** -- "listens" for request, and provides services and/or resources accordingly.

2. **_Client_** -- establishes a connection to the server, and requests services and/or resources from it.

   > _traditionally_ if the client didn't do "much", it was refereed to as a **thin client**. However with browser being asked to do more and more (becoming a **platform** in of themselves) this is less common to hear

### Definition

> A web application is accessed by users via the Internet, using a browser as the client, and consists of a collection of client and server-side scripts, HTML pages, and other resources that may be spread across multiple servers, or throughout the World Wide Web.

### Web Apps and Web (WWW):

- **WWW** - a system of interlinked documents (web pages) accessed via the Internet. (using **HTTP**)
- Web pages contain **_hypermedia_**, along with **_hyperlinks_** to other web pages
- hypermedia: _text, graphics, images, video ... etc_
- Hyperlinks give the Web its structure
- The structure of the Web is what makes it useful and gives it value.

### Advantages:

- Ubiquity and convenience of using a web browser as a client
- Inherent cross-platform compatibility
- Update and maintain web apps without distributing and installing software on potentially thousands of client computers.

### Disadvantages:

- User experience, as compared to desktop apps- historical: not the case any longer
- Privacy and security issues associated with your data
- Programmer's perspective: web apps are difficult to develop and debug -- there are a lot of moving parts!

---

### Web 1.0 Architecture

#### Web 1.0 Applications:

- Richer applications $\to$ more complicated server-side scripts $\to$ maintenance issues.

- "Browser Wars" $\to$ more functionality on the client side $\to$ compatibility issues

- Developers began creating applications that were more interactive -- requires saving state. $\to$ cookies

- New technologies improved performance:

  - e.g., client-side scripts, cookies, faster web servers, web caching, CDNs, etc.

    > _"with caching and CDNs (content distribution networks) content is replicated and stored on high performance servers closer to [particular] users. These are deployed around the world, and allows for **faster** downloading of web content."_

---

### Web 2.0 & 3.0 Architectures

#### Web 2.0 & 3.0 Applications:

[Evolution of Web Apps](https://www.coursera.org/learn/web-app/lecture/yghKM/video-3-evolution-of-web-apps)

#### Complexity of Modern Web Apps:

- Modern web apps involve a significant amount of complexity
- This makes developing, maintaining and extending a complex web application extremely difficult.
- Using a foundation of solid design principles can simplify development and maintenance.

| Relationship | Model with no foreign key | Model with foreign key  |
| ------------ | ------------------------- | ----------------------- |
| one-to-one   | has_one                   | belongs_to              |
| many-to-one  | has_many                  | belongs_to              |
| many_to_many | has_and_belongs_to_many   | \* stored in join table |
