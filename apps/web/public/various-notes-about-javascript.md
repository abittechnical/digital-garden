---
tags: [Design Patterns, Notebooks/JavaScript Foundations]
title: Various Notes about JavaScript
created: '2019-09-10T17:59:48.630Z'
modified: '2019-09-11T19:21:19.867Z'
---

# Various Notes about JavaScript

- The most interseting use of the anonymous function is to create a closure. A _closure_ is a protected variable space, created by nested functions. JavaScript has function-level scope. This means that a variable defined within a function is not accessible outside of it. JavaScript is also lexically scoped, which means that functinos run in the scope they are defined in, not the scope they are excuted in. These two facts can be combined to allow you to protect variables by wrapping them in an anonymous function. You can use this to create private variables for classes

- Related to object mutability is the concept of _introspection_. You can examine any object at run-time to see what attributes and methods it contains. You can also use this information to instantiate classes and execute methods dynamically, with knowing their names at development time (this is known as _reflection_)

## Principles of OOP in JS

Object-oriented languages have serval characteristics:

### Encapsulation

Data can be grouped together with functionality that operates on that data. This, quite simply, is the definition of an object.

### Aggregation

One object can reference another object.

### Inheritance

A newly created object has the same characteristics as another object without explicitly duplicating its functionality.

### Polymorphism

On interface may be implemented by multiple objects.

## Understanding Objects

- When a property is first added to an object, JavaScript uses an _internal method_ called `[[Put]]` on the object. The result of calling `[[Put]]` is the creation of an _own property_ on the object. An own property simply indicates that the specific instance of the object owns that property. The poroperty is stored directly on the instance, and all operations on the property must be performed through that object.

- When a new value is assigned to an existing property, a separate operation called `[[Set]]` takes place.

- By default all properties that you add to an object are _enumerable_, which means that you can iterate over them using a `for-in` loop. Enumerable properties have their internal `[[Enumerable]]` attribute set to `true`
