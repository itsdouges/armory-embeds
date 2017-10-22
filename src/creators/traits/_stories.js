import React from 'react';

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
