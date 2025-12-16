---
title: Page Lists
---

A page list (or collection) is exactly what it says; a list of pages.

By default, there are two main ways that this project lists pages down— the side panel for links, and the tag pages.

These options help users navigation through the site, but neither of them are intended to be the main method of doing so.

- The side panel is *always* visible on the page, so best used for starting points for users to look at, external links to different sites, or odd balls that don't fit anywhere else.
- The tag pages provide very little context on page collections, apart from the fact they share a tag.

Your documentation will likely include pages that can be grouped together. In these cases, it is recommended to manually create page lists directly.

The Eleventy Docs Template comes with several page lists that you can use.

## Cards

A card in this context refers two a two-piece group, with the first/upper piece being an image, and the last/lower being text. This is similar to the layout of the site card (top left of every page).

The example below shows an of a card-style page list for a collection of selectable characters in a video game.

{% include "components/chars.njk" %}

### Files

- `_data/site_data.yaml` >> `page_collections: chars:`
	- Raw data.
- `/public/img/chars/*`
	- Card images.
- `/_includes/components/chars.njk`
	- Configuration of files.

## Icon

::: test
*here be dragons*
:::

<span style="column-count: 3;">
- one
- two
- three
- four
- i
- declare
- a
- thumb
- war
</span>
<ul style="column-count: 3;">
	<li>meow</li>
	<li>meow</li>
	<li>meow</li>
	<li>meow</li>
	<li>meow</li>
	<li>meow</li>
<li>meow</li>
	<li>meow</li>
	<li>meow</li>
	<li>meow</li>
	<li>meow</li>
	<li>meow</li>
	<li>meow</li><li>meow</li>
	<li>meow</li>
</ul>
