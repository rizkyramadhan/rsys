import fetch from 'isomorphic-unfetch';
import React, { useEffect } from 'react';
import Container from '@components/Container';

const Page = (_props: any) => {
  useEffect(() => {}, []);
  return <Container></Container>;
};

Page.getInitialProps = async ({ req }: any) => {
  if (req) {
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count, path: process.cwd() };
  }

  return {};
};

export default Page;
