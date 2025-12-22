---
title: Getting Started
---

This template assumes you have a basic understanding of Git.

## Installation

You can download the repository from GitHub.

```
git clone git@github.com:johnrcd/eleventy-docs-template.git
cd eleventy-docs-template
npm i
```

> [!TIP]
> Since this is a template, you probably don't want the git history (and want to start fresh), so make sure to delete the `.git` folder before you start doing any work.

To run the development server:

```
npm run dev
npm run index
```

> [!NOTE]
> `npm run index` builds the database needed to run the search function. It only needs to be run the first time you load the project (or whenever you publish a build), unless you're testing the search directly.
