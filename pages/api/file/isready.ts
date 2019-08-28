import fs from 'fs-extra';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  res.end(
    JSON.stringify({
      ready: fs.existsSync('./app')
    })
  );
};
