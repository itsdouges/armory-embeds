import proxyquire from 'proxyquire';
import { shallow } from 'enzyme';

const { markup } = proxyquire.noCallThru()('./parse', {
  '../../styles/colours.less': {
    black: 'black',
    abilitytype: 'abilitytype',
  },
});

describe('gw2 markup parser', () => {
  it('should parse text', () => {
    const raw = '<c=@black>Thing.</c> Yeah it is ok.\nBut really, is it?<br>Dunno!';

    const jsx = markup(raw);
    const wrapper = shallow(jsx);

    expect(wrapper.props().dangerouslySetInnerHTML.__html).to.equal(
      '<span class="black">Thing.</span> Yeah it is ok.<br />But really, is it?<br />Dunno!',
    );
  });

  it('should handle i18n', () => {
    const raw = '<c=@black>Méditation.</c> Votre intense concentration vous rend invulnérable et recharge vos vertus.';

    const jsx = markup(raw);
    const wrapper = shallow(jsx);

    expect(wrapper.props().dangerouslySetInnerHTML.__html).to.equal(
      '<span class="black">Méditation.</span> Votre intense concentration vous rend invulnérable et recharge vos vertus.',
    );
  });

  it('should work on other things', () => {
    const raw = 'Gain a boon upon casting a <c=@abilitytype>glyph</c> based on your attunement. <c=@abilitytype>Glyphs</c> gain reduced recharge.';

    const jsx = markup(raw);
    const wrapper = shallow(jsx);

    expect(wrapper.props().dangerouslySetInnerHTML.__html).to.equal(
      'Gain a boon upon casting a <span class="abilitytype">glyph</span> based on your attunement. <span class="abilitytype">Glyphs</span> gain reduced recharge.'
    );
  });

  it('should use original name as class', () => {
    const raw = '<c=@orange>Thing.</c> Yeah it is ok.\nBut really, is it?<br>Dunno!';

    const jsx = markup(raw, true);
    const wrapper = shallow(jsx);

    expect(wrapper.props().dangerouslySetInnerHTML.__html).to.equal(
      '<span class="orange">Thing.</span> Yeah it is ok.<br />But really, is it?<br />Dunno!',
    );
  });
});
