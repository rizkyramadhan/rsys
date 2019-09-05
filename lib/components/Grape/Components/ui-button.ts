import EditorDom from "./Editor/index";
import { sortingTraits } from ".";

export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;
  let dt = editor.TraitManager;
  let traits = [
    {
      name: "attributes",
      type: "attributes"
    },
    ...c.traits
  ].sort(sortingTraits);

  dc.addType("button-ui", {
    model: {
      defaults: {
        dropable: false,
        traits: traits
      }
    }
  });
}
