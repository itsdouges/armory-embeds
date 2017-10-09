// @flow

import type { EmbedProps } from '../bootstrap';

import React from 'react';
import Traits from '../components/Traits';

export default function (element: HTMLElement, ids: Array<number>) {
  return (props: EmbedProps) => <Traits {...props} ids={ids} />;
}
