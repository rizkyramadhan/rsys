import GrapesJS from 'grapesjs';
import Head from 'next/head';
import { useEffect, useState, forwardRef } from 'react';
import basic from './Grape/Blocks/Basic/index';

import "./Grape/Elements";

export default forwardRef(
  (
    {
      id = 'grapesjs-react-editor',
      content = '',
      components = [],
      blocks = [],
      plugins = [],
      blockManager,
      storageManager,
      save = () => {},
      setupEditor = e => {}
    }: any,
    ref: any
  ) => {
    const [editor, setEditor] = useState(null);

    useEffect(() => {
      if (editor) {
        editor.setComponents(content);
      }
    }, [content]);

    useEffect(() => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 2000);
      if (!editor) {
        const e = GrapesJS.init({
          blockManager,
          storageManager,
          container: `#${id}`,
          fromElement: true,
          components: content,
          keymaps: {
            defaults: {
              'rsys:save': {
                keys: '⌘+s, ctrl+s',
                handler: save
              }
            }
          },
          plugins: [basic, ...plugins]
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
        setupEditor(e);
        e.Panels.removeButton('options', 'export-template');
        e.Panels.removeButton('views', 'open-sm');
        e.Panels.removePanel('views-container');
        e.setComponents(content);

        if (ref) {
          ref.current = editor;
        }
      } else {
        if (document) {
          document.getElementById(id).append(editor.render());
          editor.setComponents(content);
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
  }
);
