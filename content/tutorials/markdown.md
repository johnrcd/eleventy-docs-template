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

### Strikethrough

~~crossed out text~~

```
~~crossed out text~~
```

### Superscript and Subscript

H~2~0, 29^th^

```
H~2~0, 29^th^
```

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

## Footnotes

A standard footnote has two features; an indentifier, and the content of the footnote.

My favorite color is purple.[^color-or-colour]

[^color-or-colour]: *favourite, *color

```
My favorite color is purple.[^color-or-colour]

[^color-or-colour]: *favourite, *color
```

[^footnote-before-reference]: This footnote is written earlier before it's referenced.

Footnotes can even be written before they're called.[^footnote-before-reference]

```
[^footnote-before-reference]: This footnote is written earlier before it's referenced.

Footnotes can even be written before they're called.[^footnote-before-reference]
```

(I don't recommend you do this, though.)

### Multi-Line

Footnotes can be written over multiple lines.[^long-note]

[^long-note]: This is the first paragraph.

	This is the second paragraph. I'm intended to signal that I'm a part of the footnote.

```
Footnotes can be written over multiple lines.[^long-note]

[^long-note]: This is the first paragraph.

	This is the second paragraph. I'm intended to signal that I'm a part of the footnote.
```

### Inline Notes

Here is an inline note.^[This is the contents of an inline note.]

```
Here is an inline note.^[This is the contents of an inline note.]
```

Inline notes are automatically assigned an `id`, and cannot be manually given one.


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

### Emoticons

There's also shortcuts for emoticons to automatically convert to their emoji counterparts.

:P :") :* </3

```
:P :") :* </3
```

The list is shorter, so you can just check out the [source code](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/shortcuts.mjs).

> [!WARNING]
> Shortcuts may not always render, and using them may cause conflicts depending on the characters being used.
>
> <//3
> ```
> <//3
> ```

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
