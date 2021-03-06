import { observer } from "mobx-react-lite";
import { Dropdown, Icon, Label, TextField } from "office-ui-fabric-react";
import React, { useEffect } from "react";
import { dropdownStyle, dropdownStyles, inputStyle } from "..";
import CodeBlock from "../components/code-block";
import { observable } from "mobx";

const configCode = observable({
  showModal: false,
  keyid: "textAttr",
  label: "Text",
  value: null,
  callback: null
});
const configProps = observable({
  showModal: false,
  keyid: "textProps",
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
            { key: "none", text: "None" },
            { key: "primary", text: "Primary" },
            { key: "success", text: "Success" },
            { key: "info", text: "Info" },
            { key: "warning", text: "Warning" },
            { key: "danger", text: "Danger" }
          ]}
          defaultSelectedKey="none"
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
          Heading
        </Label>
        <Dropdown
          options={[
            { key: "none", text: "None" },
            { key: "h1", text: "H1" },
            { key: "h2", text: "H2" },
            { key: "h3", text: "H3" },
            { key: "h4", text: "H4" },
            { key: "h5", text: "H5" },
            { key: "h6", text: "H6" },
            { key: "h6", text: "S1" },
            { key: "h6", text: "S2" },
            { key: "p1", text: "P1" },
            { key: "p2", text: "P2" },
            { key: "c1", text: "C1" },
            { key: "c2", text: "C2" },
            { key: "Label", text: "Label" }
          ]}
          defaultSelectedKey="none"
          onChange={(_e, item) => {
            changeSelect(item.key, "category");
          }}
          onRenderCaretDown={() => <Icon iconName="CaretDownSolid8" />}
          styles={dropdownStyles}
          style={dropdownStyle}
        />
      </div>
    </div>
  );
});
