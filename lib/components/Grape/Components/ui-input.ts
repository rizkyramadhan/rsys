export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;

  dc.addType("input-ui", {
    model: {
      defaults: {
        dropable: false,
        traits: [
          {
            label: "Attributes",
            type: "label"
          },
          {
            label: "Placeholder",
            name: "inputplaceholder"
          },
          {
            type: "select",
            label: "Type",
            name: "inputtype",
            options: [
              { id: "text", name: "Text" },
              { id: "number", name: "Number" },
              { id: "email", name: "Email" },
              { id: "password", name: "password" }
            ],
            value: "text"
          },
          {
            type: "select",
            label: "Mode",
            name: "inputmode",
            options: [
              { id: "primary", name: "Primary" },
              { id: "success", name: "Success" },
              { id: "info", name: "Info" },
              { id: "warning", name: "Warning" },
              { id: "danger", name: "Danger" },
              { id: "basic", name: "White" }
            ],
            value: "basic"
          },
          {
            label: "Value",
            name: "inputvalue"
          },
          {
            type: "checkbox",
            label: "Disabled",
            name: "inputdisabled"
          },
          {
            type: "checkbox",
            label: "Read Only",
            name: "inputreadonly"
          },
          ...c.styleTraits
        ]
      }
    }
  });
}
