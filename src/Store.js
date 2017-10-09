// @flow

import type { Node } from 'react';

import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { reducers } from 'armory-component-ui';

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk),
);

const Store = ({ children }: { children: Node }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default Store;
