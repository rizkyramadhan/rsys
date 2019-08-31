import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";
import { fontStyle, mode } from ".";

const name = "button";
const ReactEl = observer(({ state }: any) => {
  const customStyle = {
    ...JSON.parse(state.attr.layoutstyle || "{}")
  };
  return (
    <div
      style={{
        ...defaultStyle,
        backgroundColor: mode.background[state.attr.buttonmode],
        ...customStyle
      }}
    >
      <div
        style={{
          ...defaultLabel,
          ...fontStyle,
          color: mode.text[state.attr.buttonmode],
          ...size[state.attr.buttonsize]
        }}
      >
        {state.attr.textlabel || "Button"}
      </div>
    </div>
  );
});

export default defineElement(name, ReactEl);

const defaultStyle = {
  borderRadius: "4px",
  borderWidth: "2px",
  opacity: 1,
  transitionDuration: "0.25s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px"
};

const defaultLabel = {
  color: "rgb(255, 255, 255)",
  fontWeight: 600,
  display: "inline"
};

const textMode = {
  basic: {
    color: "#2E3752"
  }
};

const size = {
  giant: {
    fontSize: "18px",
    lineHeight: "24px",
    margin: "16px 24px"
  },
  large: {
    fontSize: "16px",
    lineHeight: "20px",
    margin: "14px 22px"
  },
  medium: {
    fontSize: "14px",
    lineHeight: "16px",
    margin: "12px 20px"
  },
  small: {
    fontSize: "12px",
    lineHeight: "14px",
    margin: "10px 18px"
  },
  tiny: {
    fontSize: "10px",
    lineHeight: "10px",
    margin: "8px 16px"
  }
};
