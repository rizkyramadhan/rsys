import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "layout";
const slot = { __html: "<slot/>" };
const ReactEl = observer(({ state }: any) => {
  const customStyle = {
    ...JSON.parse(state.attr.layoutstyle || "{}"),
    backgroundColor: state.attr.layoutbackground
  };
  return (
    <div
      style={{
        minHeight: 30,
        margin: 10,
        ...customStyle
      }}
      dangerouslySetInnerHTML={slot}
    />
  );
});

export default defineElement(name, ReactEl);
