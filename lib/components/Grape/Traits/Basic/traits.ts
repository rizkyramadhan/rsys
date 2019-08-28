export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;
  let tm = editor.TraitManager;
  let traits = c.traits || [];

  const toAdd = name => traits.indexOf(name) >= 0;

  toAdd("text") &&
    dc.addType("text-ui", {
      model: {
        defaults: {
          traits: [
            {
              type: "href-next",
              name: "href",
              label: "New href"
            }
          ]
        }
      }
    });
}
