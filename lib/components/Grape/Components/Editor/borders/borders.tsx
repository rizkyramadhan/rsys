import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { IconButton, Label, TextField } from "office-ui-fabric-react";
import { inputStyle } from "..";
import Color from "../components/color-picker";

const state = observable({
  mode: "all",
  value: null
});
const config = observable({
  isCallout: false,
  key: null,
  pickerRef: null
});
export default observer((props: any) => {
  const colorChange = v => {
    state.value.borderColor = v;
    props.callBack(state.value);
  };
  useEffect(() => {
    state.value = props.state.value;
  }, [props]);
  return (
    <div
      className="rsys-attr"
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <div
        className="rsys-attr"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%"
        }}
      >
        <div
          className="rsys-attr"
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <IconButton
            iconProps={{
              iconName: "borderTop"
            }}
            title="Top"
            ariaLabel="Top"
            onClick={() => (state.mode = "top")}
            checked={state.mode === "top"}
          />
        </div>
        <div
          className="rsys-attr"
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <IconButton
            iconProps={{
              iconName: "borderLeft"
            }}
            title="Left"
            ariaLabel="Left"
            onClick={() => (state.mode = "left")}
            checked={state.mode === "left"}
          />
          <IconButton
            iconProps={{
              iconName: "borderAll"
            }}
            title="All"
            ariaLabel="All"
            onClick={() => (state.mode = "all")}
            checked={state.mode === "all"}
          />
          <IconButton
            iconProps={{
              iconName: "borderRight"
            }}
            title="Right"
            ariaLabel="Right"
            onClick={() => (state.mode = "right")}
            checked={state.mode === "right"}
          />
        </div>
        <div
          className="rsys-attr"
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <IconButton
            iconProps={{
              iconName: "borderBottom"
            }}
            title="Bottom"
            ariaLabel="Bottom"
            onClick={() => (state.mode = "bottom")}
            checked={state.mode === "bottom"}
          />
        </div>
      </div>
      <div
        className="rsys-attr"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%"
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
              margin: "0 10px 0 10px"
            }}
          >
            Style
          </Label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch"
            }}
          >
            <IconButton
              iconProps={{
                iconName: "cross"
              }}
              title="None"
              ariaLabel="None"
              checked={state.value.borderStyle === "none"}
            />
            <IconButton
              iconProps={{
                iconName: "borderSolid"
              }}
              title="Solid"
              ariaLabel="Solid"
              checked={state.value.borderStyle === "solid"}
            />
            <IconButton
              iconProps={{
                iconName: "borderDashed"
              }}
              title="Dashed"
              ariaLabel="Dashed"
              checked={state.value.borderStyle === "dashed"}
            />
            <IconButton
              iconProps={{
                iconName: "borderDotted"
              }}
              title="Dotted"
              ariaLabel="Dotted"
              checked={state.value.borderStyle === "dotted"}
            />
          </div>
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
            Width
          </Label>
          <TextField
            styles={inputStyle}
            value={state.value.borderWidth}
            suffix="px"
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
            Color
          </Label>
          <Color
            color={state.value.color}
            callback={colorChange}
            config={config}
            keyid="textcolor"
          />
        </div>
      </div>
    </div>
  );
});
