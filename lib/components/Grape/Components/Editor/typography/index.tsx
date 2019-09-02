import { observer } from "mobx-react-lite";
import React from "react";
import Size from "./size";
import Color from "./color";
import { Dropdown, Icon } from "office-ui-fabric-react";
import { dropdownStyles, dropdownStyle } from "..";
import Align from "./align";

export default observer(({ state, callback }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px"
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
        <label
          style={{
            width: "25%",
            display: "flex",
            alignItems: "center"
          }}
        >
          Color
        </label>
        <Color state={state} callback={callback} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 10px 5px",
          alignItems: "stretch"
        }}
      >
        <label
          style={{
            width: "25%",
            display: "flex",
            alignItems: "center"
          }}
        >
          Weight
        </label>
        <Dropdown
          options={[
            { key: "100", text: "100 - Tint" },
            { key: "200", text: "200 - Extra Light" },
            { key: "300", text: "300 - Light" },
            { key: "400", text: "400 - Normal" },
            { key: "500", text: "500 - Medium" },
            { key: "600", text: "600 - Semi Bold" },
            { key: "700", text: "700 - Bold" },
            { key: "800", text: "800 - Extra Bold" },
            { key: "900", text: "900 - Black" }
          ]}
          defaultSelectedKey="400"
          onChange={(_e, item) => {
            state.value.fontWeight = item.key;
            callback(state.value);
          }}
          onRenderCaretDown={() => <Icon iconName="CaretDownSolid8" />}
          styles={dropdownStyles}
          style={dropdownStyle}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 10px 5px",
          alignItems: "stretch"
        }}
      >
        <label
          style={{
            width: "25%",
            display: "flex",
            alignItems: "center"
          }}
        >
          Align
        </label>
        <Align state={state} callback={callback} />
      </div>
      <Size state={state} callback={callback} />
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
  }
};
