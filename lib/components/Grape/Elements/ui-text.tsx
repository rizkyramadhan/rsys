import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { defineElement } from './util';

const name = 'text';
const ReactEl = observer(({ state }: any) => {
  return (
    <>
      {!state.attr.title ? (
        <div
          style={{
            color: '#9a9a9a'
          }}
        >
          {'<empty>'}
        </div>
      ) : (
        <div>{state.attr.title}</div>
      )}
    </>
  );
});

export default defineElement(name, ReactEl);
