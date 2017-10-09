// @flow

import React from 'react';
import Highlight from 'react-highlight';
import '!!style-loader!css-loader!highlight.js/styles/monokai-sublime.css';
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
      <span>
        <div
          data-armory-embed={name}
          {...props}
        />

        <Highlight className="html">
          {`<div
  data-armory-embed="${name}"
${Object.keys(props).map((prop) => `  ${prop}="${props[prop]}"`).join('\n')}
>
</div>
<script async src="https://gw2armory.com/gw2aEmbeds.js"></script>
`}
        </Highlight>
      </span>
    );
  }
}
