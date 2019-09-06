import fs from 'fs-extra';
import prettier from 'prettier';
import $ from 'cheerio';
import { mapimport } from './mapimport';
import project from '@lib/project';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const p: any = JSON.parse(req.body);
  const json = convert(p.content);
  let path = p.path;
  if (path.indexOf('./') === 0) {
    path = path.substr(2);
  }
  const sf = project.ts.getSourceFile(path);
  sf.removeText();
  sf.insertText(0, json);
  sf.saveSync();
  project.ts.saveSync();

  res.end(
    JSON.stringify({
      status: 'ok'
    })
  );
};

const convert = json => {
  const imprt = {};
  let jsx = walk(json, imprt);

  const script = `
import React from 'react';
${Object.keys(imprt).map(key => {
  let named = '';
  let n = '';
  let deflt = imprt[key].default;
  if (imprt[key].named) {
    named = `{ ${imprt[key].named.join(',')} }`;
  }

  if (named && deflt) {
    n = ',';
  }

  return `import ${deflt} ${n} ${named} from '${key}'\n`;
})}

export default () => {
  return ${jsx || 'null'}
}`;

  return prettier.format(script, { parser: 'typescript' });
};
const formatKey = (key: string) => {
  if (key.indexOf('_') === 0) return key.substr(1);
  return key;
};

const walk = (json, imprt, isRoot = true) => {
  const result = [];
  $(json).each((idx, item) => {
    if (item.type === 'tag') {
      const tag = cap(item.name.split('-')[0]);
      const atkeys = Object.keys(item.attribs || {});
      let single = `<${tag} ${
        atkeys.length > 0
          ? atkeys
              .map(key => {
                if (
                  key === 'class' &&
                  typeof item.attribs[key] === 'string' &&
                  item.attribs[key][0] === 'c'
                ) {
                  return '';
                }
                return `${formatKey(key)}={${JSON.stringify(
                  item.attribs[key]
                )}}`;
              })
              .join(' ')
          : ''
      }`;

      if (!!mapimport[tag]) {
        if (!imprt[mapimport[tag].from]) {
          imprt[mapimport[tag].from] = {
            named: [],
            default: ''
          };
        }
        if (
          mapimport[tag].type === 'named' &&
          imprt[mapimport[tag].from].named.indexOf(tag) < 0
        ) {
          imprt[mapimport[tag].from].named.push(tag);
        } else if (mapimport[tag].type === 'default') {
          imprt[mapimport[tag].from].default = tag;
        }
      }

      if (item.children.length > 0) {
        single += `>` + walk(item.children, imprt, false) + `</${tag}>`;
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
