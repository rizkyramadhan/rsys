import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "select";
const ReactEl = observer((props: any) => {
  return (
    <div style={{ textAlign: "center", color: "#9A9A9A", padding: 10 }}>
      <div>DB: {props.state.attr.db && <span>{props.state.attr.db}</span>}</div>
      <div>
        QUERY:
        {props.state.attr.select && (
          <span> SELECT {props.state.attr.select}</span>
        )}
        {props.state.attr.from && <span> FROM {props.state.attr.from}</span>}
      </div>
    </div>
  );
});

export default defineElement(name, ReactEl);
