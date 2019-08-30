import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "button";
const ReactEl = observer(({ state }: any) => {
  const customStyle = {
    marginTop: state.attr.layoutmargintop,
    marginBottom: state.attr.layoutmarginbottom,
    marginLeft: state.attr.layoutmarginleft,
    marginRight: state.attr.layoutmarginright,
    paddingTop: state.attr.layoutpaddingtop,
    paddingBottom: state.attr.layoutpaddingbottom,
    paddingLeft: state.attr.layoutpaddingleft,
    paddingRight: state.attr.layoutpaddingright
  };
  return (
    <div
      style={{
        ...defaultStyle,
        ...customStyle
      }}
    >
      <div
        style={{
          ...defaultLabel
        }}
      >
        {state.attr.label || "<empty>"}
      </div>
    </div>
  );
});

export default defineElement(name, ReactEl);

const defaultStyle = {
  backgroundColor: "rgb(51, 102, 255)",
  borderColor: "rgb(51, 102, 255)",
  borderRadius: "4px",
  borderWidth: "2px",
  minHeight: "40px",
  minWidth: "40px",
  padding: "12px 10px",
  opacity: 1,
  transitionDuration: "0.25s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const defaultLabel = {
  color: "rgb(255, 255, 255)",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "16px",
  marginRight: "10px",
  marginLeft: "10px"
};
