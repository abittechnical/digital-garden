---
---

# Machine Learning : Preliminaries

> \*The **computational complexity** of machine learning methods is of interest to the computer scientist since what is produced are **algorithms**. Looking to apply these methods to very large datasets, algorithms with high-degree polynomial complexity in the size of the dataset (or worse) become problematic. We will be concerned with two forms of complexity: **complexity of training** and **complexity of the models application\***

> \*We are going to loosely define learning as meaning **getting better at some task through practice\***

This basic definition leads to a couple vital questions:

- _How does the computer know whether it is getting better or not?_
- _How does it know how to improve?_

## Types of Machine Learning

- ##### **Supervised learning**:

  - A **training set** of examples with the correct responses (**targets**) is provided and, based on this training set, the algorithm **generalizes** to respond correctly to all possible inputs. This is also called learning from **exemplars**.

- **Unsupervised learning**:

  - Correct responses are not provided, but instead the algorithm tries to identify similarities between the inputs so that inputs that have something in common are **categorized** together. The statistical approach to unsupervised learning is known as **density estimation**.

- **Reinforcement learning**:

  - This is somewhere between supervised and unsupervised learning. The algorithm gets told when the answer is wrong, but does not get told how to correct it. It has to explore and try out different possibilities until it works out how to get the answer right. Reinforcement learning is sometimes called learning with a **critic** because of this monitor that scores the answer, but does not suggest improvements.

- **Evolutionary learning**:

  - Biological evolution can be seen as a learning process: biological organisms adapt to improve their survival rates and chance of having offspring in their environment. We'll look at how we can model this in a computer, using an idea of **fitness**, which corresponds to a score for how good the current solution is.

## Supervised Learning

> As discussed we have a set of data (the **training data** ,$T$ ) that consists of a set of **input** data that has **target** data, which is the answer that the algorithm should produce.

$$
{\huge T\{(\vec{x}_i,\vec{t}_i)\}}{\large: \vec{x}_i {\text{is the input, } \vec{t}_i{\text{is the target}}}}
$$

###### Regression

This is a statistical concept that attempts to fit a mathematical function describing a curve, so that the curve passes as close as possible to all the data points. This generally becomes a problem of **function approximation** or **interpolation** (i.e,. working out the values between values that we know).

$$
{\large \text{Regression}: \mathbb{R^{n}}\to\mathbb{R}}
$$

###### Classification

The classification problem consists of taking input vectors and deciding which of $\mathcal{N}$ classes they belong to, based on training from **exemplars** of each class. The key concept of classification is that it is **discrete** -- each example belongs to precisely one class, and the set of classes covers the whole possible output space.

While _classifiers_ may use very different methods for learning the class mapping, in essence they all aim to do the same thing: find **decision boundaries** that can be used to separate out the different classes.

$$
{\large \text{Classification}: \mathbb{R^{n}}\to  \alpha_i \in\{\alpha_1,\alpha_2,\alpha_3... \alpha_{\mathcal{N}}\} }
$$

## The Machine Learning Process

- **Data Collection and Preparation**
- **Feature Selection**
- **Algorithm Choice**
- **Parameter and Model Selection**
- **Training**
- **Evaluation**

---

## Some Terminology

- **Inputs**: An input vector is the data given as one input to the algorithm. Written as $\bf{x}$, with elements $x_i$, where $i$ runs from $1$ to the number of input dimensions, $m$.
  - The input vector will typically be several numbers, $\text{e.g.,} (0.2,0.45,0.75,-0.3)$. The size of the vector, i.e, the number of elements in the vector, is called the _dimensionality_ of the input. This is because plotting the input would require one dimension of space for each of the different elements of the vector
- **Weights**: $w_{ij}$, are the **weighted connections** between nodes $i$ and $j$. For neural networks these weights are analogous to the synapses in the brain. They are arranged into a matrix $\bf{W}$.
- **Outputs**: The output vector is $\bf{y}$, with elements $y_j$, where $j$ runs from $1$ to the number of output dimensions, $n$. We can write $\bf{y(x,W)}$ to remind ourselves that the output depends on the inputs to the algorithm and the current set of weights of the network.
- **Targets**: The target vector $\bf{t}$, with elements $t_j$, where $j$ runs from $1$ to the number of output dimensions, $n$, are the extra data that we need for supervised learning, since they provide the 'correct' answers that the algorithm is learning about.
- **Activation Function**: For neural networks, $g(\cdot)$ is a mathematical function that describes the firing of the neuron as a response to the weighted inputs, such as the _threshold function_.
- **Error**: $\it{E}$, a function that computes the inaccuracies of the network as a function of the outputs $\bf{y}$ and targets $\bf{t}$.

> The **Curse of Dimensionality** is a a very strong name ... the essence of the curse is the realization that as the number of dimensions increases, the volume of the **unit hypersphere** does not increase with it.
>
> This will apply to our machine learning algorithms because as the number of input dimensions gets larger, we will need more data to enable the algorithm to generalize sufficiently well.
