---
title: Site Card
---

This website's name and logo are shown at the top left of every page. Internally, this is known as the *site card*.

<div style="max-width:200px; margin: auto">
	<div class="siteCard">
		<img class="siteCard__logo" src="{{ metadata.logo_path }}" />
		<a class="siteCard__title" href="/">{{ metadata.site_name }}</a>
	</div>
</div>

## Update Site Name

In `_data/metadata.yaml`, change the `site_name` variable.

```yaml
site_name: [change this]
```

When writing content on your site and you want to ensure that the site title is written the same no matter what, use the code {<span></span>{ metadata.site_name }} in your content files.

Copy-pasting that code will produce this:

{{ metadata.site_name }}

This allows you to write the name of your site anywhere, and have it be updated if you ever decide to change the site name.

!!! warning
    Curly braces ("{" and "}") are treated as special characters, because content files are configured to preprocess any Nunjucks code within them.

## Update Site Logo

The site logo is stored at `public/img/site_logo.png`. You can simply replace this file.

### Change Site Logo URL

There's a greater-than-zero chance that your logo isn't a png (could be svg, or ...jpeg??), or that you simply don't like the file name `site_logo`. In either case, you can name your logo whatever you wish, and simply change the file path.

In `_data/metadata.yaml`, change the `logo_path` variable

```yaml
logo_path: /public/img/[YOUR FILE HERE].[PLUS THE EXTENSION]
```

Technically, you don't have to store your logo in `public/img/`, but it's recommended that you do.

### Favicon

See the page on [favicons](/favicon/) for more information.
