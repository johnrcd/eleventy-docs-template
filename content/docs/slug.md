---
title: Slug
---

A slug is a part of a link that tells you where you are on a website. For example, if you're trying to find something on your YouTube suscriptions page:

`https://www.youtube.com/feed/subscriptions`

The slug would be:

`feed/subscriptions`

In this website, page titles and tags are used to create pages, but the text is not guarenteed to be in a format that can be used in URLs, so it must be cleaned up in a process known as *slugifying*.

The slugify plugin used is (`@sindresorhus`'s `slugify`)[https://www.npmjs.com/package/@sindresorhus/slugify], the recommended slugifier by Eleventy. You do not need to know what it does, but in *general:

- All text is converted to lowercase
- Spaces are replaced with dashes
- Special characters are ignored
- Emojis are ignored

## Page Title

- "Hello World" > [www.example.com/hello-world/](/hello-world/)
- "lowercase UPPERCASE title" > [www.example.com/lowercase-uppercase-title/](/lowercase-uppercase-title/)
- 😀happy PAGE!!!🤗 > [www.example.com/happy-page/](/happy-page/)

## Tags

Tags share the same requirements as page titles, but extra consideration should be given, as tags are shared between pages and not unique.

It is recommended to keep all tags lowercase, as it can help to reduce slug collisions.(e.g. using both `hello` and `HELLO` as tags would cause an error).
