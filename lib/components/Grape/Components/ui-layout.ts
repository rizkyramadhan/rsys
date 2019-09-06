import { sortingTraits } from ".";

export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;
  let traits = [
    {
      name: "attributes",
      type: "attributes"
    },
    ...c.traits
  ].sort(sortingTraits);

  dc.addType("layout-ui", {
    model: {
      defaults: {
        traits: traits
      }
    }
  });
}
