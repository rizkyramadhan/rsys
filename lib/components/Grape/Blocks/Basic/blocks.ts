export default function(editor, opt: any = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  let blocks = c.blocks || [];

  const toAdd = name => blocks.indexOf(name) >= 0;

  toAdd("text") &&
    bm.add("text", {
      label: "Text",
      category: c.category,
      attributes: { class: "fa fa-font" },
      content: { type: "text-ui", tagName: `text-ui` }
    });

  toAdd("layout") &&
    bm.add("layout", {
      label: "Layout",
      category: c.category,
      attributes: { class: "fa fa-object-ungroup" },
      content: { type: "layout-ui", tagName: `layout-ui` }
    });

  toAdd("button") &&
    bm.add("button", {
      label: "Button",
      category: c.category,
      attributes: { class: "fa fa-square" },
      content: { type: "button-ui", tagName: `button-ui` }
    });

  toAdd("input") &&
    bm.add("input", {
      label: "Input",
      category: c.category,
      attributes: { class: "fa fa-edit" },
      content: { type: "input-ui", tagName: `input-ui` }
    });

  toAdd("code") &&
    bm.add("code", {
      label: "code",
      category: c.category,
      attributes: { class: "fa fa-code" },
      content: { type: "code-ui", tagName: `code-ui` }
    });

  toAdd("if-statement") &&
    bm.add("if-statement", {
      label: "if-statement",
      category: c.category,
      attributes: { class: "fa" },
      content: { type: "if-statement-ui", tagName: `if-statement-ui` },
      render: ({ model, className }) =>
        `<div class="${className}__my-wrap">if</div><div class="gjs-block-label">${model.get(
          "label"
        )}</div>`
    });

  toAdd("switch-statement") &&
    bm.add("switch-statement", {
      label: "switch-statement",
      category: c.category,
      attributes: { class: "fa fa-gg" },
      content: { type: "switch-statement-ui", tagName: `switch-statement-ui` }
    });

  toAdd("loop-statement") &&
    bm.add("loop-statement", {
      label: "loop-statement",
      category: c.category,
      attributes: { class: "fa fa-sort-numeric-asc" },
      content: { type: "loop-statement-ui", tagName: `loop-statement-ui` }
    });
}
