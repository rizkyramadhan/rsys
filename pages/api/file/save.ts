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
  let jsx = walk(json);
  let imprt = {};

  return `
  ${jsx}
  `;
};

const walk = (json, isRoot = true) => {
  const result = [];
  $(json).each((idx, item) => {
    if (item.type === 'tag') {
      const tag = cap(item.name.split('-')[0]);
      const attribs = item.attribs;
      console.log(attribs);
      let single = `<${tag}`;

      if (item.children.length > 0) {
        single += `>` + walk(item.children, false) + `</${tag}>`;
      } else {
        single += `/>`;
      }

      result.push(single);
    }
  });

  if (isRoot) {
    if (result.length > 1) {
      return `<>${result.join('\n')}</>`;
    }
  }

  return result.join('\n');
};

const cap = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
