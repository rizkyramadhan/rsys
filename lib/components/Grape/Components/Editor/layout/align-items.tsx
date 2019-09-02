import { observer } from "mobx-react-lite";
import { IconButton } from "office-ui-fabric-react";
import React from "react";
import { btnIconRadioStyle, btnIconRadioStyles } from "..";

export default observer(({ state, callback }: any) => {
  const alignItems = val => {
    state.value.alignItems = val;
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
          iconName: "align-start"
        }}
        title="Flex Start"
        ariaLabel="Flex Start"
        checked={state.value.alignItems === "flex-start"}
        onClick={() => alignItems("flex-start")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "align-center"
        }}
        title="Center"
        ariaLabel="Center"
        checked={state.value.alignItems === "center"}
        onClick={() => alignItems("center")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "align-end"
        }}
        title="Flex End"
        ariaLabel="Flex End"
        checked={state.value.alignItems === "flex-end"}
        onClick={() => alignItems("flex-end")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "align-between"
        }}
        title="Stretch"
        ariaLabel="Stretch"
        checked={state.value.alignItems === "stretch"}
        onClick={() => alignItems("stretch")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "align-around"
        }}
        title="Baseline"
        ariaLabel="Baseline"
        checked={state.value.alignItems === "baseline"}
        onClick={() => alignItems("baseline")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
    </div>
  );
});
