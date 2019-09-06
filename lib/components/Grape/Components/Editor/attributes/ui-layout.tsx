import { observer } from "mobx-react-lite";
import { Dropdown, Icon, Label } from "office-ui-fabric-react";
import React from "react";
import { dropdownStyle, dropdownStyles } from "..";

export default observer(({ state, callback }: any) => {
  const changeSelect = (v, key) => {
    state.value[key] = v;
    callback(state.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
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
        <Label
          style={{
            width: "25%",
            fontSize: "12px",
            display: "flex",
            alignItems: "center"
          }}
        >
          Level
        </Label>
        <Dropdown
          options={[
            { key: "1", text: "1" },
            { key: "2", text: "2" },
            { key: "3", text: "3" },
            { key: "4", text: "4" }
          ]}
          defaultSelectedKey="1"
          onChange={(_e, item) => {
            changeSelect(item.key, "status");
          }}
          onRenderCaretDown={() => <Icon iconName="CaretDownSolid8" />}
          styles={dropdownStyles}
          style={dropdownStyle}
        />
      </div>
    </div>
  );
});
