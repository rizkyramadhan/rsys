const config = require("../../config.js");
const db = config._instance.db;
let knex = require("knex");
let check = undefined;

export const conn = (c: string) => {
  const db_host = db[c] || db["default"];
  if (check) return check;
  return (check = knex({
    client: db_host.driver,
    connection: {
      host: db_host.host,
      user: db_host.username,
      password: db_host.password,
      database: db_host.database
    },
    debug: true
  }));
};
