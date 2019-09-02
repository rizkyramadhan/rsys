import { observer } from "mobx-react-lite";
import React from "react";
import Color from "../picker/color";
import { observable } from "mobx";

const config = observable({
  isCallout: false,
  key: null,
  pickerRef: null
});
export default observer(({ state, callback }: any) => {
  const colorChange = val => {
    state.value.backgroundColor = val;
    callback(state.value);
  };
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
        <Color
          color={state.value.backgroundColor}
          callback={colorChange}
          config={config}
          keyid="backgroundcolor"
        />
      </div>
    </div>
  );
});
