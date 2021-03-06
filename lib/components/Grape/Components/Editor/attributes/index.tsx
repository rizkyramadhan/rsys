import { observer } from "mobx-react-lite";
import React from "react";
import UIText from "./ui-text";
import UIButton from "./ui-button";
import UICode from "./ui-code";
import UIInput from "./ui-input";
import UILayout from "./ui-layout";
import UIComponent from "./ui-layout";

export default observer((props: any) => {
  const type = props.state.type;
  return (
    <div
      className="rsys-attr"
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px"
      }}
    >
      {
        {
          "text-ui": <UIText {...props} />,
          "button-ui": <UIButton {...props} />,
          "code-ui": <UICode {...props} />,
          "input-ui": <UIInput {...props} />,
          "layout-ui": <UILayout {...props} />,
          "component-ui": <UIComponent {...props} />
        }[type]
      }
    </div>
  );
});
