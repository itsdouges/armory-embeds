import React from 'react';

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
