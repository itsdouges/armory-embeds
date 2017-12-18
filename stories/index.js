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
.add('lang/english', () => makeLang('en', 53))
.add('lang/french', () => makeLang('fr', 52))
.add('lang/chinese', () => makeLang('zh', 51))
.add('lang/russian', () => makeLang('ru', 50))
.add('lang/spanish', () => makeLang('es', 49))
.add('lang/german', () => makeLang('de', 48))
.add('forceCacheClearOnNextRun()', () => (
  <ArmoryEmbed
    options={{
      forceCacheClearOnNextRun: '1',
    }}
    name="specializations"
    data-armory-ids={52}
  />
));
