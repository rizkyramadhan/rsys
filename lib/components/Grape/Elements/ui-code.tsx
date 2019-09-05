import { observer } from "mobx-react-lite";
import React from "react";
import { fontStyle } from ".";
import { defineElement } from "./util";

const name = "code";
const ReactEl = observer(({ state }: any) => {
  const attr = JSON.parse(state.attr._attributes || "{}");
  return (
    <div
      style={{
        margin: "5px",
        ...fontStyle,
        color: "#fff",
        backgroundColor: "#FBAA00"
      }}
    >
      {`<code ${(attr.props || "").slice(0, 30)}>`}
    </div>
  );
});

export default defineElement(name, ReactEl);
