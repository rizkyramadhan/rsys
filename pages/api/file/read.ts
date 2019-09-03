import { project } from '@lib/project';
import { mDefault } from '@lib/parser/utility';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  if (!req.query.path) {
    res.end('');
    return;
  }

  let p = req.query.path;
  if (p.indexOf('./') === 0) {
    p = p.substr(2);
  }
  const sf = project.getSourceFile(p);
  res.end(JSON.stringify(mDefault(sf)));
};
