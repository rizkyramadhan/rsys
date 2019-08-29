import { Project } from 'ts-morph';
import path from 'path';
export const absPath = path.join(process.cwd(), 'app');
export const project = new Project({
  tsConfigFilePath: path.join(absPath, 'tsconfig.json')
});
