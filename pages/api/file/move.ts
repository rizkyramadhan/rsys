import { absPath, project, relativePath } from '@lib/project';
import fs from 'fs';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const from = req.query.old.replace('./', absPath + '/' + relativePath + '/');
  const to = req.query.new.replace('./', absPath + '/' + relativePath + '/');
  if (fs.lstatSync(from).isDirectory()) {
    const sf = project.getDirectory(from);
    if (sf) {
      sf.moveImmediatelySync(to);
      project.saveSync();
      res.send({ status: 'ok' });
    }
  } else {
    const sf = project.getSourceFile(from);
    if (sf) {
      sf.moveImmediatelySync(to);
      project.saveSync();
      res.send({ status: 'ok' });
    }
  }
};
