import { observer } from "mobx-react-lite";
import React from "react";
import { fontStyle } from ".";
import { defineElement } from "./util";

const name = "component";
const ReactEl = observer(({ state }: any) => {
  const attr = JSON.parse(state.attr._attributes || "{}");
  return (
    <>
      <div
        style={{
          margin: "5px",
          ...fontStyle,
          color: "#9a9a9a"
        }}
      >
        {"<Components>"}
      </div>
    </>
  );
});

export default defineElement(name, ReactEl);
