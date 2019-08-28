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
      if (!options.isServer) {
        config.node = {
          fs: 'empty',
          convict: 'empty'
        };
      }
      config.resolve.alias['@lib'] = path.join(__dirname, 'lib');
      return config;
    }
  })
);
