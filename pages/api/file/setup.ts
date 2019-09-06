import fs from 'fs-extra';
import * as path from 'path';
import execa from 'execa';
import cexists from 'command-exists';
import config from '../../../config';
import { loadProject } from '@lib/project';

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const name = req.query.name;
  if (!fs.existsSync(`./app/${name}`)) {
    fs.removeSync('./templates/app/node_modules');
    fs.mkdirSync(`app/${name}`);
    fs.copySync('./templates/app', `app/${name}`);
  }

  if (!fs.existsSync(`./app/${name}/node_modules`)) {
    if (!(await cexists('yarn'))) {
      res.end(
        JSON.stringify({
          success: false,
          reason: `yarn is not installed, please install NodeJS and yarn first.`
        })
      );
      return;
    }

    const yarn = execa('yarn', {
      cwd: `./app/${name}`
    });
    yarn.stdout.pipe(process.stdout);
    await yarn;

    config.set('app', name);
    config.save();
    loadProject(name);

    res.end(
      JSON.stringify({
        success: true
      })
    );
    return;
  }

  res.end(
    JSON.stringify({
      success: false,
      reason: `Directory ${path.join(process.cwd(), 'app')} already exists`
    })
  );
};
