export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;
  let dt = editor.TraitManager;

  dc.addType("text-ui", {
    model: {
      defaults: {
        traits: [
          {
            label: "Attributes",
            type: "label"
          },
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
          },
          ...c.styleTraits
        ]
      }
    }
  });

  c.styleTraits.forEach(trait => {
    dt.addType(trait.type, {
      createInput: c.styleManager[trait.type]
    });
  });
}
