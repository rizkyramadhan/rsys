import fs from 'fs-extra';
import * as path from 'path';
import execa from 'execa';
import cexists from 'command-exists';

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  if (!fs.existsSync('./app')) {
    fs.removeSync('./templates/app/node_modules');
    fs.copySync('./templates/app', 'app');
  }

  if (!fs.existsSync('./app/node_modules')) {
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
      cwd: './app'
    });
    yarn.stdout.pipe(process.stdout);
    await yarn;

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
