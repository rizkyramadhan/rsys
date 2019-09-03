import { observer } from "mobx-react-lite";
import { IconButton } from "office-ui-fabric-react";
import React from "react";
import { btnIconRadioStyle, btnIconRadioStyles } from "..";

export default observer(({ state, callback }: any) => {
  const textAlign = val => {
    state.value.textAlign = val;
    callback(state.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        backgroundColor: "rgba(0,0,0,0.2)",
        width: "100%"
      }}
    >
      <IconButton
        iconProps={{
          iconName: "textLeft"
        }}
        title="Left"
        ariaLabel="Left"
        checked={state.value.textAlign === "left"}
        onClick={() => textAlign("left")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "textCenter"
        }}
        title="Center"
        ariaLabel="Center"
        checked={state.value.textAlign === "center"}
        onClick={() => textAlign("center")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "textRight"
        }}
        title="Right"
        ariaLabel="Right"
        checked={state.value.textAlign === "right"}
        onClick={() => textAlign("right")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "textJustify"
        }}
        title="Justify"
        ariaLabel="Justify"
        checked={state.value.textAlign === "justify"}
        onClick={() => textAlign("justify")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
    </div>
  );
});
