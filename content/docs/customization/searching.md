---
title: Search Customization
---

The search page is used to help find content on the website. It is powered by Pagefind, a search library that is fully static, with no server processing required.

To learn more about Pagefind specifically, you can check out [their website](https://pagefind.app/).

## Usage

Pagefind works by processing your build files, creating a directory to store a static search index that it uses as it's database.

As part of it's build process, it also provides a pre-built search interface within it's directory. This is used by the Eleventy Docs Template.

To perform this indexing locally, run the command:

`npm run index`.

This is equivalent to:

`npx -y pagefind --site _site`

Note that in your production server (where you host the website) this will need to be run everytime the contents of your website update. This is done automatically through `npm run build`, which builds the site in Eleventy, then runs Pagefind after.

Indexing and normal static site building are treated as two separate processes in development due to the time needed to index, which increases at a faster rate with every bit of content added to your website compared to the main building. Unless you're directly testing the search, we recommend you avoid indexing.

