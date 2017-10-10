import React from 'react';
import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';
import { stubComponent, stubStyles } from '../../../test/utils';

const styles = stubStyles([
  'skill',
]);

const Gw2Skill = stubComponent('Gw2Skill');

const SkillsEmbed = proxyquire.noPreserveCache().noCallThru()('./', {
  'armory-component-ui': { Gw2Skill },
  './styles.less': styles,
});

describe('<SkillsEmbed />', () => {

});
