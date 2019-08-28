import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "text";
const state = observable({
  attr: {} as any
});
const ReactEl = observer(() => {
  return (
    <>
      {!state.attr.title ? (
        <div
          style={{
            color: "#9a9a9a",
            padding: 5
          }}
        >
          {"<empty>"}
        </div>
      ) : (
        <div>{state.attr.title}</div>
      )}
    </>
  );
});

export default defineElement(name, state, ReactEl);
