import { observer } from "mobx-react-lite";
import React from "react";
import { defineElement } from "./util";
import { fontStyle, mode } from ".";

const name = "text";
const ReactEl = observer(({ state }: any) => {
  const attr = JSON.parse(state.attr._attributes || "{}");
  const customStyle = {
    ...JSON.parse(state.attr._style || "{}")
  };
  const customTextStyle = {
    ...JSON.parse(state.attr.textstyle || "{}"),
    ...(!!attr.mode && attr.mode != "none"
      ? {
          color: mode.text[attr.mode]
        }
      : {
          color: mode.text.dark
        })
  };
  return (
    <>
      {!attr.text ? (
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
            ...customStyle,
            ...customTextStyle,
            ...heading[attr.category]
          }}
        >
          {attr.text}
        </div>
      )}
    </>
  );
});

export default defineElement(name, ReactEl);

const heading = {
  h1: {
    fontSize: "36px",
    fontWeight: 800,
    lineHeight: "48px"
  },
  h2: {
    fontSize: "32px",
    fontWeight: 800,
    lineHeight: "40px"
  },
  h3: {
    fontSize: "30px",
    fontWeight: 800,
    lineHeight: "40px"
  },
  h4: {
    fontSize: "26px",
    fontWeight: 800,
    lineHeight: "32px"
  },
  h5: {
    fontSize: "22px",
    fontWeight: 800,
    lineHeight: "32px"
  },
  h6: {
    fontSize: "18px",
    fontWeight: 800,
    lineHeight: "24px"
  },
  s1: {
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "24px"
  },
  s2: {
    fontSize: "13px",
    fontWeight: 600,
    lineHeight: "24px"
  },
  p1: {
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "20px"
  },
  p2: {
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "16px"
  },
  c1: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "16px"
  },
  c2: {
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "16px"
  },
  label: {
    fontSize: "12px",
    fontWeight: 800,
    lineHeight: "16px"
  }
};
