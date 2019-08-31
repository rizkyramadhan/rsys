const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = !!process.env.npm_package_scripts_dev;
const app = next({ dev });
const handle = app.getRequestHandler();

const library = require('office-ui-fabric-react/lib-commonjs/Utilities');
const responsiveLib = require('office-ui-fabric-react/lib-commonjs/utilities/decorators/withResponsiveMode');
const icon = require('office-ui-fabric-react/lib/Icons');

icon.initializeIcons();
library.setSSR(true);
library.setRTL(false);
responsiveLib.setResponsiveMode(responsiveLib.ResponsiveMode.large);

console.log(`
Starting
╦═╗╔═╗╦ ╦╔═╗
╠╦╝╚═╗╚╦╝╚═╗
╩╚═╚═╝ ╩ ╚═╝
`);

const config = require('./config');
console.log('Configuration loaded');

fs.access(__dirname, fs.constants.W_OK, function(err) {
  if (err) {
    console.error("ERROR: Can't write to " + __dirname);
    process.exit(1);
  }
});

app.prepare().then(() => {
  createServer((req, res) =>
    handle(req, res, parse(req.url, true).pathname)
  ).listen(config.get('port'), err => {
    if (err) throw err;
    console.log(
      `> Ready on http://${config.get('host')}:${config.get('port')}`
    );
  });
});
