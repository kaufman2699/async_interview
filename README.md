# KR Async Service Interview Repository

This codebase contains a basic toy setup of a real problem in contemporary enterprise development. The core challenge is thus: we have two services (`delivery-api` and `workflow-api`), each backed by a separate database, that need to have data synchronized between them. At a large scale, a dense network of synchronous HTTP requests is untenable for this problem. So we need to extend these services such that they can communicate asynchronously.

## Background

In KR DevTech, our core mission is to enable our advisory professionals to deliver high quality financial and business advice as well as possible. Our job is to make business processes get out of the way of service delivery, so that our professionals can focus on the clients.

However, the work our professionals do must be organized and catalogued so that managers and the professionals themselves can understand what work needs to be done and what work has been done.

To that end, we have created tools that allow our professionals to organize their work. However, those tools have created additional redundant work that we would like to eliminate.

## Problem Stories

1. As a user, I want a delivery created automatically when I create a new workflow, so that I know what work _needs_ to be done.

2. As a user, I want to automatically mark the "delivery" task in a workflow done when the corresponding delivery is sent, so that I know what work _has_ been done.

## Success Metrics

This is how we will be evaluating solutions to these problems:

1. __Correctness.__ First and foremost, a solution must be solve the problem stories.
2. __Problem Solving.__ We will be working on these problems together, and we want to see that you approach the problem in a critical, engaged, and rigorous manner.
3. __Style.__ We want to see solutions that are readable, maintainable, and expressive. We are a small team supporting a lot of code, so we hold each other to a high standard of code readability.