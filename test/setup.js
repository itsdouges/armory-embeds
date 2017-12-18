import 'babel-polyfill';
import path from 'path';
import { addPath } from 'app-module-path';
import noop from 'lodash/noop';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.React = require('react');

require('jsdom-global')();

addPath(path.join(__dirname, '..', ''));
addPath(path.join(__dirname, '..', '/src'));

['css', 'png', 'less'].forEach((extension) => {
  require.extensions[`.${extension}`] = noop;
});

Enzyme.configure({ adapter: new Adapter() });

global.chai = require('chai');
global.sinon = require('sinon');
global.expect = require('chai').expect;
global.AssertionError = require('chai').AssertionError;

global.chai.should();
global.chai.use(require('sinon-chai'));
global.chai.use(require('chai-enzyme')());
global.chai.use(require('chai-as-promised'));
