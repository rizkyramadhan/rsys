const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const jetpack = require('fs-jetpack');
const dev = !!process.env.npm_package_scripts_dev;
const app = next({ dev });
const handle = app.getRequestHandler();

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

if (jetpack.exists(`./app/node_modules`)) {
  console.log('Cleaning...');
  jetpack.remove(`./app`);
  fs.mkdirSync('./app');
}

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
