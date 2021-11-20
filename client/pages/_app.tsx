import React, { useEffect, useContext } from 'react';
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



function MyApp(props: MyAppProps) {
  const { Component, pageProps, category, router } = props

  return (
    <>
      <GlobalContextProvider>
        <Layout category={category} router={router} isOrderLayout={router?.route === "/order"}>
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
