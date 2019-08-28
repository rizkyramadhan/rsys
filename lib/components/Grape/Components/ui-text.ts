export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;

  dc.addType("text-ui", {
    model: {
      defaults: {
        traits: [
          {
            type: "select", // Type of the trait
            label: "Type", // The label you will see in Settings
            name: "type", // The name of the attribute/property to use on component
            options: [
              { id: "text", name: "Text" },
              { id: "email", name: "Email" },
              { id: "password", name: "Password" },
              { id: "number", name: "Number" }
            ]
          },
          {
            type: "checkbox",
            name: "required"
          }
        ]
      }
    }
  });
}
