---
title: Favicon
---

A favicon is that tiny image/logo you see at the list of tabs on your browser, or your bookmarks.

If you have a complex logo, it is recommended to create a simpler version for your favicon, as they almost always displayed in small resolutions.

## Update Favicon

Favicons are stored in `public/img/favicon/`. You can replace these files manually, but it's recommended to use the [same website that was used to make them](https://favicon.io/favicon-converter/).

If you do use it, the process is simple:

- Upload your full-sized (simple if needed) logo to the converter.
- Download the converted zip file.
- Unzip it.
- Replace the contents of `public/img/favicon/` with the contents in the unzipped folder.

### Alternate Method

The current configuration heavily encourages using [favicon.io](https://favicon.io/favicon-converter/) due to the ease of use. If you have your own process for building favicons (or would prefer to use a different site), you can setup your own system.

Favicons are loaded in the `<head>` tag, located at `_includes/layouts/_base.njk`. You can use the same `public/img/favicon/` folder, or use a different location as long as it doesn't cause issues with Eleventy's build process.
