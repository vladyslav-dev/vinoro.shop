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
import SocialMedia from '@/components/SocialMedia';
import Link from 'next/link';

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
            <>
            <Component {...pageProps} />
            <div style={{
                width: "100vw",
                minHeight: "70px",
                background: "black",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 99999,
                padding: "12px 20px",
                boxSizing: "border-box",
            }}>
                <p style={{ textAlign: "center", fontSize: "13px", lineHeight: "28px"}}>
                Сайт тимчасово <span style={{ textTransform: "uppercase", fontWeight: "bold", color: '#7c7bff'}}>не приймає замовлення</span>, але ви маєте можливість переглянути товар та за бажанням зробити замовлення написавши на <Link href="viber://chat?number=+380995238607"><a style={{ color: '#7c7bff'}}>Viber 099-523-86-07</a></Link>. Дякуємо за розуміння.
                  </p>
                {/* <div className="socMedia">
                    <SocialMedia color="#fff" />
                </div> */}
            </div>
            </>
          </Layout>
        </InnerApp>
      </Provider>
    </SWRConfig>
  );
}

export default RootApp;