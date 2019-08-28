import fetch from 'isomorphic-unfetch';
import React, { useEffect, useRef } from 'react';
import Container from '@lib/components/Container';
import dynamic from 'next/dynamic';
import { observer, useObservable } from 'mobx-react-lite';
import store from '@lib/store';
import api from '@lib/api';
const Grape = dynamic(import('@lib/components/Grape'), {
  ssr: false
});
let editor = null;
const save = async () => {
  const res = await api.post('file/save', {
    content: editor.getHtml()
  });
  console.log(res.json);
};
const Page = (_props: any) => {
  useEffect(() => {
    window.addEventListener('keydown', saveKey, false);
    return () => {
      window.removeEventListener('keydown', saveKey);
    };
  }, []);
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <div
          style={{
            flexBasis: 250,
            borderRight: '1px solid rgba(255,255,255,.2)'
          }}
        ></div>
        <div style={{ flex: 1 }}>
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

Page.getInitialProps = async ({ req }: any) => {
  if (req) {
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count, path: process.cwd() };
  }

  return {};
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
