import React from 'react';
import { storiesOf } from '@storybook/react';
import {persistToLocalStorage } from 'armory-component-ui';

// eslint-disable-next-line
import 'style-loader!css-loader!./styles.css';

import ArmoryEmbed from './ArmoryEmbed';

// Disable local storage so we catch any possible bugs before hitting prod.
persistToLocalStorage(false);

storiesOf('Items', module)
.add('default', () =>
  <ArmoryEmbed
    name="items"
    data-armory-ids="77482"
  />
)
.add('multiple', () =>
  <ArmoryEmbed
    name="items"
    data-armory-ids="77482,85369"
  />
)
.add('inline text', () =>
  <ArmoryEmbed
    name="items"
    data-armory-ids="7139"
    data-armory-inline-text="gw2spidy"
  />
)
.add('blank text', () =>
  <ArmoryEmbed
    name="items"
    data-armory-ids="-1"
    data-armory-blank-text="Any Item For This"
  />
)
.add('custom size', () =>
  <ArmoryEmbed
    name="items"
    data-armory-ids="7139"
    data-armory-inline-text="gw2spidy"
    data-armory-size={25}
  />
)
.add('with skin', () =>
  <ArmoryEmbed
    name="items"
    data-armory-ids="7139"
    data-armory-7139-skin="11"
  />
)
.add('with stat', () =>
  <ArmoryEmbed
    name="items"
    data-armory-ids="77482"
    data-armory-77482-stat="656"
  />
);

storiesOf('Skills', module)
.add('default', () =>
  <ArmoryEmbed
    name="skills"
    data-armory-ids="5507"
  />
)
.add('multiple', () =>
  <ArmoryEmbed
    name="skills"
    data-armory-ids="5507,44278"
  />
)
.add('inline text', () =>
  <ArmoryEmbed
    name="skills"
    data-armory-ids="5507"
    data-armory-inline-text="gw2spidy"
  />
)
.add('blank text', () =>
  <ArmoryEmbed
    name="skills"
    data-armory-ids="-1"
    data-armory-blank-text="Choose Any Skill"
  />
)
.add('custom size', () =>
  <ArmoryEmbed
    name="skills"
    data-armory-ids="5507"
    data-armory-size={40}
  />
);

storiesOf('Amulets', module)
.add('default', () =>
  <ArmoryEmbed
    name="amulets"
    data-armory-ids="14"
  />
)
.add('multiple', () =>
  <ArmoryEmbed
    name="amulets"
    data-armory-ids="14,39"
  />
)
.add('inline text', () =>
  <ArmoryEmbed
    name="amulets"
    data-armory-ids="14"
    data-armory-inline-text="wiki"
  />
)
.add('blank text', () =>
  <ArmoryEmbed
    name="amulets"
    data-armory-ids="-1"
    data-armory-blank-text="Choose Any Amulet"
  />
)
.add('custom size', () =>
  <ArmoryEmbed
    name="amulets"
    data-armory-ids="14"
    data-armory-size={40}
  />
);

storiesOf('Traits', module)
.add('default', () =>
  <ArmoryEmbed
    name="traits"
    data-armory-ids="2168"
  />
)
.add('multiple', () =>
  <ArmoryEmbed
    name="traits"
    data-armory-ids="2168,2181"
  />
)
.add('inline text', () =>
  <ArmoryEmbed
    name="traits"
    data-armory-ids="2181"
    data-armory-inline-text="wiki"
  />
)
.add('blank text', () =>
  <ArmoryEmbed
    name="traits"
    data-armory-ids="-1"
    data-armory-blank-text="Choose Any Trait"
  />
)
.add('custom size', () =>
  <ArmoryEmbed
    name="traits"
    data-armory-ids="2181"
    data-armory-size={40}
  />
);

storiesOf('Specializations', module)
.add('default', () =>
  <ArmoryEmbed
    name="specializations"
    data-armory-ids="56"
  />
)
.add('multiple', () =>
  <ArmoryEmbed
    name="specializations"
    data-armory-ids="56,55"
  />
)
.add('with some traits selected', () =>
  <ArmoryEmbed
    name="specializations"
    data-armory-ids="56"
    data-armory-56-traits="2061"
  />
)
.add('with all traits selected', () =>
  <ArmoryEmbed
    name="specializations"
    data-armory-ids="56"
    data-armory-56-traits="2177,2061,2090"
  />
);

const makeLang = (lang) => (
  <ArmoryEmbed
    key={lang}
    options={{
      lang,
    }}
    name="specializations"
    data-armory-ids="53"
  />
);

storiesOf('configuration', module)
.add('english', () => makeLang('en'))
.add('french', () => makeLang('fr'))
.add('chinese', () => makeLang('zh'))
.add('russian', () => makeLang('ru'))
.add('spanish', () => makeLang('es'))
.add('german', () => makeLang('de'));
