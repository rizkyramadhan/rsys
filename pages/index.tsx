import api from '@lib/api';
import theme from '@lib/theme';
import { observer, useObservable } from 'mobx-react-lite';
import Router, { useRouter } from 'next/router';
import {
  Label,
  PrimaryButton,
  ProgressIndicator,
  TextField
} from 'office-ui-fabric-react';
import React, { useEffect } from 'react';

const Page = (props: any) => {
  const router = useRouter();
  const state = useObservable({
    name: '',
    loading: false,
    ready: false
  });
  useEffect(() => {
    const fetch = async () => {
      const res = await api.get('file/isready');
      if (res.ready) {
        Router.replace('/editor');
      }
      setTimeout(() => {
        state.ready = true;
      }, 1500);
    };
    fetch();
  }, []);
  const submit = async () => {
    if (state.name) {
      state.loading = true;
      const res = await api.get(`file/setup?name=${state.name}`);
      state.loading = false;
      if (res.success) {
        router.replace('/editor');
      } else {
        alert(res.reason);
      }
    }
  };

  if (!state.ready) return null;
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
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.white
      }}
    >
      <code style={{ fontSize: 25, color: theme.palette.black }}>
        ╦═╗╔═╗╦ ╦╔═╗
        <br />
        ╠╦╝╚═╗╚╦╝╚═╗
        <br />
        ╩╚═╚═╝ ╩ ╚═╝
        <br />
      </code>
      {state.loading ? (
        <div style={{ textAlign: 'center' }}>
          <ProgressIndicator styles={{ root: { width: 150 } }} />
          <Label>Creating Project...</Label>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <TextField
            label='Create New Project'
            value={state.name}
            theme={theme}
            styles={{ root: { width: 200 } }}
            onKeyDown={(e: any) => {
              if (e.keyCode == 13) {
                submit();
              }
            }}
            onChange={(e: any) => {
              state.name = e.target.value.replace(/\W/g, '');
            }}
          ></TextField>
          <PrimaryButton theme={theme} onClick={submit} style={{ margin: 10 }}>
            Create
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default observer(Page);
