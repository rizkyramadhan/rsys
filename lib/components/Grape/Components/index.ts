import grapesjs from "grapesjs";
import EditorDom from "./Editor/index";

const components = [
  require("./ui-text"),
  require("./ui-layout"),
  require("./ui-button"),
  require("./ui-select"),
  require("./ui-query"),
  require("./ui-input"),
  require("./ui-code"),
  require("./Statement/ui-if-statement"),
  require("./Statement/ui-ifblock"),
  require("./Statement/ui-elseblock"),
  require("./Statement/ui-switch-statement"),
  require("./Statement/ui-caseblock"),
  require("./Statement/ui-loop-statement")
];

export default grapesjs.plugins.add(
  "gjs-custom-plugin",
  (editor, opts = {}) => {
    const config = {
      styleTraits: styleTraits,
      styleManager: styleManager,
      ...opts
    };

    // DOM Components
    components.forEach((ui: any) => {
      ui.default(editor, config);
    });

    // Default Style
    styleTraits.forEach(trait => {
      editor.TraitManager.addType(trait.type, {
        ...styleManager[trait.type]
      });
    });

    editor.TraitManager.addType("label", {
      noLabel: true,
      templateInput: "",
      createInput({ trait }) {
        return `<div class="gjs-traits-label" style="margin: 0 -10px; background: #313742; letter-spacing: 1px;font-family: Helvetica,sans-serif;
        font-size: .75rem;">${trait.attributes.label}</div>`;
      }
    });
  }
);

const styleTraits = [
  {
    label: "Layout",
    name: "layout",
    type: "layoutStyle"
  }
];

const styleManager = {
  layoutStyle: {
    noLabel: true,
    templateInput: "",
    createInput: ({ trait, component }) => {
      let value = JSON.parse(component.getAttributes()._style || "{}");
      const callback = newVal => {
        component.addAttributes({
          _style: JSON.stringify(newVal)
        });
      };
      return EditorDom("global", value, callback);
    }
  }
};
