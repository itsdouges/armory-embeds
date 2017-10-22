// @flow

import type { EmbedProps } from '../bootstrap';

import React from 'react';
import Items from '../components/Items';

const extractAttr = (element, key, ids) => {
  return ids.map((id) => {
    const rawId = element.getAttribute(`data-armory-${id}-${key}`);
    if (!rawId) {
      return {};
    }

    return {
      [id]: rawId.includes(',')
        ? rawId.split(',').map((num) => parseInt(num, 10))
        : parseInt(rawId, 10),
    };
  })
  .reduce((map, next) => Object.assign(map, next), {});
};

export default function (element: HTMLElement, ids: Array<number>) {
  const stats = extractAttr(element, 'stat', ids);
  const skins = extractAttr(element, 'skin', ids);
  const upgrades = extractAttr(element, 'upgrades', ids);
  const infusions = extractAttr(element, 'infusions', ids);

  return (props: EmbedProps) =>
    <Items
      {...props}
      upgradeIds={upgrades}
      infusionIds={infusions}
      ids={ids}
      statIds={stats}
      skinIds={skins}
    />;
}
