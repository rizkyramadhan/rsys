import GrapesJS from 'grapesjs';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import basic from './Grape/Blocks/Basic/index';

export default ({
  id = 'grapesjs-react-editor',
  components = [],
  blocks = [],
  plugins = [],
  blockManager,
  storageManager
}: any) => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 2000);
    if (!editor) {
      const e = GrapesJS.init({
        blockManager,
        storageManager,
        container: `#${id}`,
        fromElement: false,
        plugins: [basic, ...plugins]
      });

      e.Panels.removeButton('views', 'open-sm');
      // e.Panels.removeButton('views', 'open-tm');
      e.Panels.removePanel('views-container');
      setTimeout(() => {
        console.log(e.Commands.get('open-layers'));
      });
      const defaultType = e.DomComponents.getType('default');
      const defaultModel = defaultType.model;
      const defaultView = defaultType.view;
      components.forEach((component: any) => {
        e.DomComponents.addType(component.type, {
          model: defaultModel.extend(
            {
              defaults: Object.assign({}, defaultModel.prototype.defaults)
            },
            {
              isComponent: component.isComponent.bind(this)
            }
          ),
          view: defaultView.extend({
            events: {
              ...component.events
            },
            render: component.render.bind(this)
          })
        });
      });
      blocks.forEach((block: any) => {
        e.BlockManager.add(block.id, block);
      });
      setEditor(e);
    } else {
      if (document) {
        document.getElementById(id).append(editor.render());
      }
    }

    return function cleanup() {
      if (editor) {
        editor.destroy();
        GrapesJS.editors = GrapesJS.editors.filter(e => e !== editor);
      }
    };
  }, []);

  return (
    <div id={id}>
      <Head>
        <link rel='stylesheet' href='/static/grapesjs/css/grapes.min.css' />
      </Head>
    </div>
  );
};
