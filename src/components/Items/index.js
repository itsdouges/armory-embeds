// @flow

import type { EmbedProps } from '../../bootstrap';

import React from 'react';
import { Gw2Item } from 'armory-component-ui';

import styles from './styles.less';

type Props = {
  ids: Array<number>,
  mode?: 'rune' | 'item',
  statIds: { [key: number]: number },
  skinIds: { [key: number]: number },
} & EmbedProps;

const ItemsEmbed = ({
  ids,
  statIds,
  items,
  itemStats,
  className,
  mode,
  blankText,
  size,
  skins,
  skinIds,
  ...props
}: Props) => (
  <div className={className}>
    {ids.map((id, index) => (id >= 0 ? (
      <Gw2Item
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        id={id}
        statsId={statIds[id]}
        skinId={skinIds[id]}
        name={mode === 'rune' ? 'Rune' : undefined}
        tooltipType={mode === 'rune' ? 'amulets' : undefined}
        size={size}
        className={styles.item}
        {...props}
      />
    ) : (
      <Gw2Item
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        tooltipTextOverride={blankText}
        size={size}
      />
    )))}
  </div>
);

export default ItemsEmbed;
