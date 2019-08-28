import grapesjs from "grapesjs";

export default grapesjs.plugins.add("gjs-traits-basic", (editor, opts = {}) => {
  const config = {
    traits: ["text", "layout"],
    flexGrid: 0,
    category: "Basic",
    ...opts
  };

  // Add traits
  const loadTraits = require("./traits");
  loadTraits.default(editor, config);
});
