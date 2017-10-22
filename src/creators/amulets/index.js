// @flow

import type { EmbedProps } from '../../bootstrap';

import React from 'react';
import Amulets from '../../components/Amulets';

export default function (element: HTMLElement, ids: Array<number>) {
  return (props: EmbedProps) => <Amulets {...props} ids={ids} />;
}
