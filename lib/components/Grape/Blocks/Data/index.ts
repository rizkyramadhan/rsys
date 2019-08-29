import grapesjs from "grapesjs";

export default grapesjs.plugins.add("gjs-blocks-data", (editor, opts = {}) => {
  const config = {
    blocks: ["select", "query", "save"],
    flexGrid: 0,
    category: "Data",
    ...opts
  };

  // Add blocks
  const loadBlocks = require("./blocks");
  loadBlocks.default(editor, config);
});
