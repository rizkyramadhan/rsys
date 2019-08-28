import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { defineElement } from './util';

const name = 'layout';
const slot = { __html: '<slot/>' };
const ReactEl = observer(() => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
      }}
      dangerouslySetInnerHTML={slot}
    />
  );
});

export default defineElement(name, ReactEl, {
  minHeight: 30,
  padding: 10
});
