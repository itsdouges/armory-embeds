const path = require('path');

function resolve (relativePath) {
  return path.resolve(__dirname, relativePath);
}

module.exports = {
  appBuild: resolve('../dist'),
  appPackageJson: resolve('../package.json'),
  appSrc: resolve('../src'),
  appNodeModules: resolve('../node_modules'),
};
