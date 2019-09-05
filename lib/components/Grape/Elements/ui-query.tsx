import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "query";
const ReactEl = observer((state: any) => {
  return (
    <div style={{ textAlign: "center", color: "#9A9A9A", padding: 10 }}>
      <strong>{state.state.attr.name}</strong>
      <div>
        db: {state.state.attr.conn && <span>{state.state.attr.conn}</span>}
      </div>
      <div>
        sql:
        {state.state.attr.sql && <span> {state.state.attr.sql}</span>}
      </div>
    </div>
  );
});

export default defineElement(name, ReactEl);
