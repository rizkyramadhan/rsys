import { observer } from "mobx-react-lite";
import React from "react";
import Overflow from "./overflow";
import Size from "./size";

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
          Overflow
        </label>
        <Overflow {...props} />
      </div>
      <Size {...props} />
    </div>
  );
});
