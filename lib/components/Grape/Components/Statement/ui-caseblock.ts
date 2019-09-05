import api from "@lib/api";

export default function(editor, _: any = {}) {
  let dc = editor.DomComponents;
  let tm = editor.TraitManager;

  dc.addType("caseblock-ui", {
    model: {
      defaults: {
        traits: [
          {
            label: "Attributes",
            type: "label"
          },
          {
            type: "text",
            label: "Condition",
            name: "condition",
            default: ""
          }
        ]
      }
    }
  });
}
