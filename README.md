# eleventy-docs-template

<div style="width: 100%; display: flex; justify-content: center; align-items: center;">
	<img src="/public/img/site_logo.png" style="width: 200px;"/>
</div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/bb98696b-b515-40ba-bfd3-e3ca49eeecc7/deploy-status)](https://app.netlify.com/projects/eleventy-docs-template/deploys)

This repository is a template for building documentation websites. It uses [Eleventy](https://www.11ty.dev/) as a static site generator. This template is best used with solo (or small scale) projects that just want documentation up and running.

You can check out the project at [eleventy-docs-template.netlify.app/](https://eleventy-docs-template.netlify.app/). The website/project also acts as a reference on how to use it.

## Features

- Pages written in Markdown (with extensions)
- Components common in online wikis/documentation.
- Searching implemented with [Pagefind](https://pagefind.app/)
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
> `npm run index` builds the database needed to run the search function. It only needs to be run the first time you load the project (or whenever you publish a build), unless you're testing the search directly.
