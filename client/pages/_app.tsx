import React from 'react';
import App, { AppProps } from 'next/app';
import axios from 'axios';
import '@/styles/reset.scss';
import '@/styles/index.scss';
import { ICategory } from '@/interfaces/ICategory';
import Layout from '@/components/Layout'

interface MyAppProps extends AppProps {
  category: Array<ICategory>;
}

function MyApp({ Component, pageProps, category }: MyAppProps) {
  return (
    <>
      <Layout category={category}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { data } = await axios.get('http://localhost:3000/api');
  return {
    ...appProps,
    category: data.category,
  }

}


export default MyApp
