// @flow

import React from 'react';
import { Gw2Specialization } from 'armory-component-ui';

type Props = {
  specs: Array<{
    id: number,
    traits?: Array<number>,
  }>,
  className?: string,
};

const SpecializationsEmbed = ({ specs, className }: Props) => (
  <div className={className}>
    {specs.map((spec) => (
      <Gw2Specialization
        key={spec.id}
        id={spec.id}
        activeTraits={spec.traits}
      />
    ))}
  </div>
);

export default SpecializationsEmbed;
