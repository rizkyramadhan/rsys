import fetch from 'isomorphic-unfetch';

class Api {
  url = `/api/`;
  async get(url: string, opt?: any) {
    const res = await fetch(this.url + url.replace(/^\/+/g, ''), opt);
    return await res.json();
  }
  async post(url: string, body?: any) {
    const res = await fetch(this.url + url.replace(/^\/+/g, ''), {
      method: 'POST',
      body: JSON.stringify(body)
    });
    return await res.json();
  }
}

export default new Api();
