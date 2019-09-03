import { observer } from "mobx-react-lite";
import { Modal, TextField } from "office-ui-fabric-react";
import { useEffect, useRef } from "react";
import CodeMirror from "react-codemirror";
import { textMultiline } from "..";
require("codemirror/mode/jsx/jsx");

export default observer(({ value, callback, config }: any) => {
  const ref = useRef(null as any);
  const change = e => {
    value = e.nativeEvent.target.value;
    callback(value);
  };
  const codeChange = v => {
    value = v;
    callback(value);
  };
  useEffect(() => {
    config.keyid +=
      "modal-" + Math.floor(100000000 + Math.random() * 900000000);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      }}
    >
      <TextField
        multiline
        rows={4}
        styles={textMultiline}
        onChange={change}
        value={value}
      />
      <Modal
        titleAriaId={config.key}
        isOpen={config.showModal}
        onDismiss={() => (config.showModal = false)}
        isBlocking={false}
        styles={{
          main: {
            width: "60%",
            height: "80%"
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch"
          }}
        >
          <label
            style={{
              padding: "10px 15px",
              fontSize: "16px",
              fontWeight: 600,
              backgroundColor: "#373d49"
            }}
          >
            Code
          </label>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              overflowY: "auto"
            }}
          >
            <CodeMirror
              value={value}
              onChange={codeChange}
              ref={ref}
              options={{
                autoRefresh: true,
                firstLineNumber: 1,
                lineNumbers: true,
                smartIndent: true,
                lineWrapping: true,
                indentWithTabs: true,
                refresh: true,
                mode: "jsx"
              }}
              autoFocus={true}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
});

export const textMultilineModal = {
  label: {
    fontWeight: 400
  },
  fieldGroup: {
    backgroundColor: "#313742",
    border: "0",
    minWidth: "600px",
    minHeight: "600px"
  }
};
