---
permalink: /tags/
title: List of All Tags
---

This page stores a list of auto-generated pages for each unique tag this website uses. It acts a backup solution for navigation when there hasn't been a tailored navigation panel/list for the page you're looking for (unfortunately more common than not oops), you're unsure of what to search for in the search bar, or the website hasn't been indexed recently.

Tags and are sorted alphabetically.

> [!NOTE]
> Pages do not display which tags they have on them.

## tags

<ul>
	{% for tag in collections | getKeys | filterTagList | sortAlphabetically %}
		{% set tagUrl %}/tag/{{ tag | slugify }}/{% endset %}
		<li><a href="{{ tagUrl }}" class="page-tag">{{ tag }}</a></li>
	{% endfor %}
</ul>
