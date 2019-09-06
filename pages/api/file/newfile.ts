import fs from 'fs-extra';
import project from '@lib/project';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const path = req.query.path.replace(
    './',
    project.absPath + '/' + project.relativePath + '/'
  );
  const sf = project.ts.createSourceFile(
    path,
    `
  import React from "react";
  import { Layout } from "react-native-ui-kit";
  
  export default () => {
    return (<Layout/>);
  };
  `
  );
  sf.saveSync();
  project.ts.saveSync();

  res.end(
    JSON.stringify({
      ready: fs.existsSync('./app')
    })
  );
};
