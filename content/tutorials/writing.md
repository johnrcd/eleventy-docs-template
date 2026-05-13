---
title: Writing
---

[[toc]]

Pages in this project are written in *Markdown*. You do not need previous knowledge on what it is--- Markdown is designed to be a very simple and easy to understand markup language, so you can quickly pick up the basics just by trying it out.

This tutorial assumes that you have the capability of editing pages at the source level (or at the very least, just for the page contents); that you can edit the raw markdown code directly.

## Basics

It is recommended to view this page from the website, as it both shows the lines of code and what they output.

### Paragraphs

A paragraph is a line of text.

To write multiple paragraphs, separate them with an empty line.

```
A paragraph is a line of text.

To write multiple paragraphs, separate them with an empty line.
```

If there is not an empty line,
the lines will merge
together.

```
If there is not an empty line,
the lines will merge
together.
```

### Italics

*This is how to make italicized text.*

```
*This is how to make italicized text.*
```

_You can also use underscores, if you'd like._

```
_You can also use underscores, if you'd like._
```

### Bold

**Bolded text is similar, but uses two asterisks.**

__Or two underscores.__

```
**Bolded text is similar, but uses two asterisks.**

__Or two underscores.__
```

### Italics and Bold

***You can have text be both bold and italic by tripling up asterisks.***

```
***You can have text be both bold and italic by tripling up asterisks.***
```

___Or tripling up underscores.___

```
___Or tripling up underscores.___
```

### Strikethrough

~~Cross out text with tildes.~~

```
~~Cross out text with tildes.~~
```

### Headers

> [!NOTE]
> No header examples will be displayed. This is because headers are used to generate Table of Contents, but also because the page already uses headers.

```
# Heading 1

## Heading 2

### Heading 3
```

All Markdown headings are clickable, to help make it easier to link to sections on a page.

> [!WARNING]
> Do not use Heading 1. It is reserved for page titles, and is automatically created at the top of every page.
>
> e.g. (`# Example`)

## Lists

Markdown by default supports both unordered and ordered lists.

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

```
1. This is an ordered list.
2. There is a number/positiong marking beside each item in the list.
3. Bottom Text.
```

<span></span>

15. This is an ordered list with a different starting number.
16. Ordered lists do not need to start on one.
200. Additionally, the numbers on an ordered list (except for the first) are ignored when parsed.
300. (This is why the numbers jump from 200 and 300).

```
15. This is an ordered list with a different starting number.
16. Ordered lists do not need to start on one.
200. Additionally, the numbers on an ordered list (except for the first) are ignored when parsed.
300. (This is why the numbers jump from 200 and 300).
```

### Checklist/To Do

There's also checklists.

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

```
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

### Defintion Lists

Soft of a weird one-- meant for the weird definition list thing that HTML has but is rarely used.

Skirmisher
~ Aggressive fighters that can jump directly in the fray of a battle. Relatively fragile, but make up for it with their agility and strength.

Brusier
~ Combatants that can both deal and take a lot of damage.

Marksman
~ Fights from a distance using bows or long-ranged artillery magic.

```
Skirmisher
~ Aggressive fighters that can jump directly in the fray of a battle. Relatively fragile, but make up for it with their agility and strength.

Brusier
~ Combatants that can both deal and take a lot of damage.

Marksman
~ Fights from a distance using bows or long-ranged artillery magic.
```

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

Here's a bigger table with more features

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

```
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
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

## Complex Features and Components

Generally, you will want to build your own components to add visual interest to your pages. Markdown is excellent for text content, but often suffers with anything too complex.

This template has several components that you can use as a reference for your own projects. It is recommended to view this directly on the website, as it shows both the code to create a component and what it looks like when the website is running.

