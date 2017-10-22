import React from 'react';

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
)
.add('with upgrades', () =>
  <ArmoryEmbed
    name="items"
    data-armory-ids="1379"
    data-armory-1379-upgrades="24615,24815"
    data-armory-1379-upgrade-count={'{"24815": 3}'}
  />
)
.add('with infusions', () =>
  <ArmoryEmbed
    name="items"
    data-armory-ids="1379"
    data-armory-1379-infusions="49426,49426"
  />
);
