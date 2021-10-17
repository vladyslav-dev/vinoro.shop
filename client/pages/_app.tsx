import React from 'react';
import App, { AppProps, AppContext } from 'next/app';
import axios from 'axios';
import '@/styles/reset.scss';
import '@/styles/index.scss';
import { ICategory } from '@/interfaces/ICategory';
import Layout from '@/components/Layout'
import { GlobalContextProvider } from '@/store/index';

interface MyAppProps extends AppProps {
  category: Array<ICategory>;
}

function MyApp({ Component, pageProps, category }: MyAppProps) {
  return (
    <>
      <GlobalContextProvider>
        <Layout category={category}>
          <Component {...pageProps} />
        </Layout>
      </GlobalContextProvider>
    </>
  )
}

MyApp.getInitialProps = async (context: AppContext) => {
  const defaultAppProps = await App.getInitialProps(context);
  const { data } = await axios.get('http://localhost:3000/api');
  return {
    ...defaultAppProps,
    category: data.category,
  }

}


export default MyApp
