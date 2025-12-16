---
title: Markdown Reference
---

Markdown is the markup language that this template uses to create content with.

Because Markdown is so simple, many Markdown processors extend the language by adding additional features. It is very rare to only ever use the [base syntax of Markdown](https://daringfireball.net/projects/markdown/syntax). This document serves as a reference onto the features that this website supports.

It is recommended to view this page directly from the file, and not the website.

NOTE: If you're planning on updating the Markdown processor, either delete this page or update it.

# Heading 1 (h1)

By default, an `<h1>` tag is automatically created for every page. Because of that, a Heading 1 should not be used.

## Heading 2

### Heading 3

## Text

This is what normal text looks like.

*This is italicized text.*

_This is also italiczed text._

**This is bolded text**

__This is also bolded text.__

***This is both italcized and bolded text.***

___This is both italcized and bolded text.___

NOTE: The text above may not appear correctly depending on the font being rendered.

~~crossed out text~~ (requires double ~~)

:heart: Emojis! (yes, i added this.) :star: :star2:

(Full list of emojis can be found [here](https://gist.github.com/rxaviers/7360908).)

## Lists

Markdown by default has lists; unordered and ordered.

- This is an unordered list.
- There are no numbers on the side.
- Bottom text.

1. This is an ordered list.
2. There is a number/positiong marking beside each item in the list.
3. Bottom Text.

This is a gap between lists.

15. This is an ordered list with a different starting number.
16. Ordered lists do not need to start on one.
200. The numbers on an ordered list (except for the first) do not need to be in a proper order. In Markdown, this list element is given the number "200", but on the site, it should appear to equal "17".

There's also checklists.

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

## Horizontal Line

You can use horizontal lines to separate content, although it isn't recommended.

From the official syntax specification on [horizontal rules](https://daringfireball.net/projects/markdown/syntax#hr):

You can produce a horizontal rule tag (`<hr />`) by placing three or more hyphens, asterisks, or underscores on a line by themselves. If you wish, you may use spaces between the hyphens or asterisks. Each of the following lines will produce a horizontal rule:

```
---

***

* * *

****

- - -

********************
```

(This will produce:)
---

***

* * *

****

- - -

********************


## Containers, Admonitions, Callouts, Alerts, etc.

Containers, Admonitions, Callouts are all semi-related concepts that essentially allow you to wrap Markdown text in HTML code to add custom styling.

### Github Alerts

GitHub alerts are a collection of five different blocks you can show to highlight relevant information on a topic. They're often used on code-related documentation due to being directly integrated with GitHub's site.

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

The colors for each alert match the ones used by GitHub itself. This can be customized by updating `public/css/markdown.css`, specifically this section:

```css
.markdown-alert-note      { --alert-color: #0FF9; }
.markdown-alert-tip       { --alert-color: #FF09; }
.markdown-alert-important { --alert-color: #F3F9; }
.markdown-alert-warning   { --alert-color: #F809; }
.markdown-alert-caution   { --alert-color: #F229; }
```

### Admonition

Admonitions function similarly to alerts, but are not limited to a select five types. They are created with a triple exclamation mark (!!!).

```md
!!! admonition_type TEXT YOU SEE ON SCREEN
test
```

will render to:

!!! admonition_type TEXT YOU SEE ON SCREEN
	test rawr

In this project, all admonitions are given a base style. To have custom admonitions, you need to update the CSS to render them differently.

### Containers

Containers have the most control out of all the markdown-in-html wrappers, but they must be manually defined. This project's markdown processor will not render a container that hasn't been explicitly defined.

There are currently no containers in this template.

