# Daily Notes

## July 24, 2018

> A rookie's goal is to **master the fundamentals of programming** and to **understand the importance of libraries and frameworks**

- Learn how to use and work with tests
  - "_live and breath unit test"_
- {Moment.js, Jackson, Lodash, Apache Commons ...}
- Understand the difference between Libraries and Frameworks
  - Hand rolled functionality --> Libraries --> Frameworks
  - shouldn't focus on tools

> The main goal of an exercise is **not to entertain**. It should be created around a particular technique and should help the students understand that technique
>
> **Motivation is good but not at the expense of content. Programming is not easy. If the students don't have an intrinsic motivation, coding might not be the way to go.**

- Many business applications center around complex forms and grids. Creating these is an important skill.

###### Functional Programming

Advantages over **Object-Oriented Programming**:

- Avoiding state
- mutability
- side-effects
- more robust and less fragile applications

###### Declarative vs. Imperative

> Any relational language or functional language. These kinds of programming languages describe **relationships between variables in terms of functions or inference rules**, and the language executor (_interpreter or compiler_) **applies some fixed algorithm to these relations to produce a result.**

> Declarative languages contrast with imperative languages which **specify explicit manipulation of the computer's internal state**; or procedural languages which specify an explicit sequence of steps to follow.

> Imperative programming is about telling your machine **how** to do something

> Declarative programming is about telling your machine **what** you would like to happen in order to do something

Consider the following:

$$
\begin{equation}
	s= \sum_{x=1}^N{x^2}=1^2+2^2+3^2+...N^2
\end{equation}
$$

**Problem Statement:**

> we have a **sequence of values** for which we wish to **aggregate** the result of **performing an operation (function) on each element in the sequence**

```{{javascript}}
/* imperative implementation */
function sumOfSquares(nums) {
    var i, sum = 0, squares = [];
    /* perform operation on each element in sequence*/
    for (i = 0; i < nums.length; i++) {
        squares.push(nums[i]*nums[i]);
    }
    /* aggregate the results */
    for (i = 0; i < squares.length; i++) {
        sum += squares[i];
    }
    return sum;
}
```

```clojure
/* declarative implementation */
(defn squares-of [n]
    (* n n))

(defn sum-of-squares [nums]
    (reduce + (map #(squares-of %) nums)))

(sum-of-squares '(1 2 3 4 5))
```

```{{javascript}}
/* declarative */
function sumOfSquares2(nums) {
    return nums
    	/* perform operation on each element */
    	.map(function(num) {return num*num;})
    	/* aggregate the results */
    	.reduce(function(start, num) {return start + num;}, 0)
    ;
}
```

> ...we switch from thinking about for loops and indices to **processing sequences or streams of input values** (_think Unix style pipes_):
>
> - Use the built-in capabilities of the sequence to **map** the desired operation on each element
> - Use the built-in capabilities of the resulting sequence to **reduce** (aggregate => _reduce_ a set of values into a single value) its elements to our desired value

---

---

## July 27, 2018

###### Ideation: Objectives and Outcomes

- expected features
- survey the market to look at similar ideas to enable you to **differentiate** ones project
  - while drawing inspiration
- **Clearly express the central idea of project**
- **Identify the problem being addressed**
- **Delineate a set of features that you expect your website and app should support**
- **Identify other projects with similar features that may act as exemplars**

---

---

# August 19, 2018

**Blocking**: Occupying the resources of the _thread_ and if the application logic will need to be focused on that task at the expense of anything else it might be doing at the time

---

# September 7

## Notable Bot Types

- Machine Learning

- Markov Chain

  > A stochastic model describing a sequence of possible events in which the probability of each event depends only on the state attained in the previous event

- Corpus Fed

  > In linguistics, a corpus (plural corpora) or text corpus is a large and structured set of texts (nowadays usually electronically stored and processed). They are used to do statistical analysis and hypothesis testing, checking occurrences or validating linguistic rules within a specific language territory

- Generative Image Bots

- _Just Plain ~ Weird ~_

### Decorator Pattern

> While both **Interfaces & Abstract Classes** can not be instantiated, an interface can not have implementation details where as an abstract class can
