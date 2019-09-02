import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import {
  Callout,
  ColorPicker,
  DefaultButton,
  TextField
} from "office-ui-fabric-react";
import React from "react";

const config = observable({
  isCallout: false
});
export default observer(({ state, callback }: any) => {
  const change = (e, key) => {
    state.value[key] = e.nativeEvent.target.value;
    callback(state.value);
  };
  const changePicker = (color, key) => {
    state.value[key] = color.str;
    callback(state.value);
  };
  const pickerRef = React.createRef<HTMLDivElement>();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch"
        }}
        ref={pickerRef}
      >
        <TextField
          styles={inputStyle}
          value={state.value.backgroundColor}
          onChange={e => change(e, "backgroundColor")}
        />
        <DefaultButton
          text=""
          title="Color Picker"
          ariaLabel="Color Picker"
          styles={btnStyles}
          style={{
            backgroundColor: state.value.backgroundColor
          }}
          onClick={() => (config.isCallout = true)}
        />
      </div>
      <Callout
        className="ms-CalloutExample-callout"
        ariaLabelledBy="bg-color-picker-label"
        ariaDescribedBy="bg-color-picker-desc"
        role="alertdialog"
        gapSpace={0}
        target={pickerRef}
        onDismiss={() => {
          config.isCallout = !config.isCallout;
        }}
        setInitialFocus={true}
        hidden={!config.isCallout}
      >
        <div>
          <ColorPicker
            color={state.value.backgroundColor}
            onChange={(_e, color) => changePicker(color, "backgroundColor")}
            alphaSliderHidden={false}
          />

          <div>
            <div
              style={{
                backgroundColor: state.value.backgroundColor
              }}
            />
          </div>
        </div>
      </Callout>
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
  },
  root: {
    width: "100%"
  }
};

const btnStyles = {
  root: {
    border: "1px solid rgba(0,0,0,0.2)",
    height: "22px",
    width: "22px",
    minWidth: "22px",
    padding: 0
  }
};
