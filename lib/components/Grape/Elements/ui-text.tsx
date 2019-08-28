import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { defineElement } from './util';

const name = 'text';
const state = observable({
  attr: {} as any
});
const ReactEl = observer(() => {
  return <div>{state.attr.title}</div>;
});

export default defineElement(name, state, ReactEl);
