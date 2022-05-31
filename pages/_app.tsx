import '@/styles/reset.scss';
import '@/styles/font.scss';
import '@/styles/index.scss';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import { AppProps } from 'next/app';
import Layout from 'layout';
import { Provider, useDispatch } from 'react-redux';
import store from '@/store/index';
import useSWR, { SWRConfig } from 'swr'
import CategoryService from 'services/CategoryService';
import CatalogService from 'services/CatalogService';
import { setData } from '@/store/slices/catalog';
import { initBasket } from '@/store/slices/basket';
import ProductService from 'services/ProductService';
import { setSearchData } from '@/store/slices/search';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


interface RootAppProps extends AppProps {}

interface InnerAppProps {
  children: React.ReactElement;
}

const InnerApp: React.FC<InnerAppProps> = ({ children }) => {

  const dispatch = useDispatch();

  const { data: swrCatalog } = useSWR(`GET-CATALOG`, async () => await CatalogService.getAll());
  const { data: swrCategory } = useSWR(`GET-CATEGORY`, async () => await CategoryService.getAll());
  const { data: swrSearchCategory } = useSWR(`GET-SEARCH-CATEGORY`, async () => await CategoryService.getAll());
  const { data: swrSearchProducts } = useSWR(`GET-SEARCH-PRODUCTS`, async () => await ProductService.getSearchProducts());

  useEffect(() => {
    if (swrCatalog && swrCategory) {
      dispatch(setData({ catalog: swrCatalog, category: swrCategory }));
    }
  }, [swrCatalog, swrCategory])

  useEffect(() => {
    if (swrSearchCategory && swrSearchProducts) {
      dispatch(setSearchData({ searchCategory: swrSearchCategory, searchProducts: swrSearchProducts }));
    }
  }, [swrSearchCategory, swrSearchProducts])


  useEffect(() => {
    // Restore basket from localStorage
    dispatch(initBasket())
  }, [])

  return <>{children}</>
}

const RootApp = ({ Component, pageProps }: RootAppProps) => {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Provider store={store}>
        <InnerApp>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </InnerApp>
      </Provider>
    </SWRConfig>
  );
}

export default RootApp;