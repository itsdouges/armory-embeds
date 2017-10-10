import proxyquire from 'proxyquire';

const baseUrl = 'https://npm-packages.com/yolo/';
const bootstrap = sinon.spy();

const initialise = () => proxyquire.noPreserveCache().noCallThru()('./', {
  './bootstrap': { default: bootstrap },
});

describe('embed entrypoint', () => {
  let script;

  beforeEach(() => {
    bootstrap.reset();
  });

  before(() => {
    global.__webpack_public_path__ = 'notsetyet';
    script = document.createElement('script');
    script.src = `${baseUrl}armory-embeds.js`;
    global.document.head.appendChild(script);
  });

  after(() => {
    global.document.head.removeChild(script);
  });

  it('should find the script that loaded it and set the public path from it', (done) => {
    initialise();

    setTimeout(() => {
      expect(__webpack_public_path__).to.equal(baseUrl);
      done();
    }, 2);
  });

  it('should bootstrap async', (done) => {
    initialise();

    setTimeout(() => {
      expect(bootstrap).to.have.been.called;
      done();
    }, 2);
  });
});
