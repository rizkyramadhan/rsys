import { observer } from "mobx-react-lite";
import {
  Callout,
  ColorPicker,
  DefaultButton,
  TextField
} from "office-ui-fabric-react";
import React, { useEffect } from "react";

export default observer(({ color, callback, config, keyid }: any) => {
  const change = e => {
    callback(e.nativeEvent.target.value);
  };
  const changePicker = color => {
    callback(color.str);
  };
  useEffect(() => {
    config.key =
      keyid + "-" + Math.floor(100000000 + Math.random() * 900000000);
  }, []);
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
        // ref={pickerRef}
      >
        <TextField styles={inputStyle} value={color} onChange={change} />
        <DefaultButton
          text=""
          title="Color Picker"
          ariaLabel="Color Picker"
          styles={btnStyles}
          style={{
            backgroundColor: color
          }}
          onClick={e => {
            config.isCallout = true;
            config.pickerRef = e.nativeEvent;
          }}
        />
      </div>
      <Callout
        className="ms-CalloutExample-callout"
        ariaLabelledBy={config.key + "tx-color-picker-label"}
        role="alertdialog"
        gapSpace={0}
        target={config.pickerRef}
        onDismiss={() => {
          config.isCallout = !config.isCallout;
        }}
        setInitialFocus={true}
        hidden={!config.isCallout}
      >
        <div>
          <ColorPicker
            color={color}
            onChange={(_e, color) => changePicker(color)}
            alphaSliderHidden={false}
          />

          <div>
            <div
              style={{
                backgroundColor: color
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
