const convict = require('convict');
const fs = require('fs');
const jetpack = require('fs-jetpack');

const config = convict({
  app: {
    doc: 'Current App Name',
    format: String,
    default: ''
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development'],
    default: 'development',
    env: 'NODE_ENV'
  },
  host: {
    doc: 'The Host IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
    arg: 'port'
  },
  db: {
    doc: 'The DB connection.',
    format: Object,
    default: {
      default: {
        driver: 'mysql',
        host: 'localhost',
        port: 80,
        database: 'rsys',
        username: 'root',
        password: 'okedeh'
      }
    },
    env: 'DB_HOST'
  }
});

// Load environment dependent configuration

// write config file if does not exist, if exist load it
config.save = () => {
  fs.writeFile('./rsys.config.json', config.toString(), {}, function(err) {
    if (err && err.code === 'EEXIST') {
      config.loadFile('./rsys.config.json');
    }
  });
};

if (!jetpack.exists('./rsys.config.json')) {
  config.save();
} else {
  config.loadFile('./rsys.config.json');
}

// Perform validation
config.validate({ allowed: 'strict' });

module.exports = config;
