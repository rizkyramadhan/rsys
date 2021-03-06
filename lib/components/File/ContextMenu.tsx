import { Callout, DirectionalHint, Nav } from 'office-ui-fabric-react';
import React from 'react';
import { lightTheme } from '@lib/theme';
import api from '@lib/api';

// create your menu first
export default ({
  cref,
  onContextMenu,
  file,
  onRename,
  onDelete,
  parent
}: any) => (
  <>
    <Callout
      target={cref}
      theme={lightTheme}
      directionalHint={DirectionalHint.rightCenter}
    >
      <Nav
        theme={lightTheme}
        styles={{ root: { width: 300 } }}
        expandButtonAriaLabel='Expand or collapse'
        onLinkClick={e => {
          onContextMenu({});
        }}
        selectedKey=''
        groups={[
          {
            links:
              file.type === 'dir'
                ? [
                    {
                      key: 'new-file',
                      name: 'New Component',
                      url: '',
                      iconProps: {
                        iconName: 'FileHTML',
                        style: {
                          color: 'purple'
                        }
                      },
                      onClick: () => {
                        file.expanded = true;
                        file.children.push({
                          isNew: true,
                          type: 'file',
                          name: '.tsx',
                          relativePath: file.relativePath + '/.tsx'
                        });
                        onContextMenu({});
                      }
                    },
                    {
                      key: 'new-dir',
                      name: 'New Directory',
                      url: '',
                      iconProps: {
                        iconName: 'Folder',
                        style: {
                          color: '#222'
                        }
                      },
                      onClick: () => {
                        file.expanded = true;
                        file.children.push({
                          isNew: true,
                          type: 'dir',
                          name: '',
                          children: [],
                          relativePath: file.relativePath + '/'
                        });
                        onContextMenu({});
                      }
                    },
                    {
                      key: 'rename',
                      name: 'Rename',
                      url: '',
                      iconProps: {
                        iconName: 'Rename',
                        style: {
                          color: '#222'
                        }
                      },
                      onClick: () => {
                        onContextMenu({});
                        onRename(file);
                      }
                    },
                    {
                      key: 'delete',
                      name: 'Delete',
                      url: '',
                      iconProps: {
                        iconName: 'Delete',
                        style: {
                          color: '#222'
                        }
                      },
                      onClick: () => {
                        onContextMenu({});
                        setTimeout(() => {
                          if (window.confirm('Are you sure ?')) {
                            onDelete(file);
                            api.get(`file/del?path=${file.relativePath}`);
                          }
                        });
                      }
                    }
                  ]
                : [
                    {
                      key: 'rename',
                      name: 'Rename',
                      url: '',
                      iconProps: {
                        iconName: 'Rename',
                        style: {
                          color: '#222'
                        }
                      },
                      onClick: () => {
                        onRename(file);
                        onContextMenu({});
                      }
                    },
                    {
                      key: 'delete',
                      name: 'Delete',
                      url: '',
                      iconProps: {
                        iconName: 'Delete',
                        style: {
                          color: '#222'
                        }
                      },
                      onClick: () => {
                        onContextMenu({});
                        setTimeout(() => {
                          if (window.confirm('Are you sure ?')) {
                            onDelete(file);
                            api.get(`file/del?path=${file.relativePath}`);
                          }
                        });
                      }
                    }
                  ]
          }
        ]}
      />
    </Callout>
  </>
);
