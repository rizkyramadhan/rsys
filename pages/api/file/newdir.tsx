import { absPath, project, relativePath } from '@lib/project';
export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const path = req.query.path.replace('./', absPath + '/' + relativePath + '/');
  const sf = project.createDirectory(path);
  if (sf) {
    sf.saveSync();
    project.saveSync();
    res.send(path);
  }
};
