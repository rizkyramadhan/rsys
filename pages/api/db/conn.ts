const config = require("../../../rsys.config.json");
const db = config.db;
let knex = require("knex");
let check = undefined;

export const conn = (c: string) => {
  const dbconfig = db[c] || db["default"];
  if (check) return check;
  return (check = knex({
    client: dbconfig.driver,
    connection: {
      host: dbconfig.host,
      user: dbconfig.username,
      password: dbconfig.password,
      database: dbconfig.database
    },
    debug: true
  }));
};
