import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "query";
const ReactEl = observer((props: any) => {
  return (
    <div style={{ textAlign: "center", color: "#9A9A9A", padding: 10 }}>
      <strong>{props.state.attr.name}</strong>
      <div>
        db: {props.state.attr.conn && <span>{props.state.attr.conn}</span>}
      </div>
      <div>
        sql:
        {props.state.attr.sql && <span> {props.state.attr.sql}</span>}
      </div>
      {/* <div>
        Params:
        {props.state.attr.params && (
          <span> {JSON.stringify(props.state.attr.params.split(","))}</span>
        )}
      </div> */}
    </div>
  );
});

export default defineElement(name, ReactEl);
