---
tags: [Notebooks/React-Router]
title: Philosophy
created: '2019-08-25T08:28:58.612Z'
modified: '2019-08-25T09:03:59.892Z'
---

# Philosophy

## Historical Context

At the time, both Michael and Ryan (the creators of React Router) were coming from Ember backgrounds. So naturally, the first version of React Router was similar in nature to that of Ember's router. That is, with both routers you'd establish your routes statically as part of the app's initialization process. In fact, mostly all of the router's you're probably familiar with are used this way - Express, Angular, Ember. Even React Router pre version 4 used static routes as well. Here's some code from React Router before version 4. Typically you'd have a `routes.js` file where you'd establish your
static routes.

```jsx
// routes.js (V3)
const routes = (
  <Router>
    <Route path="/" component={Main}>
      {' '}
      <IndexRoute component={Home} /> <Route path="playerOne" component={Prompt} /> <Route
        path="playerTwo/:playerOne"
        component={Prompt}
      /> <Route path="battle" component={ConfirmBattle} /> <Route
        path="results"
        component={Results}
      /> <Route onEnter={checkAuth} path="dashboard" component={Dashboard} />
    </Route>
  </Router>
)
export default routes
```

```jsx
// index.js (V3)
import React from 'react'
import ReactDOM from 'react-dom'

import routes from './config/routes'

ReactDOM.render(routes, document.getElementById('app'))
```
