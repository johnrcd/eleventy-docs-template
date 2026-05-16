---
title: Page Tags
tags:
  - docs
  - example tag
---

Every page has tags attached to them, which can be used for providing useful metadata, as a way to create automatic navigation pages, or in this project's case; both.

Tags are not intended to be a primary form of navigation, and are given relatively low visibility by only appearing at the bottom of pages. However, the automatic generation and organizing of tag pages makes them convient to find related topics.

The page that lists down all the tags can be found at [`/tags/`](/tags/)

## Adding Tags

Tags can either be applied on a page basis, or a special file that applies tags to every folder. For more information on the latter, see Eleventy's documentation on it's [data cascade](https://www.11ty.dev/docs/data-cascade/).

Pages are added using the `tag` key.

```
title: Page Tags
tags:
  - docs
  - example tag
```

### Naming Convention

## Excluded Tags

Some tags cannot be used as they are used by the site internally. Some extra tags have been excluded for similarities to the exluded tags.

The full list of excluded tags is:

- all
- posts
- post
- blog
- page
- pages
- user page

