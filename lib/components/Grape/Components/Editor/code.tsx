import react, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { observable } from "mobx";
import { IconButton } from "office-ui-fabric-react";
import CodeBlock from "./components/code-block";

const config = observable({
  showModal: false,
  keyid: null
});
export default observer(({ state, callback }: any) => {
  const change = v => {
    state.value = v;
    callback(state.value);
  };
  useEffect(() => {
    config.keyid = "codeBlock";
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between"
        }}
      >
        <label
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          Code
        </label>
        <IconButton
          iconProps={{
            iconName: "MiniExpand"
          }}
          title="Expand"
          ariaLabel="Expand"
          onClick={() => (config.showModal = true)}
        />
      </div>
      <CodeBlock value={state.value} callback={change} config={config} />
    </div>
  );
});
