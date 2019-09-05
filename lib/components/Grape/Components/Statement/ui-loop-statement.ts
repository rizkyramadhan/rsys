export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;

  dc.addType("loop-statement-ui", {
    model: {
      init() {
        this.attributes.components.add({
          tagName: "layout-ui",
          type: "layout-ui",
          toolbar: []
        });
      },
      defaults: {
        droppable: false,
        traits: [
          {
            label: "Attributes",
            type: "label"
          },
          {
            type: "text",
            label: "Params",
            name: "params"
          }
        ]
      }
    }
  });
}
