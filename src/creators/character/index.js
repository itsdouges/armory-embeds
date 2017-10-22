// @flow

import type { EmbedProps } from '../../bootstrap';

import React from 'react';
import { CharacterPreview } from 'armory-component-ui';

import { makeAttribute } from '../../bootstrap';

export default function (element: HTMLElement) {
  const name = element.getAttribute(makeAttribute('name')) || '';
  return (props: EmbedProps) => <CharacterPreview {...props} name={name} />;
}
