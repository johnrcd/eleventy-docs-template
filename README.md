# eleventy-docs-template

<div style="width: 100%; display: flex; justify-content: center; align-items: center;">
	<img src="/public/img/site_logo.png" style="width: 200px;"/>
</div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/bb98696b-b515-40ba-bfd3-e3ca49eeecc7/deploy-status)](https://app.netlify.com/projects/eleventy-docs-template/deploys)

This repository is a template for building documentation websites. It's ideal for small-to-medium projects when you need something up and running quickly.

As the name implies, it uses [Eleventy](https://www.11ty.dev/) as a static site generator.

You can check out the project at [eleventy-docs-template.netlify.app/](https://eleventy-docs-template.netlify.app/) The base project also acts as documentation on how to customize and use the site.

## Features

- Pages written in Markdown (markdown-it specifically)
- Search bar implemented with [Pagefind](https://pagefind.app/)
- Configuration/data files in YAML.

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
