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
    }
  ].sort(sortingTraits);

  dc.addType("code-ui", {
    model: {
      defaults: {
        dropable: false,
        traits: traits
      }
    }
  });

  // dt.addType("codeblock", {
  //   noLabel: true,
  //   templateInput: "",
  //   createInput: ({ trait, component }) => {
  //     let value = component.getAttributes()._code;
  //     const callback = newVal => {
  //       component.addAttributes({
  //         _code: newVal
  //       });
  //     };
  //     return EditorDom(trait.attributes.name, { value }, callback);
  //   }
  // });
}
