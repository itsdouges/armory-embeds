import React from 'react';

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
