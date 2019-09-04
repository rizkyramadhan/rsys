export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;

  dc.addType("button-ui", {
    model: {
      defaults: {
        dropable: false,
        traits: [
          {
            label: "Label",
            name: "buttonlabel",
            placeholder: "Button"
          },
          {
            type: "checkbox",
            label: "Disabled",
            name: "disabled"
          },
          {
            type: "select",
            label: "Mode",
            name: "status",
            options: [
              { id: "primary", name: "Primary" },
              { id: "success", name: "Success" },
              { id: "info", name: "Info" },
              { id: "warning", name: "Warning" },
              { id: "danger", name: "Danger" },
              { id: "basic", name: "White" }
            ],
            value: "primary"
          },
          {
            type: "select",
            label: "Size",
            name: "size",
            options: [
              { id: "giant", name: "Giant" },
              { id: "large", name: "Large" },
              { id: "medium", name: "Medium" },
              { id: "small", name: "Small" },
              { id: "tiny", name: "Tiny" }
            ],
            value: "medium"
          },
          ...c.styleTraits
        ]
      }
    }
  });
}
