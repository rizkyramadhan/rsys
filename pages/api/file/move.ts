import project from '@lib/project';
import fs from 'fs';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const from = req.query.old.replace(
    './',
    project.absPath + '/' + project.relativePath + '/'
  );
  const to = req.query.new.replace(
    './',
    project.absPath + '/' + project.relativePath + '/'
  );
  if (fs.lstatSync(from).isDirectory()) {
    const sf = project.ts.getDirectory(from);
    if (sf) {
      sf.moveImmediatelySync(to);
      project.ts.saveSync();
      res.send({ status: 'ok' });
    }
  } else {
    const sf = project.ts.getSourceFile(from);
    if (sf) {
      sf.moveImmediatelySync(to);
      project.ts.saveSync();
      res.send({ status: 'ok' });
    }
  }
};
