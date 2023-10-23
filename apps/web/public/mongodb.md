---
tags: [Backend]
title: MongoDb
created: '2019-07-22T03:21:41.715Z'
modified: '2019-07-24T06:22:34.490Z'
---

# MongoDb

## Connecting to a MongoDB through Mongoose

```js
const mongoose = require('mongoose')
// mongoose url signature: <protocol>://<hostname>:<explicit_port>//<name_of_database>
const MONGOOSE_PROTOCOL = 'mongodb'
const HOST_NAME = 'localhost'
const EXPLICIT_PORT = '27017'
const DATABASE_NAME = 'frontend_masters_mongodb'
const CONNECTION_URL = `${MONGOOSE_PROTOCOL}:${HOST_NAME}:${EXPLICIT_PORT}:${DATABASE_NAME}`
```

## Creating a `collection` in a MongoDB with Mongoose

Even though mongodb is a _schemaless_ database, it is advised to use a schema. At some point you need to utilize the data you're storing and if you store it without some validation that it adheres to the shape the eventual consumer is expecting, then this task is placed on the consumer. This could me heavy checks in the frontend.

So the fist task is to define the shape. After all we know the minimun of what we want to know about some data.

1. Create `Schema`

```js
const student = new mongoose.Schema({
  firstName: String,
})
```

2. Convert Schema to `model`

This model will become the collection later. Parameters include the **collection name** and **schema**. The community convention is name collections in the singular as mongoose/mongo will pluralize later. Additional the returned model is capitalized.

```js
const Student = mongoose.model('student', student)
```
