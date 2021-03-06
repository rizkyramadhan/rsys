import grapesjs from "grapesjs";

export default grapesjs.plugins.add("gjs-blocks-basic", (editor, opts = {}) => {
  const config = {
    blocks: ["text", "layout", "button", "input", "code", "if-statement", "switch-statement", "loop-statement"],
    flexGrid: 0,
    category: "Basic",
    ...opts
  };

  // Add blocks
  const loadBlocks = require("./blocks");
  loadBlocks.default(editor, config);
});
