export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;

  dc.addType("statement-ui", {
    model: {
      init() {
        this.attributes.components.add({
          tagName: "ifblock-ui",
          type: "ifblock-ui",
          toolbar: []
        });
      },
      updated(property) {
        if (property === "traits") {
          if (this.attributes.attributes.type === "if") {
            const components = this.components();
            if (components.models.length > 1) {
              components.remove(components.models[1]);
            }
          } else {
            this.attributes.components.add({
              tagName: "elseblock-ui",
              type: "elseblock-ui",
              toolbar: []
            });
          }
        }
      },
      defaults: {
        droppable: false,
        traits: [
          {
            label: "Attributes",
            type: "label"
          },
          {
            type: "select",
            label: "Type",
            name: "type",
            options: ["if", "if-else"],
            default: "if"
          }
        ]
      }
    }
  });
}
