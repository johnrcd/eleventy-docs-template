---
title: Components
---

Generally, you will want to build your own components to add visual interest to your pages. Markdown is excellent for text content, but is not designed to deal with layouts.

This template has several components that you can use as a reference for your own projects. Note that unlike the Markdown reference, the actual code will not be shown.

## Card Select

A card in this context refers to an image with a title below it. A card select is several of these.

The example below shows an of a card select for a collection of selectable characters in a video game.

{% include "components/chars.njk" %}

This specific implementation stores the card select metadata in `_data/site_data.yaml`. Because of that, it is relatively difficult to edit (compared to something like "listing all pages that have this tag").

### Examples

![League of Legends Wiki home page, the main navigation panel cropped out.](/public/img/ref/lol_wiki_card_select.png)

[League of Legends Wiki](https://wiki.leagueoflegends.com/en-us/)

![Minecraft Wiki home page, the main navigation panel cropped out.](/public/img/ref/minecraft_wiki_card_select.png)

[Minecraft Wiki](https://minecraft.wiki/)

![Deep Rock Galactic home page, the main navigation panel cropped out.](/public/img/ref/deep_rock_galactic_card_select.png)

[Deep Rock Galactic Wiki](https://deeprockgalactic.wiki.gg/)

A card select is very common on the home page of many wikis. This makes it somewhat of an odd choice to include for a **documentation** website template, as most typically have a table of contents always visible, but this project doesn't have that since it's not meant for code documentation.

Despite that, there is *some* usage of card selects, specifically in CSS libraries for showing components:

![Daisy UI website, on the components page](/public/img/ref/daisy_ui_card_select.png)

[Daisy UI Components](https://daisyui.com/components/)

### Files

- `_data/site_data.yaml` >> `page_collections: chars:`
	- Raw data.
- `/public/img/chars/*`
	- Card images.
- `/_includes/components/chars.njk`
	- Configuration of files.

## Scaled Up Images

If your documentation uses pixel art, you can use the `scaleUpImage` container to render it at the maximum size.

::: scaleUpImage
![tilemap](/public/img/tiles/col_8.png)
:::

Depending on the type of art, it may be better to create custom containers that render up to a specific size (especially for tall images).

## List with Multiple Columns

Lists are useful, but when you're listing down items, generally the names are pretty short. That makes it awkward to have a long list because it takes up so much vertical leeway. This project uses Markdown containers to easily create multi-column lists, ranging between 2-4 columns.

### Two Columns

::: multiColumnList--2

- one
- two
- three
- four
- five
- six
- seven
- eight
- nine
- ten

:::


### Three Columns

::: multiColumnList--3

- one
- two
- three
- four
- five
- six
- seven
- eight
- nine
- ten
- eleven
- twelve

:::

### Four Columns

::: multiColumnList--4

- one
- two
- three
- four
- five
- six
- seven
- eight
- nine
- ten
- eleven
- twelve

:::

### Considerations

As a fallback to ensure readability, elements with lots of content will try to wrap to the next line. This prevents text from overlapping, but will often cause issues in the formatting.

::: multiColumnList--4

- one
- two
- three BUT MAKE IT SUPER LONG !!!!!! :D
- four
- five
- six
- seven
- eight
- nine
- ten

:::

If you want to squeeze a list into as small of a vertical space as possible, use the column count that keeps all elements as a single line of text. This may require that you have a lot of unused space if a single element is notably longer than the rest.

::: multiColumnList--2

- one
- two
- three BUT MAKE IT SUPER LONG !!!!!! :D
- four
- five
- six
- seven
- eight
- nine
- ten

:::

## Multi-Column Lists with Icons

In the majority of wiki's (that I've seen), multi-column lists usually have each element with an icon beside it, almost always in the form of a list of links to that are categorized together.

Here is a multi-column list where each icon is from the tilemap posted earlier on this page.

::: multiColumnList--4

- ![tile](/public/img/tiles/tile000.png) (unused)
- ![tile](/public/img/tiles/tile001.png) up_right_2
- ![tile](/public/img/tiles/tile002.png) up_left_2
- ![tile](/public/img/tiles/tile003.png) right_up_1
- ![tile](/public/img/tiles/tile004.png) right_up_2
- ![tile](/public/img/tiles/tile005.png) left_up_1
- ![tile](/public/img/tiles/tile006.png) left_up_2
- ![tile](/public/img/tiles/tile007.png) (unused)
- ![tile](/public/img/tiles/tile008.png) (unused)
- ![tile](/public/img/tiles/tile009.png) up_right_1
- ![tile](/public/img/tiles/tile010.png) up_left_1
- ![tile](/public/img/tiles/tile011.png) right_down_1
- ![tile](/public/img/tiles/tile012.png) right_down_2
- ![tile](/public/img/tiles/tile013.png) left_down_1
- ![tile](/public/img/tiles/tile014.png) left_down_2
- ![tile](/public/img/tiles/tile015.png) (unused)
- ![tile](/public/img/tiles/tile016.png) (unused)
- ![tile](/public/img/tiles/tile017.png) down_left_2
- ![tile](/public/img/tiles/tile018.png) down_right_2
- ![tile](/public/img/tiles/tile019.png) full
- ![tile](/public/img/tiles/tile020.png) (unused)
- ![tile](/public/img/tiles/tile021.png) top_left
- ![tile](/public/img/tiles/tile022.png) top_right
- ![tile](/public/img/tiles/tile023.png) (unused)
- ![tile](/public/img/tiles/tile024.png) (unused)
- ![tile](/public/img/tiles/tile025.png) down_left_1
- ![tile](/public/img/tiles/tile026.png) down_right_1
- ![tile](/public/img/tiles/tile027.png) (unused)
- ![tile](/public/img/tiles/tile028.png) (unused)
- ![tile](/public/img/tiles/tile029.png) phoenix
- ![tile](/public/img/tiles/tile030.png) bottom_right
- ![tile](/public/img/tiles/tile031.png) (unused)

:::

### Clickable Links

Multi-column lists with clickble links are relatively unwieldy to write, but can still be done in Markdown.

::: multiColumnList--4
- [![tile](/public/img/chars/char_caster.png)   Caster  ](/caster/)
- [![tile](/public/img/chars/char_duelist.png)  Duelist ](/caster/)
- [![tile](/public/img/chars/char_fisher.png)   Fisher  ](/caster/)
- [![tile](/public/img/chars/char_hero.png)     Hero    ](/caster/)
- [![tile](/public/img/chars/char_prophet.png)  Prophet ](/caster/)
- [![tile](/public/img/chars/char_runner.png)   Runner  ](/caster/)
- [![tile](/public/img/chars/char_scout.png)    Scout   ](/caster/)
- [![tile](/public/img/chars/char_sentinel.png) Sentinel](/caster/)

- [![tile](/public/img/chars/char_caster.png)   Caster   2](/caster/)
- [![tile](/public/img/chars/char_duelist.png)  Duelist  2](/caster/)
- [![tile](/public/img/chars/char_fisher.png)   Fisher   2](/caster/)
- [![tile](/public/img/chars/char_hero.png)     Hero     2](/caster/)
- [![tile](/public/img/chars/char_prophet.png)  Prophet  2](/caster/)
- [![tile](/public/img/chars/char_runner.png)   Runner   2](/caster/)
- [![tile](/public/img/chars/char_scout.png)    Scout    2](/caster/)
- [![tile](/public/img/chars/char_sentinel.png) Sentinel 2](/caster/)

:::
