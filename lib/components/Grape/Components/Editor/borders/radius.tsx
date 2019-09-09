import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import {
  IconButton,
  Slider,
  TextField,
  Label,
  FontIcon
} from "office-ui-fabric-react";
import React, { useEffect } from "react";
import { inputStyle } from "..";

const state = observable({
  mode: "single",
  value: null
});
export default observer((props: any) => {
  const changeMultiple = v => {
    state.value.borderTopLeftRadius = v;
    state.value.borderTopRightRadius = v;
    state.value.borderBottomLeftRadius = v;
    state.value.borderBottomRightRadius = v;
    props.callback(state.value);
  };
  const changeSingle = (e, k) => {
    state.value[k] = parseInt(e.nativeEvent.target.value);
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
        flexDirection: "column"
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
            iconName: "radiusSingle"
          }}
          title="All Corners"
          ariaLabel="All Corners"
          onClick={() => (state.mode = "single")}
          checked={state.mode === "single"}
        />
        <IconButton
          iconProps={{
            iconName: "radiusMultiple"
          }}
          title="Individual Corners"
          ariaLabel="Individual Corners"
          onClick={() => (state.mode = "multiple")}
          checked={state.mode === "multiple"}
        />
        <Slider
          min={0}
          max={20}
          step={1}
          defaultValue={0}
          showValue={false}
          onChange={changeMultiple}
          styles={{
            line: {
              minWidth: 50
            }
          }}
        />
        <TextField
          styles={inputStyle}
          value={state.value.height}
          suffix="px"
          onChange={(e: any) =>
            changeMultiple(parseInt(e.nativeEvent.target.value))
          }
        />
      </div>
      <div
        className="rsys-attr"
        style={{
          display: "flex",
          flexDirection: "column"
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
            <FontIcon iconName="radiusTopLeft" />
            <TextField
              styles={inputStyle}
              value={state.value.width}
              suffix="px"
              onChange={e => changeSingle(e, "borderTopLeftRadius")}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch"
            }}
          >
            <FontIcon iconName="radiusTopRight" />
            <TextField
              styles={inputStyle}
              value={state.value.height}
              suffix="px"
              onChange={e => changeSingle(e, "borderTopRightRadius")}
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
            <FontIcon iconName="radiusBottomLeft" />
            <TextField
              styles={inputStyle}
              value={state.value.width}
              suffix="px"
              onChange={e => changeSingle(e, "borderBottomLeftRadius")}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch"
            }}
          >
            <FontIcon iconName="radiusBottomRight" />
            <TextField
              styles={inputStyle}
              value={state.value.height}
              suffix="px"
              onChange={e => changeSingle(e, "borderBottomRightRadius")}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
