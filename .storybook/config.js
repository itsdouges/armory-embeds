import React from 'react';
import { configure, storiesOf } from '@storybook/react';
import { persistToLocalStorage } from 'armory-component-ui';
import ArmoryEmbed from '../stories/ArmoryEmbed';

// eslint-disable-next-line
import 'style-loader!css-loader!../stories/styles.css';

global.ArmoryEmbed = ArmoryEmbed;
global.storiesOf = storiesOf;

persistToLocalStorage(false);

const req = require.context('../src', true, /_stories\.js$/);

function loadStories() {
  req.keys().forEach(req);
  require('../stories');
}

configure(loadStories, module);
