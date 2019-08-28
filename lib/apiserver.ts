import fetch from 'isomorphic-unfetch';
const config = require('../config');

class Api {
  url = `http://${config.get('host')}:${config.get('port')}/api/`;
  async get(url: string, opt?: any) {
    const res = await fetch(this.url + url.replace(/^\/+/g, ''), opt);
    return await res.json();
  }
}

export default new Api();
