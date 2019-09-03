import { observer } from "mobx-react-lite";
import { IconButton, DefaultButton } from "office-ui-fabric-react";
import React from "react";
import { btnIconRadioStyle, btnIconRadioStyles, btnStyles } from "..";

export default observer(({ state, callback }: any) => {
  const overflow = val => {
    state.value.overflow = val;
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
          iconName: "visible"
        }}
        title="Visible"
        ariaLabel="Visible"
        checked={state.value.overflow === "visible"}
        onClick={() => overflow("visible")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "hidden"
        }}
        title="Hidden"
        ariaLabel="Hidden"
        checked={state.value.overflow === "hidden"}
        onClick={() => overflow("hidden")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <IconButton
        iconProps={{
          iconName: "scroll"
        }}
        title="Scroll"
        ariaLabel="Scroll"
        checked={state.value.overflow === "scroll"}
        onClick={() => overflow("scroll")}
        styles={btnIconRadioStyles}
        style={btnIconRadioStyle}
      />
      <DefaultButton
        text="Auto"
        title="Auto"
        ariaLabel="Auto"
        checked={state.value.overflow === "auto"}
        onClick={() => overflow("auto")}
        styles={btnStyles}
        style={btnIconRadioStyle}
      />
    </div>
  );
});
