import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "select";
const ReactEl = observer((state: any) => {
  return (
    <div style={{ textAlign: "center", color: "#9A9A9A", padding: 10 }}>
      <strong>- SELECT -</strong>
      <div>
        db: {state.state.attr.conn && <span>{state.state.attr.conn}</span>}
      </div>
      <div>
        Sql:
        {state.state.attr.columns && (
          <span> SELECT {state.state.attr.columns}</span>
        )}
        {state.state.attr.table && <span> FROM {state.state.attr.table}</span>}
      </div>
    </div>
  );
});

export default defineElement(name, ReactEl);
