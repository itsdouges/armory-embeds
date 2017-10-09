// @flow

import type { EmbedProps } from '../../bootstrap';
import React from 'react';
import { Gw2Trait } from 'armory-component-ui';

type Props = EmbedProps & {
  ids: Array<number>,
};

const TraitsEmbed = ({ ids, traits, className, blankText, size, ...props }: Props) => (
  <div className={className}>
    {ids.map((id, index) => (id >= 0 ? (
      <Gw2Trait
        active
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        id={id}
        size={size}
        {...props}
      />
    ) : (
      <Gw2Trait
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        active
        tooltipTextOverride={blankText}
        size={size}
      />
    )))}
  </div>
);

export default TraitsEmbed;
