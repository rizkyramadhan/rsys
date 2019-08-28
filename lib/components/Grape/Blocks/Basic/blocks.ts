export default function(editor, opt: any = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  let blocks = c.blocks || [];

  const toAdd = name => blocks.indexOf(name) >= 0;

  toAdd('text') &&
    bm.add('text', {
      label: 'Text',
      category: c.category,
      attributes: { class: 'fa fa-text-height' },
      content: `<text-/>`
    });

  toAdd('layout') &&
    bm.add('layout', {
      label: 'Layout',
      category: c.category,
      attributes: { class: 'fa fa-object-ungroup' },
      content: `<layout-/>`
    });
}
