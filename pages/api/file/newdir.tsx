import project from '@lib/project';
export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const path = req.query.path.replace('./', project.absPath + '/' + project.relativePath + '/');
  const sf = project.ts.createDirectory(path);
  if (sf) {
    sf.saveSync();
    project.ts.saveSync();
    res.send(path);
  }
};
