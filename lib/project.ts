import { Project } from 'ts-morph';
import path from 'path';
import config from '../config';

const name = config.get('app');
const RsysProject = {
  absPath: path.join(process.cwd(), `app/${name}`),
  relativePath: 'src',
  ts: null
};
const load = (name?: string) => {
  if (!name) name = config.get('app');

  RsysProject.absPath = path.join(process.cwd(), `app/${name}`);
  RsysProject.ts = new Project({
    tsConfigFilePath: path.join(RsysProject.absPath, 'tsconfig.json')
  });
};

export default RsysProject;
export const loadProject = load;
