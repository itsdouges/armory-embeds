# [armory-embeds](https://github.com/madou/armory-embeds)

[![NPM version](http://img.shields.io/npm/v/armory-embeds.svg?style=flat-square)](https://www.npmjs.com/package/armory-embeds)
[![NPM downloads](http://img.shields.io/npm/dm/armory-embeds.svg?style=flat-square)](https://www.npmjs.com/package/armory-embeds)
[![Build Status](http://img.shields.io/travis/madou/armory-embeds/master.svg?style=flat-square)](https://travis-ci.org/madou/armory-embeds)
[![codecov](https://codecov.io/gh/madou/armory-embeds/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/armory-embeds)
[![Dependency Status](http://img.shields.io/david/madou/armory-embeds.svg?style=flat-square)](https://david-dm.org/madou/armory-embeds)

Guild Wars 2 Armory is arming the GW2 community with powered up embeds for items, skills, and more. Currently serving over 6 million requests a month and growing!

Want something more low level? Want to integrate directly with your React/preact app instead of this high level abstraction? Check out the [`armory-ui-components`](https://github.com/madou/armory-component-ui) library.

## Usage

First add the embeds to your html:

```html
<body>
  <div data-armory-embed="skills" data-armory-ids="5507,5508,5510,5515"></div>
</body>
```

Then add the embed script after them:

```html
<script async src="https://gw2armory.com/armory-embeds.js"></script>
```

When the document has fully loaded the embeds will then be loaded.

## Supplementary Libraries

- [armory-embeds-chat-codes](https://github.com/madou/armory-embeds-chat-code) - parses an ingame chat code to armory embed markup.

## Configuration

### Global Settings

Entirely optional.

Create an object on the document object named `GW2A_EMBED_OPTIONS`. See below for an example.
Make sure the assign this config _before_ declaring the `gw2a` script.

| prop | type | required | description |
|-|-|-|-|
| lang | string | no | The language the embeds will be loaded in. Supported values are: en, fr, de, es, zh, ru |

```javascript
document.GW2A_EMBED_OPTIONS = {
  lang: 'en',
};
```

### Styles

Each embed has a class that you can target, each class follows the pattern `.gw2a-{EMBED_NAME}-embed`.

```css
.gw2a-character-embed {}
.gw2a-skills-embed {}
.gw2a-items-embed {}
.gw2a-amulets-embed {}
.gw2a-traits-embed {}
.gw2a-specializations-embed {}
```

## Embeds

### [Skills](https://madou.github.io/armory-embeds/?selectedKind=Skills)

<img src="https://user-images.githubusercontent.com/6801309/30039214-7078b6c4-9211-11e7-8d93-b93f870fc032.png" width="400" />

```html
<div
  data-armory-embed="skills"
  data-armory-ids="5507,5508,5510,5515">
</div>

<div
  data-armory-embed="skills"
  data-armory-ids="5508,332211,5510,-1"
  data-armory-size="40"
  data-armory-blank-text="This can be replaced with any text!"
>
</div>
```

| attribute | value | required | description |
|-|-|-|-|
| data-armory-embed | skills | yes | |
| data-armory-ids | numbers delimited by commas | yes | The skill ids you want to load. If you pass `-1` you will load an empty box instead of the skill. |
| data-armory-size | number | no | The size of each skill in the embed. |
| data-armory-blank-text | string | no | When loading an skill of id `-1` you can override the tooltip text to be whatever you want. |
| data-armory-inline-text | string | no | Optional inline text that will be displayed to the right of the icon. You can pass in `wiki` to use a gw2 wiki URL, or pass in any other text that will be used as the link. |

### [Items](https://madou.github.io/armory-embeds/?selectedKind=Items)

<img src="https://user-images.githubusercontent.com/6801309/30039226-84ce7dc0-9211-11e7-9df7-693fb8921300.png" width="400" />

```html
<div
  data-armory-embed="items"
  data-armory-blank-text="Some other text can go here!"
  data-armory-size="60"
  data-armory-ids="24836,-1,74412,46774,39620"
>
</div>

<div
  data-armory-embed="items"
  data-armory-ids="77482"
  data-armory-77482-stat="656"
>
</div>
```

| attribute | value | required | description |
|-|-|-|-|
| data-armory-embed | items | yes | |
| data-armory-ids | numbers delimited by commas | yes | The item ids you want to load. If you pass `-1` you will load an empty box instead of the item. |
| data-armory-size | number | no | The size of each item in the embed. |
| data-armory-blank-text | string | no | When loading an item of id `-1` you can override the tooltip text to be whatever you want. |
| data-armory-{ITEM_ID}-stat | number | no | Loads the item with the stat of choice. |
| data-armory-{ITEM_ID}-skin | number | no | Loads the item with the skin of choice. |
| data-armory-inline-text | string | no | Optional inline text that will be displayed to the right of the icon. You can pass in `wiki` to use a gw2 wiki URL, `gw2spidy` to use a gw2spidy URL, or pass in any other text that will be used as the link. |

### [Specializations](https://madou.github.io/armory-embeds/?selectedKind=Specializations)

<img src="https://user-images.githubusercontent.com/6801309/30039237-9ba20c1a-9211-11e7-8e57-8b2efffe5304.png" width="400" />

```html
<div
  data-armory-embed="specializations"
  data-armory-ids="3,332211"
  data-armory-3-traits="1761,1774,1749"
>
</div>
```

| attribute | value | required | description |
|-|-|-|-|
| data-armory-embed | specializations | yes | |
| data-armory-ids | numbers delimited by commas | yes | The specialization ids you want to load. |
| data-armory-{SPEC_ID}-traits | numbers delimited by commas | no | Traits you want to select for the specialization. Entirely optional, you can select any combination. |

### [Traits](https://gw2armory.com/embeds#traits)

<img src="https://user-images.githubusercontent.com/6801309/30039240-abca384c-9211-11e7-8f04-f90127747c8b.png" width="400" />

```html
<div
  data-armory-embed="traits"
  data-armory-ids="820,-1,1694"
  data-armory-blank-text="This could be anything you want!"
>
</div>
```

| attribute | value | required | description |
|-|-|-|-|
| data-armory-embed | traits | yes | |
| data-armory-ids | numbers delimited by commas | yes | The trait ids you want to load. If you pass `-1` you will load an empty box instead of the trait. |
| data-armory-size | number | no | The size of each trait in the embed. |
| data-armory-blank-text | string | no | When loading an trait of id `-1` you can override the tooltip text to be whatever you want. |
| data-armory-inline-text | string | no | Optional inline text that will be displayed to the right of the icon. You can pass in `wiki` to use a gw2 wiki URL, or pass in any other text that will be used as the link. |

### [Amulets](https://madou.github.io/armory-embeds/?selectedKind=Amulets)

<img src="https://user-images.githubusercontent.com/6801309/30039246-bb506ffc-9211-11e7-981e-1fa5d62342a7.png" width="400" />

```html
<div
  data-armory-embed="amulets"
  data-armory-ids="332211,-1"
  data-armory-size="30"
  data-armory-blank-text="This is a blank space!"
>
</div>

```

| attribute | value | required | description |
|-|-|-|-|
| data-armory-embed | amulets | yes | |
| data-armory-ids | numbers delimited by commas | yes | The amulet ids you want to load. If you pass `-1` you will load an empty box instead of the amulet. |
| data-armory-size | number | no | The size of each amulet in the embed. |
| data-armory-blank-text | string | no | When loading an amulet of id `-1` you can override the tooltip text to be whatever you want. |
| data-armory-inline-text | string | no | Optional inline text that will be displayed to the right of the icon. You can pass in `wiki` to use a gw2 wiki URL, or pass in any other text that will be used as the link. |


## Finding IDs

Unfortunately you can't pass the embeds the item/skill etc names. You have to pass the specific ids.

### Item IDs

Item IDs are easy enough, go look at https://www.gw2spidy.com.

### Skill/Trait/Specialization IDs

Best bet is to look at the GW2 Wiki, for example: https://wiki.guildwars2.com/wiki/Virtue_of_Justice.

## Who Is Using armory-embeds?

- [MetaBattle](https://metabattle.com)
- [Quantify](https://qtfy.eu)
- [Le Bus Magique](http://www.lebusmagique.fr)
- [mists.co](http://mists.co)
- [Lucky Noobs](https://lucky-noobs.com)
- [Discretize](http://discretize.eu)
- [Abaddons Maul](https://abaddons-maul.de)
- [Chains of the Kraken](https://ctk.enjin.com)
- [Snow Crows](http://snowcrows.com)
- [SPF Gaming](http://spf-gaming.de/)

[Don't see your site? Add it in a Pull Request!](https://github.com/madou/armory-react/pulls)

## Troubleshooting

Hit [@itsmadou](https://twitter.com/itsmadou) up on twitter, or [post an issue](https://github.com/madou/armory-react/issues) if you think something is a bug.

## Local Development

### Getting started

```sh
git clone git@github.com:madou/armory-embeds.git
cd armory-embeds
yarn install
npm run tdd # Run tests in watch mode
npm start # Run react storybook for local development
```
