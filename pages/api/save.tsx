import { conn } from "./conn";

interface IParams {
  conn: string;
  method: string;
  table: string;
  data: any[];
  where?: any;
}

export default (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  const p: IParams = req.body;
  const knex = conn(p.conn);
  knex
    .transaction(function(trx) {
      switch (p.method) {
        case "insert":
          knex(p.table)
            .transacting(trx)
            .insert(p.data)
            .then(function(result) {
              res.end(JSON.stringify({ result: result[0], status: "success" }));
            })
            .then(trx.commit)
            .catch(trx.rollback);
          break;
        case "update":
          knex(p.table)
            .transacting(trx)
            .update(p.data)
            .where(p.where)
            .then(function(result) {
              res.end(JSON.stringify({ result: result[0], status: "success" }));
            })
            .then(trx.commit)
            .catch(trx.rollback);
          break;
        case "delete":
          knex(p.table)
            .transacting(trx)
            .where(p.where)
            .del()
            .then(function(result) {
              res.end(JSON.stringify({ result: result[0], status: "success" }));
            })
            .then(trx.commit)
            .catch(trx.rollback);
          break;
      }
    })
    .catch(function(err) {
      res.end(JSON.stringify({ result: err, status: "error" }));
      console.error(err);
    });
};
