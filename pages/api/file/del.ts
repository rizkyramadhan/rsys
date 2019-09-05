import { absPath, project, relativePath } from '@lib/project';
import jetpack from 'fs-jetpack';
import fs from 'fs';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const path = req.query.path.replace('./', absPath + '/' + relativePath + '/');
  if (fs.lstatSync(path).isDirectory()) {
    const sf = project.getDirectory(path);
    if (sf) {
      sf.forget();
      project.save();
      jetpack.remove(path);
      res.send('ok');
    }
  } else {
    const sf = project.getSourceFile(path);
    if (sf) {
      sf.delete();
      project.save();
      res.send('ok');
    }
  }
};
