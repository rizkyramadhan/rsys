import { conn } from "./conn";

interface IParams {
  conn: string;
  sql: string;
  params?: any[];
}

export default (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  const p: IParams = req.body;
  const knex = conn(p.conn);
  knex
    .raw(p.sql, p.params)
    .then(result => {
      res.end(JSON.stringify({ result: result[0], status: "success" }));
    })
    .catch(err => {
      res.end(JSON.stringify({ result: err, status: "error" }));
    });
};
