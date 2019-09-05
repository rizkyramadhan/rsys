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
  keyid: "inpAttr",
  label: "Text",
  value: null,
  callback: null
});
const configProps = observable({
  showModal: false,
  keyid: "inpProps",
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
  });
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
          Name
        </Label>
        <TextField
          styles={inputStyle}
          value={state.value.name}
          onChange={e => change(e, "name")}
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
          style={{
            width: "25%",
            fontSize: "12px",
            display: "flex",
            alignItems: "center"
          }}
        >
          Placeholder
        </Label>
        <TextField
          styles={inputStyle}
          value={state.value.name}
          onChange={e => change(e, "placeholder")}
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
          style={{
            width: "25%",
            fontSize: "12px",
            display: "flex",
            alignItems: "center"
          }}
        >
          Value
        </Label>
        <TextField
          styles={inputStyle}
          value={state.value.name}
          onChange={e => change(e, "value")}
        />
      </div>
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
          style={{
            width: "25%",
            fontSize: "12px",
            display: "flex",
            alignItems: "center"
          }}
        >
          Type
        </Label>
        <Dropdown
          options={[
            { key: "text", text: "Text" },
            { key: "number", text: "Number" },
            { key: "email", text: "Email" },
            { key: "password", text: "Password" }
          ]}
          defaultSelectedKey="text"
          onChange={(_e, item) => {
            changeSelect(item.key, "type");
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
          style={{
            width: "25%",
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
          defaultSelectedKey="basic"
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
          style={{
            width: "25%",
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
          Readonly
        </Label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%"
          }}
        >
          <Checkbox
            onChange={(_e, checked) => changeSelect(checked, "readonly")}
            styles={checkboxStyle}
          />
        </div>
      </div>
    </div>
  );
});
