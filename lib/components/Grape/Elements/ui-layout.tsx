import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "layout";
const slot = { __html: "<slot/>" };
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
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        minHeight: 30,
        padding: 10,
        ...customStyle
      }}
      dangerouslySetInnerHTML={slot}
    />
  );
});

export default defineElement(name, ReactEl);
