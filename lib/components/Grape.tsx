import GrapesJS from "grapesjs";
import Head from "next/head";
import { useEffect, useState, forwardRef } from "react";
import basicBlocks from "./Grape/Blocks/Basic/index";
import basicComponents from "./Grape/Components/index";

import "./Grape/Elements";

export default forwardRef(
  (
    {
      id = "grapesjs-react-editor",
      content = "",
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
        window.dispatchEvent(new Event("resize"));
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
              "rsys:save": {
                keys: "⌘+s, ctrl+s",
                handler: save
              }
            }
          },
          plugins: [basicBlocks, basicComponents, ...plugins]
        });

        const wrapperStyle = e.getWrapper().view.$el[0].style;
        wrapperStyle.display = "flex";
        wrapperStyle.alignItems = "stretch";
        wrapperStyle.flexDirection = "column";

        blocks.forEach((block: any) => {
          e.BlockManager.add(block.id, block);
        });
        setEditor(e);
        setupEditor(e);
        e.Panels.removeButton("options", "export-template");
        e.Panels.removeButton("views", "open-sm");
        e.Panels.removePanel("views-container");
        e.runCommand("open-blocks");

        const openTmRun = e.Commands.get("open-tm").run;
        e.Commands.extend("open-tm", {
          run: function(editor, sender) {
            openTmRun.bind(this)(editor, sender);
            const tmv = this.$cn2[0];
            if (tmv && tmv.children.length === 2)
              tmv.removeChild(tmv.childNodes[0]);
          }
        });
        e.setComponents(content);
        (window as any).ed = e;

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
          <link rel="stylesheet" href="/static/grapesjs/css/grapes.min.css" />
        </Head>
      </div>
    );
  }
);
