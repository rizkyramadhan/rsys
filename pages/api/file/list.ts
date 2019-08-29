import jetpack from 'fs-jetpack';
import { absPath } from '@lib/project';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const tree = jetpack.inspectTree(absPath, {
    relativePath: true
  });

  res.end(JSON.stringify(tree));
};
