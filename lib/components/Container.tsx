import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import api from '@lib/api';
import { useRouter } from 'next/router';
import theme from '@lib/theme';
import store from '@lib/store';
import { observer } from 'mobx-react-lite';
import Head from 'next/head';
import { initializeIcons } from '@uifabric/icons';
initializeIcons(undefined, { disableWarnings: true });

const Header = dynamic(import('./Header'), {
  ssr: false
});
export default observer(({ children }: any) => {
  const router = useRouter();
  useEffect(() => {
    if (!store.ready) {
      api.get('file/isready').then(res => {
        store.ready = res.ready;
        if (!res.ready) {
          router.replace('/');
        }
      });
    }
  }, []);

  if (!store.ready)
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          background: theme.palette.white
        }}
      ></div>
    );

  return (
    <>
      <Head>
        <link rel='stylesheet' href='/static/main.css' />
      </Head>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          background: theme.palette.white
        }}
      >
        <Header />
        <div style={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>
          {children}
        </div>
      </div>
    </>
  );
});
