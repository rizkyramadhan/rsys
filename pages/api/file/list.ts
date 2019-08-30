import jetpack from 'fs-jetpack';
import { absPath } from '@lib/project';
import path from 'path';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const tree = jetpack.inspectTree(path.join(absPath, 'src'), {
    relativePath: true
  }); 

  res.end(JSON.stringify(tree));
};
