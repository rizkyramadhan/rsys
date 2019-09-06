import project, { loadProject } from '@lib/project';
import { mDefault } from '@lib/parser/utility';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  if (!req.query.path) {
    res.end('');
    return;
  }

  if (project.ts === null) {
    loadProject();
  }

  let p = req.query.path;
  if (p.indexOf('./') === 0) {
    p = p.substr(2);
  }
  const sf = project.ts.getSourceFile(p);
  res.end(JSON.stringify(mDefault(sf)));
};
