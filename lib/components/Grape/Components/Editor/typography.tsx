import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import { DefaultButton, registerIcons } from "office-ui-fabric-react";
import React, { useEffect } from "react";
import { groupNameStyles } from ".";
import Typography from "./typography/index";

const caretAcv = { iconName: "CaretSolidDown" };
const caretInAcv = { iconName: "CaretSolidRight" };
const state = observable({
  typography: true
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
          checked={state.typography}
          text={"Typography"}
          iconProps={state.typography ? caretAcv : caretInAcv}
          onClick={() => {
            state.typography = !state.typography;
          }}
          allowDisabledFocus
          styles={groupNameStyles}
        />
        {state.typography && <Typography {...props} />}
      </div>
    </div>
  );
});

registerIcons({
  icons: {
    textLeft: (
      <svg
        data-icon="text-align-left"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 2H2v2h12V2zm-4 3H2v2h8V5zm-8 6h8v2H2v-2zm12-3H2v2h12V8z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    textCenter: (
      <svg
        data-icon="text-align-center"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 2H2v2h12V2zm-2 3H4v2h8V5zm-8 6h8v2H4v-2zm10-3H2v2h12V8z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    textRight: (
      <svg
        data-icon="text-align-right"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 2H2v2h12V2zm0 3H6v2h8V5zm-8 6h8v2H6v-2zm8-3H2v2h12V8z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    textJustify: (
      <svg
        data-icon="text-align-justify"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 2H2v2h12V2zm0 3H2v2h12V5zM2 11h12v2H2v-2zm12-3H2v2h12V8z"
          fill="currentColor"
        ></path>
      </svg>
    )
  }
});
