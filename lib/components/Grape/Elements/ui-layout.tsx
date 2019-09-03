import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "layout";
const ReactEl = observer(({ state }: any) => {
  const customStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    ...JSON.parse(state.attr._style || "{}")
  };
  const styleString = Object.entries(customStyle).reduce(
    (styleString, [propName, propValue]) => {
      propName = propName.replace(
        /([A-Z])/g,
        matches => `-${matches[0].toLowerCase()}`
      );
      return !!propValue
        ? `${styleString}${propName}:${propValue};`
        : `${styleString}`;
    },
    ""
  );
  return (
    <div
      style={{
        minHeight: 30,
        margin: 10,
        ...customStyle
      }}
      dangerouslySetInnerHTML={{
        __html: `<slot style="width:100%;${styleString}"/>`
      }}
    />
  );
});

export default defineElement(name, ReactEl);
