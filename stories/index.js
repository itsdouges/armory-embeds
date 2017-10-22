import React from 'react';
import { storiesOf } from '@storybook/react';

const makeLang = (lang, id) => (
  <ArmoryEmbed
    key={lang}
    options={{
      lang,
    }}
    name="specializations"
    data-armory-ids={id}
  />
);

storiesOf('options', module)
.add('english', () => makeLang('en', 53))
.add('french', () => makeLang('fr', 52))
.add('chinese', () => makeLang('zh', 51))
.add('russian', () => makeLang('ru', 50))
.add('spanish', () => makeLang('es', 49))
.add('german', () => makeLang('de', 48));
