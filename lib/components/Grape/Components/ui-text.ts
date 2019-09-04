import EditorDom from "./Editor/index";

export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;
  let dt = editor.TraitManager;

  dc.addType("text-ui", {
    model: {
      defaults: {
        dropable: false,
        traits: [
          {
            label: "Text",
            name: "text",
            placeholder: "<empty>"
          },
          {
            type: "select",
            label: "Mode",
            name: "textmode",
            options: [
              { id: "none", name: "None" },
              { id: "primary", name: "Primary" },
              { id: "success", name: "Success" },
              { id: "info", name: "Info" },
              { id: "warning", name: "Warning" },
              { id: "danger", name: "Danger" }
            ],
            value: ""
          },
          {
            label: "typography",
            name: "textstyle",
            type: "typography"
          },
          ...c.styleTraits
        ]
      }
    }
  });

  dt.addType("typography", {
    noLabel: true,
    templateInput: "",
    createInput: ({ trait, component }) => {
      let value = JSON.parse(component.getAttributes()._style || "{}");
      const callback = newVal => {
        component.addAttributes({
          _style: JSON.stringify(newVal)
        });
      };
      return EditorDom("typography", value, callback);
    }
  });
}
