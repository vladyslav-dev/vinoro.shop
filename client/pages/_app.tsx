import React, { useEffect, useContext } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import axios from 'axios';
import '@/styles/reset.scss';
import '@/styles/index.scss';
import { ICategory } from '@/interfaces/ICategory';
import Layout from '@/components/Layout'
import { GlobalContextProvider } from '@/store/index';

// import Router from "next/router";

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

function MyApp({ Component, pageProps, category, router }: MyAppProps) {
  return (
    <>
      <GlobalContextProvider>
        <Layout category={category} router={router}>
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
