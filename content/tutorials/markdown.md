---
title: Markdown Reference
---

Markdown is the markup language that this template uses to create content with.

Because Markdown is so simple, many Markdown processors extend the language by adding additional features. It is very rare to only ever use the [base syntax of Markdown](https://daringfireball.net/projects/markdown/syntax). This document serves as a reference onto the features that this website supports.

It is recommended to view this page from the website, as it both shows the lines of code and what they output.

NOTE: If you're planning on updating the Markdown processor, either delete this page or update it.

## Headings

This is what headings look like:

# Heading 1 (h1)

## Heading 2

### Heading 3

```
# Heading 1 (h1)

## Heading 2

### Heading 3
```

All headings are clickable, to help make it easier to link to sections on a page.

> [!IMPORTANT]
> An `<h1>` tag is automatically created for every page. Because of that, a Heading 1 should not be used.

## Text

> [!NOTE]
> The text below may not show changes. Not all fonts support bolded or italicized text.

This is what normal text looks like.

```
This is what normal text looks like.
```

### Italics

*This is italicized text.*

_This is also italiczed text._

```
*This is italicized text.*

_This is also italiczed text._
```

### Bold

**This is bolded text**

__This is also bolded text.__

```
**This is bolded text**

__This is also bolded text.__
```

### Italics and Bold

***This is both italcized and bolded text.***

___This is both italcized and bolded text.___

NOTE: The text above may not appear correctly depending on the font being rendered.

~~crossed out text~~ (requires double ~~)


## Lists

Markdown by default has lists; unordered and ordered.

### Unordered

- This is an unordered list.
- There are no numbers on the side.
- Bottom text.

```
- This is an unordered list.
- There are no numbers on the side.
- Bottom text.
```

### Ordered

1. This is an ordered list.
2. There is a number/positiong marking beside each item in the list.
3. Bottom Text.

This is a gap between lists.

15. This is an ordered list with a different starting number.
16. Ordered lists do not need to start on one.
200. The numbers on an ordered list (except for the first) do not need to be in a proper order. In Markdown, this list element is given the number "200", but on the site, it should appear to equal "17".

### Checklist/To Do

There's also checklists.

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

## Tables

| Channel | Type               |
|---------|--------------------|
| 01      | Piano/Keyboard     |
| 02      | Lead 1 (Primary)   |
| 03      | Lead 2 (Secondary) |

```
| Channel | Type               |
|---------|--------------------|
| 01      | Piano/Keyboard     |
| 02      | Lead 1 (Primary)   |
| 03      | Lead 2 (Secondary) |
```

## Horizontal Line

You can use horizontal lines to separate content, although it isn't recommended.

The actual requirements to make a horizontal line are very lenient; minimum three asterisks or dashes in a line, with the option to have spaces inbetween.

***

* * *

****

- - -

********************

```
---

***

* * *

****

- - -

********************
```

## Emoji Shortcodes

:heart: Emojis! :star: :star2:

```
:heart: Emojis! :star: :star2:
```

(yes, i added this.)

The full list of emojis can be found [here](https://gist.github.com/rxaviers/7360908).

In the event that gist gets taken down, you can find the actual source code (less readable) [over here](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs).

In the event that the emoji dictionary file gets moved, you can find the repository [here](https://github.com/markdown-it/markdown-it-emoji/).

In the event that the repository gets taken down...

I don't know. Use a different emoji library?

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

```
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

Containers have the most control out of all the markdown-in-html wrappers, but they must be explicitely defined, otherwise they won't render. They function similarly to admonitions, but without the title it has.

Invalid containers look something like this:

::: container_that_doesn't_exist
Contents of container.
:::

```
::: container_that_doesn't_exist
Contents of container.
:::
```

Valid containers (that have not been styled and have the default configuration) will look like this:

::: example
Valid container.
:::

```
::: example
Valid container.
:::
```

The documentation for this project's containers is located at the [components](/components/) page.
