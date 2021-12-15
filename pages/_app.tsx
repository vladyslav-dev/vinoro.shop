import React from 'react';
import App, { AppProps, AppContext } from 'next/app';
import axios from 'axios';
import Router from 'next/router';
import NProgress from 'nprogress';
import '@/styles/reset.scss';
import '@/styles/index.scss';
import { ICategory } from '@/interfaces/ICategory';
import Layout from 'layout';
import { GlobalContextProvider } from '@/store/index';


// const routeChange = () => {
//   // Temporary fix to avoid flash of unstyled content
//   // during route transitions. Keep an eye on this
//   // issue and remove this code when resolved:
//   // https://github.com/vercel/next.js/issues/17464

//   const tempFix = () => {
//     const allStyleElems = document.querySelectorAll('style[media="x"]');
//     allStyleElems.forEach((elem) => {
//       elem.removeAttribute("media");
//     });
//   };
//   tempFix();
// };

// Router.events.on("routeChangeComplete", routeChange);
// Router.events.on("routeChangeStart", routeChange);



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
      <div className="global-wrapper">
        <GlobalContextProvider>
          <Layout category={category} router={router}>
            <Component {...pageProps} />
          </Layout>
        </GlobalContextProvider>
      </div>
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
