import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";

const name = "text";
const ReactEl = observer(({ state }: any) => {
  const customStyle = {
    color: state.attr.color || "#313742",
    fontWeight: state.attr.weight,
    fontSize: state.attr.textsize,
    lineHeight: state.attr.textheight,
    textAlign: state.attr.textalign,

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
    <>
      {!state.attr.text ? (
        <div
          style={{
            ...defaultStyle,
            ...customStyle,
            color: "#9a9a9a"
          }}
        >
          {"<empty>"}
        </div>
      ) : (
        <div
          style={{
            ...defaultStyle,
            ...customStyle
          }}
        >
          {state.attr.text}
        </div>
      )}
    </>
  );
});

export default defineElement(name, ReactEl);

const defaultStyle = {
  fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif`
};
