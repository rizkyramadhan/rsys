export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;

  dc.addType("layout-ui", {
    model: {
      defaults: {
        traits: [...c.traits]
      }
    }
  });
}
