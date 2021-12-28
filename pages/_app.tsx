import React, { useState } from 'react';
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
  data: Array<ICategory>;
}

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp(props: MyAppProps) {
  const { Component, pageProps, data, router } = props

  const [category, setCategory] = useState(data)

  React.useEffect(() => { 
    console.log("Rerender _App")
    
  }, [])



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
let index = 0;
MyApp.getInitialProps = async (context: AppContext) => {
  console.log(" ! ================== typeof window: ", typeof window)
  console.log("index App: ", index++)
  if (typeof window !== 'undefined') {
    
    console.log("browser side")
    // browser-side, fetch data directly in component
    return { }
  } else {
    console.log("server side")

    const defaultAppProps = await App.getInitialProps(context);
  const { data } = await axios.get(`${process.env.DOMAIN}api`);
  return {
    ...defaultAppProps,
    data: data.category,
  }
  }

  
}


export default MyApp
