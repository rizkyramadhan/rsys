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
    color: state.attr.textcolor,
    fontWeight: state.attr.textweight,
    fontSize: state.attr.textsize,
    lineHeight: state.attr.textheight,
    textAlign: state.attr.textalign
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
            ...customTextStyle,
            ...mode.text[state.attr.textmode]
          }}
        >
          {state.attr.text}
        </div>
      )}
    </>
  );
});

export default defineElement(name, ReactEl);
