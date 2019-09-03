import EditorDom from "./Editor/index";

export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;
  let dt = editor.TraitManager;

  dc.addType("code-ui", {
    model: {
      defaults: {
        dropable: false,
        traits: [
          {
            label: "Content",
            name: "codeblock",
            type: "codeblock"
          }
        ]
      }
    }
  });

  dt.addType("codeblock", {
    noLabel: true,
    templateInput: "",
    createInput: ({ trait, component }) => {
      let value = component.getAttributes()._code;
      const callback = newVal => {
        component.addAttributes({
          _code: newVal
        });
      };
      return EditorDom("codeblock", value, callback);
    }
  });
}
