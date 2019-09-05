import React, { useState } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd-cjs';
import { FileTreeDragItem } from './File';

export default ({ onDrop }: any) => {
  const [hov, sethov] = useState(false);
  const [, drop] = useDrop({
    accept: 'filetree',
    collect() {
      sethov(false);
    },
    hover() {
      sethov(true);
    },
    drop(item: FileTreeDragItem, monitor: DropTargetMonitor) {
      sethov(false);
      if (onDrop) {
        onDrop(item);
      }
    }
  });

  return (
    <div
      ref={drop}
      style={{ flex: 1, minHeight: 100, background: hov && '#818894' }}
    />
  );
};
