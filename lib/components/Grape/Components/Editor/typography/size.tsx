import { observer } from "mobx-react-lite";
import { TextField } from "office-ui-fabric-react";
import React from "react";

export default observer(({ state, callback }: any) => {
  const change = (e, key) => {
    state.value[key] = e.nativeEvent.target.value;
    callback(state.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "0 10px 5px",
        alignItems: "stretch"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch"
        }}
      >
        <label
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            margin: "0 10px 0 0"
          }}
        >
          Size
        </label>
        <TextField
          styles={inputStyle}
          value={state.value.width}
          onChange={e => change(e, "fontSize")}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch"
        }}
      >
        <label
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            margin: "0 10px 0 10px"
          }}
        >
          Height
        </label>
        <TextField
          styles={inputStyle}
          value={state.value.height}
          onChange={e => change(e, "lineHeight")}
        />
      </div>
    </div>
  );
});

const inputStyle: any = {
  fieldGroup: {
    backgroundColor: "#2b313b",
    border: 0,
    height: "22px"
  },
  field: {
    height: "21px"
  }
};
