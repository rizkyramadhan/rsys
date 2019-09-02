import { observer } from "mobx-react-lite";
import React from "react";
import Color from "./color";

export default observer(({ state, callback }: any) => {
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
          Color
        </label>
        <Color state={state} callback={callback} />
      </div>
    </div>
  );
});
