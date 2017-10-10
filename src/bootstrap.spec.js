import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';
import { stubComponent, stubStyles } from '../test/utils';

const Store = stubComponent('Store');
const Embed = stubComponent('Embed');
const Tooltip = stubComponent('Tooltip');

const styles = stubStyles([
  'embed',
  'tooltip',
]);

const sandbox = sinon.sandbox.create();
const httpGet = sandbox.stub();
const render = sandbox.spy();
const translate = sandbox.stub();
const addStyleSheet = sandbox.spy();

const createEmbed = sandbox.stub();
const embedName = 'traits';

const bootstrap = proxyquire.noPreserveCache().noCallThru()('./bootstrap', {
  'react-dom': { render },
  'armory-component-ui': { Tooltip, persistToLocalStorage: () => {} },
  '!!style-loader!css-loader!armory-component-ui/styles.css': {},
  axios: { get: httpGet },
  'i18n-react': { translate },
  './lib/dom': { addStyleSheet },
  './Store': Store,
  './styles.less': styles,
  [`./creators/${embedName}`]: { default: createEmbed },
}).default;

describe('embed bootstrapper', () => {
  const manifest = {
    'armory-embeds.css': 'armory-embeds.css',
  };

  before(() => {
    global.__webpack_public_path__ = 'https://npm-package.com/';
  });

  after(() => {
    delete global.__webpack_public_path__;
  });

  beforeEach(() => {
    delete document.GW2A_EMBED_OPTIONS;
    httpGet
      .withArgs(`${global.__webpack_public_path__}embeds-manifest.json`)
      .returns(Promise.resolve({ data: manifest }));
  });

  afterEach(() => sandbox.reset());

  describe('style fetching', () => {
    it('should fetch styles using manifest.json and add it to head', async () => {
      await bootstrap();

      expect(addStyleSheet).to.have.been.calledWith(`${global.__webpack_public_path__}${manifest['armory-embeds.css']}`);
    });
  });

  describe('embeds', () => {
    const ids = ['1', '2', '3'];
    const size = 50;
    const inlineText = 'wiki';
    let element;

    beforeEach(() => {
      element = document.createElement('div');
      element.setAttribute('data-armory-embed', embedName);
      element.setAttribute('data-armory-size', size);
      element.setAttribute('data-armory-inline-text', inlineText);
      element.setAttribute('data-armory-ids', ids.join(','));
      document.body.appendChild(element);
    });

    afterEach(() => {
      document.body.removeChild(element);
    });

    it('should find all embeds in the body and render them', async () => {
      const blank = 'optional man';
      createEmbed.withArgs(element, ids).returns(Embed);
      translate.withArgs('words.optional').returns(blank);

      await bootstrap();

      const [jsx, container] = render.firstCall.args;
      const wrapper = shallow(jsx);

      expect(wrapper.find(Embed).props()).to.eql({
        className: 'embed-style gw2a-traits-embed',
        blankText: blank,
        size,
        inlineText,
      });

      expect(container).to.equal(element);
    });

    context('when blank text is used', () => {
      it('should override text', async () => {
        const textOverride = 'override man';
        element.setAttribute('data-armory-blank-text', textOverride);
        createEmbed.withArgs(element, ids).returns(Embed);

        await bootstrap();

        const [jsx, container] = render.firstCall.args;
        const wrapper = shallow(jsx);

        expect(wrapper.find(Embed).props()).to.include({
          blankText: textOverride,
        });

        expect(container).to.equal(element);
      });
    });
  });
});
