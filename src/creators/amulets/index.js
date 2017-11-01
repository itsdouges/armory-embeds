// @flow

import { props as PropTypes } from 'skatejs';
import React from 'react';
import Async from '../../components/Async';
import create from '../create';

create('amulets', {
  ids: PropTypes.array,
})((props) => (
  <Async
    {...props}
    load={() => import('../../components/Amulets')}
  />
));
