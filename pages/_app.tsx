import '@/styles/reset.scss';
import '@/styles/index.scss';
import { useEffect } from 'react';
import axios from 'axios';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import App, { AppProps, AppContext } from 'next/app';
import { ICategory } from '@/interfaces/ICategory';
import { GlobalContextProvider } from '@/store/index';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from 'layout';


const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};


MyApp.getInitialProps = async (context: AppContext) => {
  const defaultAppProps = await App.getInitialProps(context);
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}api`)
  return {
    ...defaultAppProps,
    category: data.category,
  }
}

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

interface MyAppProps extends AppProps {
  category: Array<ICategory>;
}

function MyApp({ Component, pageProps, category } : MyAppProps) {

  const router = useRouter()

  Router.events.on("routeChangeComplete", routeChange);
  Router.events.on("routeChangeStart", routeChange);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div className="global-wrapper">
      <GlobalContextProvider categoryData={category}>
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              exit="pageExit"
              variants={{
                  pageInitial: {
                      opacity: 0,
                  },
                  pageAnimate: {
                      opacity: 1,
                  },
                  pageExit: {
                      backgroundColor: "rgba(255, 255, 255, .5)",
                      opacity: 0,
                  }
              }}
              transition={{
                  x: { type: "spring", stiffness: 100 },
                  default: { duration: .3 },
                }}
            >
              <Component key={router.asPath} {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </GlobalContextProvider>
    </div>
)}

export default MyApp
