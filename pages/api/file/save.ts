import fs from 'fs-extra';
import { parse } from 'node-html-parser';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const p: any = JSON.parse(req.body);
  const json = convert(parse(p.content));

  res.end(
    JSON.stringify({
      json
    })
  );
};

const convert = json => {
  return json;
};
