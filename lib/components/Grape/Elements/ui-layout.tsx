import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "layout";
const state = observable({
  attr: {} as any
});
const slot = { __html: "<slot/>" };
const ReactEl = observer(() => {
  return (
    <div
      style={{
        border: "1px dashed #9a9a9a",
        minHeight: 30,
        margin: 5,
        padding: 10
      }}
      dangerouslySetInnerHTML={slot}
    />
  );
});

export default defineElement(name, state, ReactEl);
