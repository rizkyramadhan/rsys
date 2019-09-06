import jetpack from 'fs-jetpack';
import config from '../../../config';
import project, { loadProject } from '@lib/project';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const name = config.get('app');
  const dir = jetpack.list('./app');

  if (!!name && dir.length > 0) {
    loadProject(name);
  }

  res.end(
    JSON.stringify({
      name,
      ready: !!name && dir.length > 0
    })
  );
};
