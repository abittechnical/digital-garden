# Robin Hood Vol. 1

So there you are, learning a new language/framework and with very little, to none, work experience. Oh and did I mention you also took a "sabbatical" during your junior year of your CS degree? You've procrastinated enough hours reading blog post to know, minus that degree or substantial industry experience, your best shot at landing a developer position is to put together a portfolio showcasing your merits. If you're anything like the aforementioned individual, you also lack genuine design skills and all your creativity surrounds your ability to speak in the anonymous third person. What are you to do?

To our benefit, the internet is abundant with free and quality frontend designs and templates. The issue however and the purpose of this post is the incongruence between our modern whims and these older resources. Let's say that you, like this unnamed person, are learning React, along with modern JavaScript in hopes of being hired to build modern web applications. Yet that really amazing design or experiment uses things like jQuery and was concerned about supporting something called _Internet Explorer_ (_presumably no relation to Dora_). Our task then is to convert such a resource into one utilizing all the latest buzzwords so that you and our unnamed friend both can crowd your resumes with them.

## Task 1: To jQuery or not to jQuery

If you've been learning React long enough to have at least written a couple useless "card components" then you'll be aware that the html conversion will be straightforward. Thanks to the black magic of JSX we can almost do a one-to-one adoption of the original html syntax in our resulting React component. The few caveats requiring changing `class` to `className` and `for` to `htmlFor` , but I'll be assuming you have an appreciation for these differences moving forward.

A really superb tool in my learning has been **Wappalyzer**. This is a Chrome extension that provides you with information about the technologies a particular site is employing. If you utilize this extension during your internet travels you'll see that many sites still make use of jQuery. Some sites even make use of this older technology right alongside with React.

This means that for a given template that you wish to modernize, the wholesale removal of jQuery isn't a prerequisite. Because edification is the true governing intent of this exercise, you should explore the code base and understand how and why jQuery is being used in this project.
