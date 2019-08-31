import UIText from "./ui-text";
import UILayout from "./ui-layout";
import UIButton from "./ui-button";
import UISelect from "./ui-select";
import UIQuery from "./ui-query";
import UIInput from "./ui-input";

export default { UIText, UILayout, UISelect, UIButton, UIQuery, UIInput };

export const fontStyle = {
  fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif`
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
