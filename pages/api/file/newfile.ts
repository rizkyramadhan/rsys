import fs from 'fs-extra';
import { absPath, project } from '@lib/project';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const path = req.body.path.replace('./', absPath + '/');
  const sf = project.createSourceFile(
    path,
    `
  import React from "react";
  import { View } from "react-native";
  
  export default () => {
    return (<View/>);
  };
  `
  );
  sf.saveSync();
  project.saveSync();

  res.end(
    JSON.stringify({
      ready: fs.existsSync('./app')
    })
  );
};
