import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";
import { fontStyle, mode } from ".";

const name = "code";
const ReactEl = observer(({ state }: any) => {
  return (
    <div
      style={{
        margin: "5px",
        ...fontStyle,
        color: "#fff",
        backgroundColor: "#FBAA00"
      }}
    >
      {"<code>"}
    </div>
  );
});

export default defineElement(name, ReactEl);
