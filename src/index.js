// @flow

const findScriptBaseUrl = () => {
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    if (script.src.includes('armory-embeds.js')) {
      return script.src.replace('armory-embeds.js', '');
    }
  }

  throw new Error('Could not find armory-embeds script.');
};

const init = () => {
  __webpack_public_path__ = findScriptBaseUrl();

  import('./bootstrap').then((module) => module.default());
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  setTimeout(init, 1);
}
