---
tags: [Notebooks/Web Applications]
title: General Notes (UnOrganized)
created: '2019-12-26T04:59:44.605Z'
modified: '2019-12-26T05:19:10.886Z'
---

# General Notes (UnOrganized)

- Reconcile the colloquial phrase **Business Logic** with:
  - the parts that represent the model of the underlying application domain
  - write an application model by first defining new classes that would embody the special application domain-specific information

## Serializing and de-serializing attribute values

**_Serializing_ an attribute value means to cnvert it to a suitable string value**. When a string value, like '13' or 'true', represents the value of a non-string-valued attribute, it has to be **_de-serialized_, that is, converted to the range type of the attribute**, before it is assigned to the attribute

One important question is: **where should we take care of de-serialization:** int the 'view' (before the value is passed to the 'model' layer), or in the 'model'? Since attribute range types are a business concern, and the business logic of an app is supposed to be encapsulated in the 'model', **de-serialization should be performed in the 'model' layer, not in the 'view'**

## Synchronizing views with the model

When an app is used by more than one user at the same time, we have to take care of somehow synchronizing the possibly concurrent read/write actions of users such that users always have current data in their "views" and are prevented from interfering with each other. This is a very difficult problem, which is attacked in different ways by different approaches. It has been mainly investigated for multi-user database management systems and large enterprise applications built on top of them.

The original MVC proposal included a data binding mechanism for automated one-way model-to-view synchronization (updating the model's views whenever a change in the model data occurs).

A mechanism for automatically updating all views of a model object whenever a change in its property values occurs is provided by **the observer pattern that treats any view as an observer of its model object.** Applying the observer pattern requires that:

1. Model objects can have a multivalued reference property like _observers_, which holds a set of references to view objects
2. A _notify_ method can be invoked on view objects by the model object whenver one of its property values is changed.
3. The _notify_ method defined for view objects takes care of refreshing the user interface

> Notice, however, that the general model-view synchronization problem is not really solved by automatically updating all (other users') views of a model object whenever a change in its data occurs. Because this would only help, if the users of these views didn't make themselves any change of the data item concerned, meanwhile. Otherwise, their changed data value would be overwritten by the automated refresh, and they may not even notice this, which is not acceptable in terms of usability.
