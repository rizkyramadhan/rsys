export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;
  let dt = editor.TraitManager;

  dc.addType("button-ui", {
    model: {
      defaults: {
        traits: [...c.styleTraits]
      }
    }
  });
}
