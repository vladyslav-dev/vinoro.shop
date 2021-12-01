import React, { useEffect, useContext } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import axios from 'axios';
import Router from 'next/router';
import NProgress from 'nprogress';
import '@/styles/reset.scss';
import '@/styles/index.scss';
import { ICategory } from '@/interfaces/ICategory';
import Layout from '@/components/Layout'
import { GlobalContextProvider } from '@/store/index';

interface MyAppProps extends AppProps {
  category: Array<ICategory>;
}

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
  const { data } = await axios.get(`${process.env.DOMAIN}api`);
  return {
    ...defaultAppProps,
    category: data.category,
  }

}


export default MyApp
