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
    {
      name: "typography",
      type: "typography"
    },
    ...c.traits
  ].sort(sortingTraits);

  dc.addType("text-ui", {
    model: {
      defaults: {
        dropable: false,
        traits: traits
      }
    }
  });

  dt.addType("typography", {
    noLabel: true,
    templateInput: "",
    createInput: ({ trait, component }) => {
      let value = JSON.parse(component.getAttributes()._style || "{}");
      const callback = newVal => {
        component.addAttributes({
          _style: JSON.stringify(newVal)
        });
      };
      return EditorDom(
        trait.attributes.name,
        {
          value
        },
        callback
      );
    }
  });
}
