import React from 'react';
import { storiesOf } from '@storybook/react';

// eslint-disable-next-line
import 'style-loader!css-loader!./styles.css';

import ArmoryEmbed from './ArmoryEmbed';

storiesOf('Items', module)
.add('default', () =>
  <ArmoryEmbed
    name="items"
    data-armory-ids="77482"
  />
);

storiesOf('Skills', module)
.add('default', () =>
  <ArmoryEmbed
    name="skills"
    data-armory-ids="5507"
  />
);

storiesOf('Specializations', module)
.add('default', () =>
  <ArmoryEmbed
    name="specializations"
    data-armory-ids="3"
    data-armory-3-traits="1761,1774,1749"
  />
);

storiesOf('Traits', module)
.add('default', () =>
  <ArmoryEmbed
    name="traits"
    data-armory-ids="820"
  />
);

storiesOf('Amulets', module)
.add('default', () =>
  <ArmoryEmbed
    name="amulets"
    data-armory-ids="14"
  />
);
