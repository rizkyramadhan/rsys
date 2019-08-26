import React, { useEffect } from 'react';
import Header from '@components/Header';
import Router from 'next/router';

const Page = (_props: any) => {
  useEffect(() => {
    Router.replace('/editor/pages');
  }, []);
  return <></>;
};

export default Page;
