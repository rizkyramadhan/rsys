export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;

  dc.addType("switch-statement-ui", {
    model: {
      init() {
        this.attributes.components.add({
          tagName: "caseblock-ui",
          type: "caseblock-ui",
          toolbar: [
            { attributes: { class: "fa fa-arrows" }, command: "tlb-move" }
          ]
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
          },
          {
            type: "button",
            text: "Add Condition",
            full: true,
            command: editor => {
              const selected = editor.getSelected();
              selected.attributes.components.add({
                tagName: "caseblock-ui",
                type: "caseblock-ui",
                toolbar: [
                  { attributes: { class: "fa fa-arrows" }, command: "tlb-move" }
                ]
              });
            }
          }
        ]
      }
    }
  });
}
