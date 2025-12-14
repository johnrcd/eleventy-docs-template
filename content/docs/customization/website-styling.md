---
title: CSS
---

There are five CSS files used to style the website:

- `__reset.css`: Sets default values.
- `_root.css`: Sets the default appearence of HTML elements, and defines CSS variables.
- `_styles.css`: Defines the structure of the website.
- `markdown.css`: For specific bits of HTML created by the markdown processor.
- `pagefind.css`: Styles the search engine.

## Basic Customization

For minimal changes (such as colors and fonts), changes should be reserved to `_root.css`, specifically these lines in `:root`:

```css
--font-title: "Manrope", "Poppins", "Open Sans", sans-serif;
--font-normal: "Manrope", "Poppins", "Open Sans", sans-serif;
--font-mono: "monospace";

--color-bg-html: rgb(0, 0, 0);
--color-bg: rgb(10, 9, 9);
--color-bg-border: rgba(32, 32, 32, 1);
--color-bg-border-accent: rgba(56, 56, 56, 1);
--color-bg-code: rgba(27, 27, 27, 1);
--color-bg-accent: rgb(142, 231, 241);
--color-text-primary: rgb(240, 240, 240);
--color-text-secondary:rgb(132, 166, 167);
--color-text-accent: rgb(100, 123, 200);
--color-image-monochrome-accent: rgba(200, 0, 250, 0.5);
```

### Importing Fonts

Fonts can be imported via HTML or CSS.

If using HTML, modify the file `_includes/layouts/_base.njk`, and add the necessary code to the `<head>` tag.

If using CSS, you can add your import code in a similar way to the template:

```css
@font-face {
	font-family: "Manrope";
	font-style: normal;
	font-weight: 200 800;
	font-display: swap;
	src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggexSg.woff2) format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```
