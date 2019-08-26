// next.config.js
const withCSS = require('@zeit/next-css');
const path = require('path');
const withTM = require('next-transpile-modules');

module.exports = withCSS(
  withTM({
    transpileModules: ['office-ui-fabric-react'],
    poweredByHeader: false,
    cssModules: false,
    cssLoaderOptions: {
      url: false
    },
    webpack(config, options) {
      config.resolve.alias['@components'] = path.join(__dirname, 'components');
      return config;
    }
  })
);
