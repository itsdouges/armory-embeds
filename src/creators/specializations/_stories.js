import React from 'react';

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
