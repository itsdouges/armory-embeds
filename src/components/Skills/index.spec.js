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
}).default;

describe('<SkillsEmbed />', () => {
  it('should render skill', () => {
    const props = {
      ids: [1],
      size: 30,
    };

    const wrapper = shallow(<SkillsEmbed {...props} />);

    expect(wrapper.find(Gw2Skill).props()).to.include({
      className: styles.skill,
      id: 1,
      size: props.size,
    });
  });

  it('should render empty skill', () => {
    const props = {
      ids: [-1],
      size: 30,
      blankText: 'Hey There',
    };

    const wrapper = shallow(<SkillsEmbed {...props} />);

    expect(wrapper.find(Gw2Skill).props()).to.include({
      size: props.size,
      tooltipTextOverride: props.blankText,
    });
  });
});
