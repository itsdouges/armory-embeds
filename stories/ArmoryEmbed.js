// @flow

import React from 'react';
import Highlight from 'react-highlight';
// $FlowFixMe
import '!!style-loader!css-loader!highlight.js/styles/monokai-sublime.css'; // eslint-disable-line
import bootstrap from '../src/bootstrap';
import { version } from '../package.json';

const generateOptionsMarkup = (options) => {
  const values = Object.keys(options).map((option) => `  ${option}: ${JSON.stringify(options[option])}`).join('\n,');

  return `<script>
document.GW2A_EMBED_OPTIONS = {
${values}
};
</script>

`;
};

export default class ArmoryEmbed extends React.Component<*> {
  props: {
    name: string,
    options: {
      [string]: any,
    },
  };

  componentDidMount () {
    // $FlowFixMe
    document.GW2A_EMBED_OPTIONS = this.props.options;

    bootstrap();
  }

  // eslint-disable-next-line
  shouldComponentUpdate () {
    return false;
  }

  render () {
    const { name, options, ...props } = this.props;

    return (
      <span>
        <div
          data-armory-embed={name}
          {...props}
        />

        <Highlight className="html">
          {`${options ? generateOptionsMarkup(options) : ''}<div
  data-armory-embed="${name}"
${Object.keys(props).map((prop) => `  ${prop}=${JSON.stringify(props[prop])}`).join('\n')}
>
</div>

<script async src="https://unpkg.com/armory-embeds@^${version[0]}.x.x/armory-embeds.js"></script>
`}
        </Highlight>
      </span>
    );
  }
}
