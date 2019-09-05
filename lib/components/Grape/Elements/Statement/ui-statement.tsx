import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "../util";

const name = "statement";
const ReactEl = observer(({ state }: any) => {
  const customStyle: any = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  };

  return (
    <div
      style={{
        minHeight: 30,
        margin: 10,
        ...customStyle
      }}
      dangerouslySetInnerHTML={{
        __html: `<slot style="width:100%;"/>`
      }}
    />
  );
});

export default defineElement(name, ReactEl);
