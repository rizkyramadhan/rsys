import UIButton from "./ui-button";
import UIInput from "./ui-input";
import UILayout from "./ui-layout";
import UIQuery from "./ui-query";
import UISelect from "./ui-select";
import UIText from "./ui-text";
import UICode from "./ui-code";
import UIStatement from "./Statement/ui-statement";
import UIIfBlock from "./Statement/ui-ifblock";
import UIElseBlock from "./Statement/ui-elseblock";

export default {
  UIText,
  UILayout,
  UISelect,
  UIButton,
  UIQuery,
  UIInput,
  UICode,
  UIStatement,
  UIIfBlock,
  UIElseBlock
};

export const fontStyle = {
  fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif`,
  fontSize: "12px"
};

const color = {
  primary: "#3366FF",
  success: "#3BE096",
  warning: "#FBAA00",
  danger: "#F83D71",
  info: "#2995FF",
  basic: "#F7F9FC"
};

export const mode = {
  background: color,
  border: color,
  text: color
};
