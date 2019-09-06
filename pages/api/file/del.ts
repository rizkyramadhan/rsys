import project from '@lib/project';
import jetpack from 'fs-jetpack';
import fs from 'fs';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const path = req.query.path.replace(
    './',
    project.absPath + '/' + project.relativePath + '/'
  );
  if (fs.lstatSync(path).isDirectory()) {
    const sf = project.ts.getDirectory(path);
    if (sf) {
      sf.forget();
      project.ts.save();
      jetpack.remove(path);
      res.send('ok');
    }
  } else {
    const sf = project.ts.getSourceFile(path);
    if (sf) {
      sf.delete();
      project.ts.save();
      res.send('ok');
    }
  }
};
