---
tags: [Notebooks/JavaScript Foundations]
title: 'Execution Context, Hositing, Scopes and Closures'
created: '2019-09-12T19:56:34.768Z'
modified: '2019-09-12T20:26:33.440Z'
---

# Execution Context, Hositing, Scopes and Closures

## Execution Context

> Just like functions, modules, packages allow you to manage the complexity of writing code, _execution context_ allow the JavaScript engine to manage the complexity of interpreting code - Tyler McGinnis

Each execution context has (2) phases:

- **Creation**
  1. create `global` object (`window` in browser and `global` in Node)
  2. create `this` object which points to the global object
  3. memory is allocated for variables and functions
  4. _initialize_ all variables a default value of `undefined` while placing functions directly in memory
- **execution**
  JavaScript executes your code in this phase

### Hosting

There is a misconception that hosting involves _'moving'_ around variables to the _'top'_ of the source file. This is incorrect.

> All hoisting is, is the process of assigning variable declartions an initial value of `undefined` during the **Creation Phase**, since during this phase, any **function declartions** create a variable whose value is a _reference_ to the functions code in memory, the effect is that we can use functions before they are declared. Understanding the phases of the execution context also sheds light on why this is not possible with **function expressions**
