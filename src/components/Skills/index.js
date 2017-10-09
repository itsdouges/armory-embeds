// @flow

import type { EmbedProps } from '../../bootstrap';

import React from 'react';
import { Gw2Skill } from 'armory-component-ui';

import styles from './styles.less';

type Props = EmbedProps & {
  ids: Array<number>,
};

const SkillsEmbed = ({ ids, skills, className, blankText, size, ...props }: Props) => (
  <div className={className}>
    {ids.map((id, index) => (id >= 0 ? (
      <Gw2Skill
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        className={styles.skill}
        id={id}
        size={size}
        {...props}
      />
    ) : (
      <Gw2Skill
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        tooltipTextOverride={blankText}
        size={size}
      />
    )))}
  </div>
);

export default SkillsEmbed;
