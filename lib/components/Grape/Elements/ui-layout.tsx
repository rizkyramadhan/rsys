import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { defineElement } from './util';

const name = 'layout';
const state = observable({
  attr: {} as any
});
const slot = { __html: '<slot/>' };
const ReactEl = observer(() => {
  return <div dangerouslySetInnerHTML={slot}></div>;
});

export default defineElement(name, state, ReactEl);
