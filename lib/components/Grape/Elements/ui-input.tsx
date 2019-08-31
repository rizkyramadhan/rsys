import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";
import { mode } from ".";

const name = "input";
const ReactEl = observer(({ state }: any) => {
  const customStyle = {
    ...JSON.parse(state.attr.layoutstyle || "{}")
  };
  return (
    <div
      style={{
        ...defaultStyle,
        ...customStyle,
        borderColor: mode.border[state.attr.inputmode]
      }}
    >
      <input
        style={{
          ...defaultInputStyle
        }}
        placeholder={state.attr.inputplaceholder}
        type={state.attr.inputtype}
        value={state.attr.inputvalue}
        disabled={state.attr.inputdisabled}
        readOnly={state.attr.inputreadonly}
      />
    </div>
  );
});

export default defineElement(name, ReactEl);

const defaultStyle = {
  backgroundColor: "rgb(247, 249, 252)",
  borderColor: "rgb(237, 241, 247)",
  borderRadius: "4px",
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px"
};

const defaultInputStyle = {
  color: "rgb(143, 155, 179)",
  fontSize: "15px",
  marginRight: "8px",
  marginLeft: "8px",
  backgroundColor: "rgba(0, 0, 0, 0)",
  borderBottomLeftRadius: "0px",
  borderBottomRightRadius: "0px",
  borderTopLeftRadius: "0px",
  borderTopRightRadius: "0px",
  padding: "12px 8px",
  borderWidth: "0px",
  borderStyle: "solid",
  borderColor: "black",
  borderImage: "initial",
  display: "flex",
  alignItems: "stretch",
  flexGrow: 1
};
