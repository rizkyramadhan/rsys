import fs from 'fs-extra';

import $ from 'cheerio';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const p: any = JSON.parse(req.body);
  const json = convert(p.content);

  res.end(
    JSON.stringify({
      json
    })
  );
};

const convert = json => {
  let jsx = ``;
  let imprt = {};
  $(json).each(item => {
    console.log(item);
  });
  return ``;
};
