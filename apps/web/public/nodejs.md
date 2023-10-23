---
tags: [Node]
title: Nodejs
created: '2019-07-20T08:37:32.474Z'
modified: '2019-07-24T06:19:05.611Z'
---

# **Node.js Master Class**

## Node's script processor

1. Reads in the file you specify
2. Reads in all the dependencies that file specifies, and all the dependencies of those files, etc.
3. Begins executing the synchronous tasks in those files.
4. Begins processing the "todo list" by repeating the event loop until it has nothing to do

## Common Node Conventions

### The `package.json` file

A file which sits at the root of the project directory and contains meta data about the project. This information includes, _project name_, _license_, **package dependencies**, _scripts_,...etc

### Testing & Task Running

Testing scripts are commonly held in a /test directory, and are triggered by a "test runner" such as _Moca_

- Common testing/task files include:
  - `.travis.yml` configuration file for more complex testing **_CI_** (continuous integration) or deployment **_CD_** (continuous deployment)
  - `.jshintrc` configuration file for JavaScript linter (e.g. JS Hint)

General-purpose task runners often control the whole process. **Grunt** and **Gulp** are the most popular.

### Documentation & Source Control

**Git** (and **Github**) are by the most popular source control options, so you will often see `.git` and `.gitignore` directories and files (respectively) in projects

There will most likely also be a `README.md` file in the root directory, this is the file seen on the projects home repository page

### Common Code-Comments

- `@Param`
- `@TODO`
- `@Author`
- `@Date`

### Environments & Configuration

#### Option 1( most popular)

Start your app with

`NODE_ENV=myEnvironmentName node index.js`

Putt your configuration in a file, (e.g config.js) which has a switch inside of it.

That switch should read `process.env.NODE_ENV` to determine the current environment, and export only the config variables for that environment

#### Option 2

Start your app with every configuration variable you're going to need for that environment

`DBpassword=myDBpassword apiToken=mySecretToken port=thePortIShouldRunOn foo=bar node index.js`

##### Advantages

- For large/open-source projects none of your configuration is committed to source control
- Code is written in a more _functional_ manner making it easier to write test
- when config needs to change, you can just stop the app and start with different variables. No code changes needed

#### Option 3

Read all your configuration from a `.env` file which get ignored by source control (recommended by Heroku as best practices for node.js). File format is similar to _yaml_ files.

Each dev should put their won `.env` file in the project prior to beginning localhost work

Your deployment pipeline would insert an `.env` file into the repo before it deploys anywhere

### Styles & Patterns

Most popular style guide is published by Airbnb located [here](https://github.com/airbnb/javascript)

Linters (**jshint** and **jslint**) also inform the syntax many devs use. These linters will catch many style issues that aren't of major consequence to the function of the application but rather are common conventions used

### Error Handling

#### Errback

(popularized by ExpressJS) Every functions callback should have two parameters

1. an error (if any) which should take on the following values appropriately

   1. `null`
   2. `undefined`
   3. `false`

2. Data being returned (if any)

   ```{{javascript}}
   exampleFunction(function(err,data) {
       // Check the error
       // Do stuff with the data
   });
   ```

#### Avoid Throwing Exceptions

> An uncaught exception takes down the entire thread, and kills the app.

Since node.js is single threaded, throwing an exception kills the entire application. So instead when writing functions we return the encountered error to the caller (using the above **Errback** pattern).

#### Avoid Globals

> This way you'll avoid namespace collisions (namespace pollution) with any libraries you may be using. Scope variables to functions and files (e.g, making use of `let` instead of `var`)

### Browser/Window vs Node

When working in the browser or the console of the browser there are a number of variables available to devs that do not have a counterpart in plain node

|                       |                 |
| --------------------- | --------------- |
| `window.open`         | `document`      |
| `window.location`     | `document.body` |
| `window.navigator`    | `onchange`      |
| `window.origin`       | `onclick`       |
| `window.focus`        | `onblur`        |
| `window.blur`         | `oncopy`        |
| `window.scroll`       | `oncut`         |
| `window.alert`        | `onscroll`      |
| `window.localstorage` | `onmouseenter`  |
| `window.onload`       | `onmouseleave`  |

Conversely Node can do many things that frontend JS cannot

- writing to the file system
- interacting with the operating system ...etc

And while frontend code has to be mindful of cross-browser compatibility **node is a single environment** while browsers are many. Lastly, the source code of anode application is **not visible to the end user**. This is in contrast to frontend where a user can _view source_ and see frontend code. A consequence of this is it is more safe (probably still unadvised) to use private keys and such in plain node.js code.

---

# Building a RESTful API

We are going to build a RESTful API for an uptime monitoring application

An "uptime monitor" allows users to enter URLs they want monitored, and receive alerts when those resources "go down" or "come back up".

## Requirements

1. The API listens on a PORT and accepts incoming HTTP requests for POST, GET, PUT, DELETE and HEAD
2. The API allows a client to **connect**, then **create** a new user, then **edit** and **delete** that user
3. The API allows a user to "**sign in**" which gives then a token that they can use for subsequent authenticated requests
4. The API allows the user to "**sign out**" which invalidates their token
5. The API allows a signed-in user to use their token to create a new "check"
6. The API allows a signed-in user to edit or delete any of their check (0-5)
7. In the background, workers perform all the "checks" at the appropriate times, and send alerts to the users when a check changes its state from "up" to "down", or visa versa.
