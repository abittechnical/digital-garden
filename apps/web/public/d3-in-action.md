---
title: D3 in Action
created: '2019-06-08T05:11:11.858Z'
modified: '2019-07-24T06:11:49.093Z'
---

# D3 in Action

## D3.js Fundamentals

### Selection

Given a **dataset** and **DOM elements**:

> A **_selection_** is the group of the data and elements together.

We can perform actions on the elements in the group, such as moving them or changing their color. We can likewise update the values in the data.

```{{javascript}}
/**
 * For each circle within the svg element with class "a" change
 * its fill to red and move it 100px along the x-axis
 */
d3.selectAll("circle.a").style("fill","red").attr("cx",100);
```

![1559887509535](/home/bitwhys/.config/Typora/typora-user-images/1559887509535.png)

> D3 is about deriving the appearance of web page elements from bound data
