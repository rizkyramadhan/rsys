import { conn } from "./conn";

interface IWhere {
  column: string;
  operator: string;
  value: string | string[];
}

interface IRelation {
  type: string;
  table: string;
  on: Array<string>;
}

interface IParams {
  conn: string;
  table: string;
  columns: string[];
  where?: Array<IWhere | string | Array<IWhere | string>>;
  join?: Array<IRelation>;
  limit?: number;
  offset?: number;
  sorts?: { column: string; order: string }[];
  groups?: string[];
}

export default (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  const p: IParams = req.body;
  const knex = conn(p.conn);
  const where = { cond: "", params: [] };

  if (p.where) {
    p.where.forEach((w: IWhere | string | Array<IWhere | string>) => {
      if (Array.isArray(w)) {
        where.cond += ` (`;
        w.forEach((ww: IWhere | string) => {
          if (typeof ww === "object") {
            where.cond += ` ${ww.column} ${ww.operator} ?`;
            where.params.push(ww.value);
          } else if (typeof ww === "string") {
            where.cond += ` ${ww}`;
          }
        });
      } else if (typeof w === "object") {
        where.cond += ` ${w.column} ${w.operator} ?`;
        where.params.push(w.value);
      } else if (typeof w === "string") {
        where.cond += ` ${w}`;
      }
    });
  }

  let select = knex
    .column(p.columns)
    .select()
    .whereRaw(where.cond, where.params);

  if (p.join) {
    p.join.forEach((r: IRelation) => {
      switch (r.type) {
        case "left":
          select.leftJoin(r.table, r.on[0], r.on[1]);
          break;
        case "leftOuter":
          select.leftOuterJoin(r.table, r.on[0], r.on[1]);
          break;
        case "right":
          select.right(r.table, r.on[0], r.on[1]);
          break;
        case "rightOuter":
          select.rightOuterJoin(r.table, r.on[0], r.on[1]);
          break;
        case "fullOuter":
          select.fullOuterJoin(r.table, r.on[0], r.on[1]);
          break;
        case "cross":
          select.crossJoin(r.table, r.on[0], r.on[1]);
          break;
        default:
          select.join(r.table, r.on[0], r.on[1]);
          break;
      }
    });
  }

  if (p.limit) {
    select.limit(p.limit);
  }

  if (p.offset) {
    select.offset(p.offset);
  }

  if (p.sorts) {
    const orders = [];
    p.sorts.forEach(s => {
      orders.push({
        column: s.column,
        order: s.order
      });
    });
    select.orderBy(orders);
  }

  if (p.groups) {
    select.groupBy(p.groups);
  }

  select
    .from(p.table)
    .then(result => {
      res.end(JSON.stringify({ result: result, status: "success" }));
    })
    .catch(err => {
      res.end(JSON.stringify({ result: err, status: "error" }));
    });
};
