export default function(editor, opt: any = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  let blocks = c.blocks || [];

  const toAdd = name => blocks.indexOf(name) >= 0;

  toAdd("select") &&
    bm.add("select", {
      label: "Select",
      category: c.category,
      attributes: { class: "fa fa-codepen" },
      content: { type: "select-ui", tagName: "select-ui" }
    });

  toAdd("query") &&
    bm.add("query", {
      label: "Query",
      category: c.category,
      attributes: { class: "fa fa-code" },
      content: { type: "query-ui", tagName: "div" }
    });

  toAdd("save") &&
    bm.add("save", {
      label: "Save",
      category: c.category,
      attributes: { class: "fa fa-save" },
      content: { type: "save", tagName: "div" }
    });
}
