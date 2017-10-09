// @flow

import React from 'react';
import _ from 'lodash';

export const stubComponent = (displayName: string) => {
  const component = ({ children }: any) => <div>{children}</div>;
  component.displayName = displayName;
  return component;
};

export const stubStyles = (classnames: Array<string>) => classnames.reduce((obj, name) => ({
  ...obj,
  [name]: `${name}-style`,
}), {});

export const stubDecorator = _.identity;
export const stubDecoratorWithArgs = () => _.identity;

export const stubRedux = ({
  'react-redux': {
    connect: stubDecoratorWithArgs,
  },
});

export const stubI18n = (stub: any) => ({
  'i18n-react': {
    translate: stub,
  },
});
