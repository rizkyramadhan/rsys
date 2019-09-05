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

  dc.addType("input-ui", {
    model: {
      defaults: {
        dropable: false,
        traits: traits
      }
    }
  });
}
