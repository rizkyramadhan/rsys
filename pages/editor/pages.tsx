import fetch from 'isomorphic-unfetch';
import React, { useEffect } from 'react';
import Container from '@lib/components/Container';
import dynamic from 'next/dynamic';
import { observer, useObservable } from 'mobx-react-lite';
const Grape = dynamic(import('@lib/components/Grape'), {
  ssr: false
});
const Page = (_props: any) => {
  const state = useObservable({
    content: ''
  });
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
          <Grape content={state.content} />
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
