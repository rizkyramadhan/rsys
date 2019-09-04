import { observer } from "mobx-react-lite";
import React from "react";
import Overflow from "./overflow";
import Size from "./size";
import { Label } from 'office-ui-fabric-react';

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
        <Label
          style={{
            width: "25%",
            fontSize: '12px',
            marginRight: 10,
            display: "flex",
            alignItems: "center"
          }}
        >
          Overflow
        </Label>
        <Overflow {...props} />
      </div>
      <Size {...props} />
    </div>
  );
});
