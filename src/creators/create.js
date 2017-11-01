// @flow

import { props as PropTypes, withComponent } from 'skatejs';
import withReact from '@skatejs/renderer-react';
import React from 'react';
import Store from '../Store';

const createGw2WebComponent = (name: string, propTypes: Object) => (Component: *) => {
  class Gw2WebComponent extends withComponent(withReact()) {
    static props = {
      ...propTypes,
      className: PropTypes.string,
      blankText: PropTypes.string,
      size: PropTypes.number,
      inlineText: PropTypes.string,
    };

    static renderCallback (props) {
      return (
        <Store lang="en">
          <Component {...props} />
        </Store>
      );
    }
  }

  customElements.define(`gw2-${name}`, Gw2WebComponent);
};

export default createGw2WebComponent;
