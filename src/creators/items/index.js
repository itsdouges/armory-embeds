// @flow

import type { EmbedProps } from '../../bootstrap';

import React from 'react';
import Items from '../../components/Items';

const defaultParser = (num) => parseInt(num, 10);

const extractAttr = (element, key, ids, parserOverrider) => {
  return ids.map((id) => {
    const rawId = element.getAttribute(`data-armory-${id}-${key}`);
    if (!rawId) {
      return {};
    }

    const parser = parserOverrider || defaultParser;

    return {
      [id]: rawId.includes(',')
        ? rawId.split(',').map(parser)
        : parser(rawId),
    };
  })
  .reduce((map, next) => Object.assign(map, next), {});
};

export default function (element: HTMLElement, ids: Array<number>) {
  const stats = extractAttr(element, 'stat', ids);
  const skins = extractAttr(element, 'skin', ids);
  const upgrades = extractAttr(element, 'upgrades', ids);
  const infusions = extractAttr(element, 'infusions', ids);
  const upgradeCounts = extractAttr(element, 'upgrade-count', ids, (str) => JSON.parse(str));

  return (props: EmbedProps) =>
    <Items
      {...props}
      upgradeCounts={upgradeCounts}
      upgradeIds={upgrades}
      infusionIds={infusions}
      ids={ids}
      statIds={stats}
      skinIds={skins}
    />;
}
