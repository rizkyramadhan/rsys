import { observer } from "mobx-react-lite";
import { Modal, TextField, Label, IconButton } from "office-ui-fabric-react";
import { useEffect, useRef } from "react";
import CodeMirror from "react-codemirror";
import { observable } from "mobx";
require("codemirror/mode/jsx/jsx");

export default observer((props: any) => {
  const ref = useRef(null as any);
  const change = e => {
    props.state.value = e.nativeEvent.target.value;
    props.state.callback(props.state.value);
  };
  const codeChange = v => {
    props.state.value = v;
    props.state.callback(props.state.value);
  };
  useEffect(() => {
    props.state.keyid =
      props.state.keyid +
      "modal-" +
      Math.floor(100000000 + Math.random() * 900000000);
  }, [props]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "0 10px 5px",
        alignItems: "stretch"
      }}
    >
      <div
        style={{
          width: "25%",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between"
        }}
      >
        <Label
          style={{
            fontSize: "12px",
            display: "flex"
          }}
        >
          {props.state.label}
        </Label>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between",
          position: "relative"
        }}
      >
        <TextField
          multiline
          rows={props.state.rowspan}
          styles={textMultiline}
          onChange={change}
          value={props.state.value}
        />
        <IconButton
          iconProps={{
            iconName: "MiniExpand"
          }}
          title="Expand"
          ariaLabel="Expand"
          onClick={() => (props.state.showModal = true)}
          styles={{
            root: {
              position: "absolute",
              top: 0,
              right: 0,
              background: "#373d49"
            }
          }}
        />
      </div>
      <Modal
        titleAriaId={props.state.keyid}
        isOpen={props.state.showModal}
        onDismiss={() => (props.state.showModal = false)}
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
            {props.state.label}
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
              value={props.state.value}
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

const textMultiline = {
  label: {
    fontWeight: 400
  },
  fieldGroup: {
    backgroundColor: "#2b313b",
    border: "0"
  },
  field: {
    paddingRight: "32px"
  },
  root: {
    width: "100%"
  }
};
