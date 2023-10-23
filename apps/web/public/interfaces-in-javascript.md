---
tags: [Notebooks/JavaScript Foundations]
title: Interfaces in Javascript
created: '2019-12-27T12:14:38.768Z'
modified: '2019-12-27T12:31:18.077Z'
---

# Interfaces in Javascript

## The Context

> The interface is one of the most useful tools in object-oriented JavaScript programmer's toolbox. **The first principle of reusable object-oriented design mentioned in the Gang of Fours's _Design Patterns_ says "Program to an interface, not an implementation"**

### The Problem

The problem is that JavaScript has no built-in way of creating or implementting interfaces. It also lacks built-in methods for determining whether an object implements the same set of methods as another object, **making it difficult to use objects interchangeabley.**

## What Is an Interface?

An interface provides a way of specifying what methods an object should have. It does _not_ specify how those methods shoudl be implemented, though it may indicate (or at least hint at) the semantics of the methods.

**This allows you to group objects based on what features they provide.** For example, a group of extremely dissimilar objects can all be used interchangeably in `object.compare(anotherObject)` if they all implement the `Comparable` interface. **It allows you to exploit the commonality between different classes.**

## Benefits of Using Interfaces

What does an interface do in object-oriented JavaScript?

- **Established interfaces are self-documenting and promote reusability.** An interface tells programmers what methods a given class implements, which makes it easier to use.

- Interfaces also stabilize the ways in which different classes can communicate. By knowing the interface ahead of time, you can reduce the problems of integrating two objects.

- It also allows you to specify in advance what features and operations you want a class to have.

> One programmer can create an interface for a class he requires and then pass it to another programmer. The second programmer can implement the code in any way she wants, and as long as the class implements the interface, it should work.

- Testing and debugging become much easier. Logic erros are then limited to the methods themselves, instead of the object's composition.
