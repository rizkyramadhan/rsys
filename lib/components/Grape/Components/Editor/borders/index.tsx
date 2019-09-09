import { observer } from "mobx-react-lite";
import { Label } from "office-ui-fabric-react";
import React from "react";
import Radius from "./radius";
import Borders from "./borders";

export default observer((props: any) => {
  return (
    <div
      className="rsys-attr"
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
        <Label
          className="rsys-at-label"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center"
          }}
        >
          Radius
        </Label>
        <Radius {...props} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 10px 5px"
        }}
      >
        <Label
          className="rsys-at-label"
          style={{
            fontSize: "12px",
            display: "flex"
          }}
        >
          Borders
        </Label>
        <Borders {...props} />
      </div>
    </div>
  );
});
