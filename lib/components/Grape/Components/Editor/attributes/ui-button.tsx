import { observer } from "mobx-react-lite";
import {
  Dropdown,
  Icon,
  Label,
  TextField,
  Checkbox
} from "office-ui-fabric-react";
import React, { useEffect } from "react";
import { dropdownStyle, dropdownStyles, inputStyle, checkboxStyle } from "..";
import CodeBlock from "../components/code-block";
import { observable } from "mobx";

const configCode = observable({
  showModal: false,
  keyid: "btnAttr",
  label: "Text",
  value: null,
  callback: null
});
const configProps = observable({
  showModal: false,
  keyid: "btnProps",
  label: "Props",
  value: null,
  callback: null
});
export default observer(({ state, callback }: any) => {
  const change = (e, key) => {
    state.value[key] = e.nativeEvent.target.value;
    callback(state.value);
  };
  const changeSelect = (v, key) => {
    state.value[key] = v;
    callback(state.value);
  };
  useEffect(() => {
    configCode.value = state.value.text;
    configCode.callback = v => {
      state.value.text = v;
      callback(state.value);
    };
    configProps.value = state.value.props;
    configProps.callback = v => {
      state.value.props = v;
      callback(state.value);
    };
  }, []);
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
          flexDirection: "column",
          alignItems: "stretch"
        }}
      >
        <CodeBlock state={configCode} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        }}
      >
        <CodeBlock state={configProps} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 10px 5px",
          alignItems: "stretch"
        }}
      >
        <Label
          className="rsys-at-label"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center"
          }}
        >
          Mode
        </Label>
        <Dropdown
          options={[
            { key: "primary", text: "Primary" },
            { key: "success", text: "Success" },
            { key: "info", text: "Info" },
            { key: "warning", text: "Warning" },
            { key: "danger", text: "Danger" },
            { key: "basic", text: "White" }
          ]}
          defaultSelectedKey="primary"
          onChange={(_e, item) => {
            changeSelect(item.key, "status");
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
        <Label
          className="rsys-at-label"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center"
          }}
        >
          Size
        </Label>
        <Dropdown
          options={[
            { key: "giant", text: "Giant" },
            { key: "large", text: "Large" },
            { key: "medium", text: "Medium" },
            { key: "small", text: "Small" },
            { key: "tiny", text: "Tiny" }
          ]}
          defaultSelectedKey="medium"
          onChange={(_e, item) => {
            changeSelect(item.key, "status");
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
        <Label
          className="rsys-at-label"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center"
          }}
        >
          Disabled
        </Label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%"
          }}
        >
          <Checkbox
            onChange={(_e, checked) => changeSelect(checked, "disabled")}
            styles={checkboxStyle}
          />
        </div>
      </div>
    </div>
  );
});
