// @flow

import React from 'react';
import bootstrap from '../src/bootstrap';

export default class ArmoryEmbed extends React.Component<*> {
  props: {
    name: string,
  };

  componentDidMount () {
    bootstrap();
  }

  // eslint-disable-next-line
  shouldComponentUpdate () {
    return false;
  }

  render () {
    const { name, ...props } = this.props;
    return (
      <div
        data-armory-embed={name}
        {...props}
      />
    );
  }
}
