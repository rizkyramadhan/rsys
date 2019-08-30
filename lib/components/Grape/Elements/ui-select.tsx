import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "select";
const ReactEl = observer((props: any) => {
  return (
    <div style={{ textAlign: "center", color: "#9A9A9A", padding: 10 }}>
      <strong>- SELECT -</strong>
      <div>
        db: {props.state.attr.conn && <span>{props.state.attr.conn}</span>}
      </div>
      <div>
        Sql:
        {props.state.attr.columns && (
          <span> SELECT {props.state.attr.columns}</span>
        )}
        {props.state.attr.table && <span> FROM {props.state.attr.table}</span>}
      </div>
    </div>
  );
});

export default defineElement(name, ReactEl);
