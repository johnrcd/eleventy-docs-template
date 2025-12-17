---
title: Components
---

Generally, you will want to build your own components to add visual interest to your pages. Markdown is excellent for text content, but is not designed to deal with layouts.

This template has several components that you can use as a reference for your own projects. It is recommended to view this directly on the website, as it shows both the code to create a component and what it looks like when the website is running.

> [!TIP]
> All the style information for these components can be found in `public/css/markdown.css`, if you'd like to make edits to the look and feel of them.


## Card Select

A card select in this context refers to a navigation panel comprised of images. The example below shows an of a card select for a collection of selectable characters in a video game.

::: cardSelect
- [![](/public/img/chars/char_caster.png)  ](/caster/) <p>Caster  </p>
- [![](/public/img/chars/char_duelist.png) ](/caster/) <p>Duelist </p>
- [![](/public/img/chars/char_fisher.png)  ](/caster/) <p>Fisher  </p>
- [![](/public/img/chars/char_hero.png)    ](/caster/) <p>Hero    </p>
- [![](/public/img/chars/char_prophet.png) ](/caster/) <p>Prophet </p>
- [![](/public/img/chars/char_runner.png)  ](/caster/) <p>Runner  </p>
- [![](/public/img/chars/char_scout.png)   ](/caster/) <p>Scout   </p>
- [![](/public/img/chars/char_sentinel.png)](/caster/) <p>Sentinel</p>
:::

```md
::: cardSelect
- [![](/public/img/chars/char_caster.png)  ](/caster/) <p>Caster  </p>
- [![](/public/img/chars/char_duelist.png) ](/caster/) <p>Duelist </p>
- [![](/public/img/chars/char_fisher.png)  ](/caster/) <p>Fisher  </p>
- [![](/public/img/chars/char_hero.png)    ](/caster/) <p>Hero    </p>
- [![](/public/img/chars/char_prophet.png) ](/caster/) <p>Prophet </p>
- [![](/public/img/chars/char_runner.png)  ](/caster/) <p>Runner  </p>
- [![](/public/img/chars/char_scout.png)   ](/caster/) <p>Scout   </p>
- [![](/public/img/chars/char_sentinel.png)](/caster/) <p>Sentinel</p>
:::
```

Each line represents a card. The format is relatively obtuse, but it can be broken down into three parts:

1. The image: `![](/public/img/chars/char_caster.png)`
2. The link: `[content to display](/caster/)`
3. The text: `<p>Caster</p>`

Essentially, links in Markdown can use images as their content (the part that's clickable) instead of text. The content in each link is an image of one of the characters. The text is wrapped in an HTML element for styling.

The default card select layout makes labels optional, but it is recommended to include them to make navigation easier.

All of the card select variations are written with the same structure. This is because I like future me (writing documentation) and hate current me (having to write the worst CSS of all time to make it all fit).

### Overlapping Label

Puts the text overtop.

::: cardSelect--labelOverlap
- [![](/public/img/chars/char_caster.png)  ](/caster/) <p>Caster  </p>
- [![](/public/img/chars/char_duelist.png) ](/caster/) <p>Duelist </p>
- [![](/public/img/chars/char_fisher.png)  ](/caster/) <p>Fisher  </p>
- [![](/public/img/chars/char_hero.png)    ](/caster/) <p>Hero    </p>
- [![](/public/img/chars/char_prophet.png) ](/caster/) <p>Prophet </p>
- [![](/public/img/chars/char_runner.png)  ](/caster/) <p>Runner  </p>
- [![](/public/img/chars/char_scout.png)   ](/caster/) <p>Scout   </p>
- [![](/public/img/chars/char_sentinel.png)](/caster/) <p>Sentinel</p>
:::

```md
::: cardSelect--labelOverlap
- [![](/public/img/chars/char_caster.png)  ](/caster/) <p>Caster  </p>
- [![](/public/img/chars/char_duelist.png) ](/caster/) <p>Duelist </p>
- [![](/public/img/chars/char_fisher.png)  ](/caster/) <p>Fisher  </p>
- [![](/public/img/chars/char_hero.png)    ](/caster/) <p>Hero    </p>
- [![](/public/img/chars/char_prophet.png) ](/caster/) <p>Prophet </p>
- [![](/public/img/chars/char_runner.png)  ](/caster/) <p>Runner  </p>
- [![](/public/img/chars/char_scout.png)   ](/caster/) <p>Scout   </p>
- [![](/public/img/chars/char_sentinel.png)](/caster/) <p>Sentinel</p>
:::
```
### Framed

Puts the label underneath, and gives each card a frame.

::: cardSelect--framed
- [![](/public/img/chars/char_caster.png)  ](/caster/) <p>Caster  </p>
- [![](/public/img/chars/char_duelist.png) ](/caster/) <p>Duelist </p>
- [![](/public/img/chars/char_fisher.png)  ](/caster/) <p>Fisher  </p>
- [![](/public/img/chars/char_hero.png)    ](/caster/) <p>Hero    </p>
- [![](/public/img/chars/char_prophet.png) ](/caster/) <p>Prophet </p>
- [![](/public/img/chars/char_runner.png)  ](/caster/) <p>Runner  </p>
- [![](/public/img/chars/char_scout.png)   ](/caster/) <p>Scout   </p>
- [![](/public/img/chars/char_sentinel.png)](/caster/) <p>Sentinel</p>
:::

```md
::: cardSelect--framed
- [![](/public/img/chars/char_caster.png)  ](/caster/) <p>Caster  </p>
- [![](/public/img/chars/char_duelist.png) ](/caster/) <p>Duelist </p>
- [![](/public/img/chars/char_fisher.png)  ](/caster/) <p>Fisher  </p>
- [![](/public/img/chars/char_hero.png)    ](/caster/) <p>Hero    </p>
- [![](/public/img/chars/char_prophet.png) ](/caster/) <p>Prophet </p>
- [![](/public/img/chars/char_runner.png)  ](/caster/) <p>Runner  </p>
- [![](/public/img/chars/char_scout.png)   ](/caster/) <p>Scout   </p>
- [![](/public/img/chars/char_sentinel.png)](/caster/) <p>Sentinel</p>
:::
```

### Examples

The main use case of ca

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

```md
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
```

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

```md
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
```

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

```md
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
```

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

```md
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
```

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

```md
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
```

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

Multi-column lists with clickable links are relatively unwieldy to write, but can still be done in Markdown.

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

```md
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
```
