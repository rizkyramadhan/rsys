import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import CodeBlock from "../components/code-block";

const configProps = observable({
  showModal: false,
  keyid: "codeProps",
  label: "Props",
  value: null,
  rowspan: 8,
  callback: null
});
export default observer(({ state, callback }: any) => {
  useEffect(() => {
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
        <CodeBlock state={configProps} />
      </div>
    </div>
  );
});
