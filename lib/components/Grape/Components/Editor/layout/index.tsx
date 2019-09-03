import { observer } from "mobx-react-lite";
import React from "react";
import AlignItems from "./align-items";
import FlexDirection from "./flex-direction";
import JustifyContent from "./justify-content";

export default observer((props: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 10px 5px",
          alignItems: "stretch"
        }}
      >
        <label
          style={{
            width: "25%",
            display: "flex",
            alignItems: "center"
          }}
        >
          Direction
        </label>
        <FlexDirection {...props} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 10px 5px",
          alignItems: "stretch"
        }}
      >
        <label
          style={{
            width: "25%",
            display: "flex",
            alignItems: "center"
          }}
        >
          Align
        </label>
        <AlignItems {...props} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 10px 5px",
          alignItems: "stretch"
        }}
      >
        <label
          style={{
            width: "25%",
            display: "flex",
            alignItems: "center"
          }}
        >
          Justify
        </label>
        <JustifyContent {...props} />
      </div>
    </div>
  );
});
