import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import { DefaultButton } from "office-ui-fabric-react";
import React from "react";
import { groupNameStyles } from ".";
import Attributes from "./attributes/index";

const caretAcv = { iconName: "CaretSolidDown" };
const caretInAcv = { iconName: "CaretSolidRight" };
const state = observable({
  attributes: true
});
export default observer((props: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        margin: "-5px -10px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        }}
      >
        <DefaultButton
          toggle
          checked={state.attributes}
          text={"Attributes"}
          iconProps={state.attributes ? caretAcv : caretInAcv}
          onClick={() => {
            state.attributes = !state.attributes;
          }}
          allowDisabledFocus
          styles={groupNameStyles}
        />
        {state.attributes && <Attributes {...props} />}
      </div>
    </div>
  );
});
