import grapesjs from "grapesjs";

export default grapesjs.plugins.add(
  "gjs-custom-plugin",
  (editor, opts = {}) => {
    const config = {
      traits: ["text", "layout"],
      flexGrid: 0,
      category: "Basic",
      ...opts
    };
    const components = [require("./ui-text"), require("./ui-layout")];

    // DOM Components
    components.forEach((ui: any) => {
      ui.default(editor, config);
    });
  }
);
