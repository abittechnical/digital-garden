---
title: Asynchronous Programming
description: Notes about asynchronous programming
created: 2019-07-20T08:37:32.322Z
pubDate: 2019-07-24T06:15:27.722Z
tags:
  - node
  - javascript
  - web
---

### The Callback Pattern

Callbacks are the materialization of the handlers of the **reactor pattern**.

They are functions that are invoked to propagate the result of an operation _and this is exactly what we need when dealing with asynchronous operations._

- They replace the use of `return` instruction that always executes synchronously.

> JavaScript is a great language to represent callbacks, because as we have
> seen, **functions are first class objects and can be easily assigned to variables, passed as
> arguments, returned from another function invocation or stored into data structures.**
>
> Another ideal construct for implementing callbacks is closures. **With closures, we can in
> fact reference the environment in which a function was created; we can always maintain the context in which the asynchronous operation was requested**, no matter when or where its callback is invoked.

The presence of a callback in a function signature do not always signify asynchronous behavior. Callbacks can perform one of two purposes:

1. A means to **propagate the result of an asynchronous operation to a handler responsible for processing the operation's result**
2. Consider `let doubles = [1,2,3,4].map( num => num*2)`here the callback simply provides the operation to be performed on each element in the array.

## Listening for Events

### Signals

The Node process object exposes standard **POSIX** signal names, such that a Node process can subscribe to these system events.​

### child process communication

### filesystem change events

### deferred execution
