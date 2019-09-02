import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";
import { fontStyle, mode } from ".";

const name = "text";
const ReactEl = observer(({ state }: any) => {
  const customStyle = {
    ...JSON.parse(state.attr.layoutstyle || "{}")
  };
  const customTextStyle = {
    ...JSON.parse(state.attr.textstyle || "{}"),
    ...(!!state.attr.textmode &&
      state.attr.textmode != "none" && {
        color: mode.text[state.attr.textmode]
      })
  };

  return (
    <>
      {!state.attr.text ? (
        <div
          style={{
            margin: "5px",
            ...fontStyle,
            ...customStyle,
            color: "#9a9a9a"
          }}
        >
          {"<empty>"}
        </div>
      ) : (
        <div
          style={{
            ...fontStyle,
            ...customTextStyle
          }}
        >
          {state.attr.text}
        </div>
      )}
    </>
  );
});

export default defineElement(name, ReactEl);
