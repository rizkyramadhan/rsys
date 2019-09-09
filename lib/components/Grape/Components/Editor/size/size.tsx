import { observer } from "mobx-react-lite";
import React from "react";
import { TextField, Label } from "office-ui-fabric-react";

export default observer(({ state, callback }: any) => {
  const change = (e, key) => {
    state.value[key] = e.nativeEvent.target.value;
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch"
          }}
        >
          <Label
            style={{
              width: "50%",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              margin: "0 10px 0 0"
            }}
          >
            Width
          </Label>
          <TextField
            styles={inputStyle}
            value={state.value.width}
            suffix="px"
            onChange={e => change(e, "width")}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch"
          }}
        >
          <Label
            style={{
              width: "50%",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              margin: "0 10px 0 10px"
            }}
          >
            Height
          </Label>
          <TextField
            styles={inputStyle}
            value={state.value.height}
            suffix="px"
            onChange={e => change(e, "height")}
          />
        </div>
      </div>
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
          <Label
            style={{
              width: "50%",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              margin: "0 10px 0 0"
            }}
          >
            Min W
          </Label>
          <TextField
            styles={inputStyle}
            value={state.value.minWidth}
            suffix="px"
            onChange={e => change(e, "minWidth")}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch"
          }}
        >
          <Label
            style={{
              width: "50%",
              display: "flex",
              fontSize: "12px",
              alignItems: "center",
              whiteSpace: "nowrap",
              margin: "0 10px 0 10px"
            }}
          >
            Min H
          </Label>
          <TextField
            styles={inputStyle}
            value={state.value.minHeight}
            suffix="px"
            onChange={e => change(e, "minHeight")}
          />
        </div>
      </div>
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
          <Label
            style={{
              width: "50%",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              margin: "0 10px 0 0"
            }}
          >
            Min W
          </Label>
          <TextField
            styles={inputStyle}
            value={state.value.maxWidth}
            suffix="px"
            onChange={e => change(e, "maxWidth")}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch"
          }}
        >
          <Label
            style={{
              width: "50%",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              margin: "0 10px 0 10px"
            }}
          >
            Min H
          </Label>
          <TextField
            styles={inputStyle}
            value={state.value.maxHeight}
            suffix="px"
            onChange={e => change(e, "maxHeight")}
          />
        </div>
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
