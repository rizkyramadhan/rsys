import api from "@lib/api";

export default function(editor, _: any = {}) {
  let dc = editor.DomComponents;
  let tm = editor.TraitManager;

  dc.addType("elseblock-ui", {});
}
