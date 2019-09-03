import api from '@lib/api';
import Container from '@lib/components/Container';
import FileTree, { sortFileTree } from '@lib/components/File/FileTree';
import RootDrop from '@lib/components/File/RootDrop';
import store from '@lib/store';
import _ from 'lodash';
import { observer, useObservable } from 'mobx-react-lite';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd-cjs';
import HTML5Backend from 'react-dnd-html5-backend-cjs';

const Grape = dynamic(import('@lib/components/Grape'), {
  ssr: false
});
let editor = null;
const save = async () => {
  console.log(editor.getHtml());
  return;
  await api.post('file/save', {
    content: editor.getHtml()
  });
};
const Page = (_props: any) => {
  const data = useObservable({
    project: '',
    dir: [] as any[],
    selected: './HomeScreen.tsx',
    draghovered: '',
    contextmenu: '',
    loading: true
  });
  useEffect(loadDir.bind(data), []);
  useEffect(expandDir.bind(data), [data.selected]);
  useEffect(() => {
    window.addEventListener('keydown', saveKey, false);
    const fetch = async () => {
      if (data.selected) {
        store.activePage.content = await readFile();
        store.activePage.path = data.selected;
      }
    };
    fetch();

    return () => {
      window.removeEventListener('keydown', saveKey);
    };
  }, []);

  const readFile = async () => {
    const res = await api.get(`file/read?path=${data.selected}`);
    // store.activePage.path = data.selected;
    // store.activePage.content = res;
    return res;
  };

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <div
          style={{
            flexBasis: 250,
            borderRight: '1px solid rgba(255,255,255,.2)'
          }}
        >
          <DndProvider backend={HTML5Backend}>
            <FileTree
              path='./'
              contextmenu={data.contextmenu}
              onContextMenu={(file: any) => {
                data.contextmenu = file.relativePath;
              }}
              onSelect={(file: any) => {
                if (file.type === 'file') {
                  data.selected = file.relativePath;
                  data.selected;
                }
              }}
              onDragHover={(from: any, to: any) => {
                if (to.type === 'dir') {
                  data.draghovered = to.relativePath;
                  setTimeout(() => {
                    to.expanded = true;
                  }, 300);
                } else data.draghovered = '';
              }}
              onDrop={(from: any, to: any, dropIndex: number) => {
                data.draghovered = '';
                if (from.path.indexOf(from.file.relativePath) === 0) {
                  return;
                }
                if (
                  to.type === 'dir' &&
                  to.children &&
                  to.children.indexOf(from.file) < 0
                ) {
                  if (data.selected === from.file.relativePath) {
                    setTimeout(() => {
                      data.selected = from.path + from.file.name;
                    });
                  }
                  // Api.move(
                  //   from.file.relativePath,
                  //   from.path + '/' + from.file.name
                  // );
                  from.file.relativePath = from.path + from.file.name;
                  to.children.push(from.file);
                  from.parent.splice(from.index, 1);
                  from.index = dropIndex;
                }
              }}
              draghovered={data.draghovered}
              selected={data.selected}
              level={0}
              dir={data.dir}
            />
            <RootDrop
              onDrop={(from: any) => {
                if (data.dir.indexOf(from.file) < 0) {
                  // Api.move(from.file.relativePath, './' + from.file.name);
                  data.draghovered = '';
                  from.file.relativePath = './' + from.file.name;
                  from.parent.splice(from.index, 1);
                  data.dir.push(from.file);
                }
              }}
            />
          </DndProvider>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex'
          }}
        >
          <Grape
            content={store.activePage.content}
            setupEditor={e => {
              editor = e;
            }}
            save={saveKey}
          />
        </div>
      </div>
    </Container>
  );
};

export default observer(Page);

const saveKey = function(e) {
  if ((e.metaKey || e.ctrlKey) && e.keyCode == 83) {
    if (e._parentEvent) {
      e._parentEvent.preventDefault();
      e._parentEvent.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
    save();
  }
};

const loadDir: any = function(this: any) {
  const data = this;
  data.loading = true;
  const load = async () => {
    const res = await api.get('file/list');
    data.dir = sortFileTree(res.children);
    expandDir.bind(data)();
    data.loading = false;
  };
  load();
  return () => {};
};

const recurseExpandFind = (array: any[], find: string, parent?: any) => {
  let found = undefined;
  _.each(array, i => {
    if (i.relativePath === find) {
      found = i;
      if (parent) {
        parent.expanded = true;
      }
    } else if (i.children) {
      let f: any = recurseExpandFind(i.children, find, i);
      if (f) {
        found = f;
        if (parent) {
          parent.expanded = true;
        }
      }
    }
  });
  return found;
};

const expandDir: any = function(this: any) {
  const data = this;
  if (data.selected) {
    recurseExpandFind(data.dir, data.selected);
  }
};
