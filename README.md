# eleventy-docs-template

This repository is a template for building websites for documentation. It uses [Eleventy](https://www.11ty.dev/) as a static site generator.

## Features

- All documentation-related pages stored in `/content/docs/`
- Search bar implemented with [Pagefind](https://pagefind.app/)
- YAML for configuration

## Getting Started

Download and install:

```
git clone git@github.com:johnrcd/eleventy-docs-template.git
cd eleventy-docs-template
npm i
```

To run:

```
npm run dev
npm run index
```

> [!NOTE]
> `npm run index` builds the database needed to run the search functionality. It only needs to be run after you make a build to setup the project, or whenever you update the content and need to reindex.
