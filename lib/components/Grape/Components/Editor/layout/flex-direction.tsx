import { observer } from "mobx-react-lite";
import { IconButton } from "office-ui-fabric-react";
import React from "react";
import { btnIconRadioStyle, btnIconRadioStyles } from "..";

export default observer(({ state, callback }: any) => {
  const flexDirection = val => {
    state.value.flexDirection = val;
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
          iconName: "row"
        }}
        title="Horizontal"
        ariaLabel="Horizontal"
        checked={state.value.flexDirection === "row"}
        onClick={() => flexDirection("row")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "column"
        }}
        title="Vertical"
        ariaLabel="Vertical"
        checked={state.value.flexDirection === "column"}
        onClick={() => flexDirection("column")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "rowReverse"
        }}
        title="Horizontal Reverse"
        ariaLabel="Horizontal Reverse"
        checked={state.value.flexDirection === "row-reverse"}
        onClick={() => flexDirection("row-reverse")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
    </div>
  );
});
