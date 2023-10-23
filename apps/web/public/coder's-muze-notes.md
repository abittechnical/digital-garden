---
title: Coder's Muze Notes
created: '2019-10-23T21:07:58.573Z'
modified: '2019-10-24T18:04:50.802Z'
---

# Coder's Muze Notes

**Question:**

> Great video! For a data science project, I am trying to create a music playlist generator in python by finding lyrical and audio feature similarities between songs. Do you have any advice/tips on what machine learning techniques to use, and how difficult this process might be? Thanks!

**Answer [Mark Koh]:**

> If you can find a <mark>meaningful encoding of the the timbre vectors for a given track's segments into an track-level encoding then that could definitely be a useful feature</mark>. Of course most of the audio feature scores for the tracks would also be useful.
> If you're planning on using a supervised mode, do you have any idea of what you'd use for a training data set and what kind of proxy target you would use?
> If unsupervised you could perhaps create vector representations using the audio features concatenated with some encodings of the low-level analysis data and use a PCA or an SVD (or some other dimensionality reduction technique) on the raw vectors, and then use nearest neighbor searches on the latent representations of the tracks. Of course that's just one approach -- there are many others that may work better :)
> Hopefully this helps - happy to discuss more ideas and would love to hear about your results when you're done!
