import { observer } from "mobx-react-lite";
import { IconButton } from "office-ui-fabric-react";
import React from "react";
import { btnIconRadioStyle, btnIconRadioStyles } from "..";

export default observer(({ state, callback }: any) => {
  const justifyContent = val => {
    state.value.justifyContent = val;
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
          iconName: "justify-start"
        }}
        title="Flex Start"
        ariaLabel="Flex Start"
        checked={state.value.justifyContent === "flex-start"}
        onClick={() => justifyContent("flex-start")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "justify-center"
        }}
        title="Center"
        ariaLabel="Center"
        checked={state.value.justifyContent === "center"}
        onClick={() => justifyContent("center")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "justify-end"
        }}
        title="Flex End"
        ariaLabel="Flex End"
        checked={state.value.justifyContent === "flex-end"}
        onClick={() => justifyContent("flex-end")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "justify-between"
        }}
        title="Space Between"
        ariaLabel="Space Between"
        checked={state.value.justifyContent === "space-between"}
        onClick={() => justifyContent("space-between")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "justify-around"
        }}
        title="Space Around"
        ariaLabel="Space Around"
        checked={state.value.justifyContent === "space-around"}
        onClick={() => justifyContent("space-around")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
    </div>
  );
});
