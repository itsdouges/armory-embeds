// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import axios from 'axios';
import T from 'i18n-react';
// import { Tooltip } from 'armory-component-ui';
// $FlowFixMe
import '!!style-loader!css-loader!armory-component-ui/styles.css'; // eslint-disable-line

import { addStyleSheet } from './lib/dom';
import styles from './styles.less';
import Store from './Store';

type Options = {
  lang: string,
  showBadge: boolean,
};

export type EmbedProps = {
  className?: string,
  blankText?: string,
  size: ?number,
  inlineText?: string,
};

const makeClassName = (str) => `gw2a-${str}-embed`;
export const makeAttribute = (str: string) => `data-armory-${str}`;

function fetchStyles () {
  return axios.get(`${__webpack_public_path__}embeds-manifest.json`)
    .then((response) => {
      const styleSheetPath = response.data['gw2aEmbeds.css'];
      if (styleSheetPath) {
        addStyleSheet(`${__webpack_public_path__}${styleSheetPath}`);
      }
    });
}

function setOptions () {
  const options: Options = {
    lang: 'en',
    // $FlowFixMe
    ...document.GW2A_EMBED_OPTIONS,
  };

  return options;
}

function bootstrapEmbeds ({ lang }) {
  if (!document.body) {
    throw new Error('Document body not loaded!');
  }

  const embedables = Array.from(document.body.querySelectorAll(`[${makeAttribute('embed')}]`));
  return embedables.map((element) => {
    const embedName = element.getAttribute(makeAttribute('embed'));
    if (!embedName) {
      return undefined;
    }

    // Remove the attribute so if the embed script is added to the document again, it doesn't pick
    // already bootstrapped embeds.
    element.removeAttribute(makeAttribute('embed'));

    return import(`./creators/${embedName}`).then(({ default: createEmbed }) => {
      const rawIds = element.getAttribute(makeAttribute('ids'));
      const blankText = element.getAttribute(makeAttribute('blank-text')) || T.translate('words.optional');
      const ids = (rawIds || '').split(',');
      const size: ?number = parseInt(element.getAttribute(makeAttribute('size')), 10) || undefined;
      const inlineText = element.getAttribute(makeAttribute('inline-text')) || '';

      const Component = createEmbed(element, ids);

      const props: EmbedProps = {
        className: cx(styles.embed, makeClassName(embedName)),
        blankText,
        size,
        inlineText,
      };

      ReactDOM.render(
        <Store lang={lang}>
          <Component {...props} />
        </Store>,
        element
      );
    });
  });
}

let loaded = false;

function bootstrapTooltip ({ lang }) {
  if (loaded) {
    return;
  }

  const tooltipContainer = document.createElement('div');
  if (!document.body) {
    throw new Error('Document body not loaded!');
  }

  document.body.appendChild(tooltipContainer);

  ReactDOM.render(
    <Store lang={lang}>
      <Tooltip showBadge className={cx(styles.tooltip, makeClassName('tooltip'))} />
    </Store>,
    tooltipContainer
  );

  loaded = true;
}

export default function bootstrap () {
  const options = setOptions();

  return Promise.all([
    fetchStyles(),
    bootstrapEmbeds(options),
    bootstrapTooltip(options),
  ]);
}
