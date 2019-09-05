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

export const sortingTraits = (a, b) => {
  let aT = a.at || 10;
  let bT = b.at || 10;
  if (aT < bT) return -1;
  if (aT > bT) return 1;
  return 0;
};

export default grapesjs.plugins.add(
  "gjs-custom-plugin",
  (editor, opts = {}) => {
    const config = {
      traits: traits,
      traitsManager: traitsManager,
      ...opts
    };

    // DOM Components
    components.forEach((ui: any) => {
      ui.default(editor, config);
    });

    // Default Style
    Object.keys(traitsManager).forEach(type => {
      editor.TraitManager.addType(type, {
        ...traitsManager[type]
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

const traits = [
  {
    name: "global",
    type: "layoutStyle"
  }
];

const traitsManager = {
  attributes: {
    noLabel: true,
    templateInput: "",
    createInput: ({ trait, component }) => {
      let value = JSON.parse(component.getAttributes()._attributes || "{}");
      const callback = newVal => {
        component.addAttributes({
          _attributes: JSON.stringify(newVal)
        });
      };
      return EditorDom(
        trait.attributes.name,
        {
          value,
          type: component.attributes.type
        },
        callback
      );
    }
  },
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
      return EditorDom(
        trait.attributes.name,
        {
          value
        },
        callback
      );
    }
  }
};
