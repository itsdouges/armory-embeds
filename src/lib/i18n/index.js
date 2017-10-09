// @flow

import T from 'i18n-react';

const DEFAULT_LANGUAGE = 'en';

let language;

export function set (lang: string) {
  language = lang;
  T.setTexts(require(`./texts/${lang}.json`));
}

export function get (): string {
  if (!language || language === 'undefined' || language === 'null') {
    T.setTexts(require(`./texts/${DEFAULT_LANGUAGE}.json`));
    return DEFAULT_LANGUAGE;
  }

  return language;
}
