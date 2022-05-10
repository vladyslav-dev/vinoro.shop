import React, { useEffect, useState } from 'react';
import styles from './search.module.scss';
import { useRouter } from 'next/router';
import EmptyCatalog from '@/components/EmptyCatalog';
import { useSWRConfig } from 'swr';
import ProductService from 'services/ProductService';
import useLanguage from '@/hooks/useLanguage';
import { IProduct, ISearchProduct } from '@/interfaces/product';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import Loader from '@/components/Loader';
import ToolBar from '@/components/ToolBar';
import CardList from '@/components/CardList';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

type ProductId = string

const Search = () => {

    const { t } = useTranslation();

    const router = useRouter();

    const { query } = router.query;

    const { language } = useLanguage();

    const { searchProducts } : { searchProducts: ISearchProduct[] }  = useSelector((state: RootState) => state.searchReducer);

    const [productList, setProductList] = useState<Array<IProduct> | null>([]);

    const { mutate } = useSWRConfig()

    useEffect(() => {
        if (query && Object.keys(searchProducts).length) {
            const q = (query as string).trim().toLowerCase();
            if (!q) return

            const productResult: Array<ProductId> = searchProducts
                .filter((item: ISearchProduct) => item.name[language].toLowerCase().includes(q))
                .map(item => item.id);

            if (!productResult.length) {
                setProductList(null);
                return;
            }

            mutate(`GET-SEARCH-PRODUCTS-${query}`, () => {
                return ProductService.getSearchProductsByIds(productResult);
            }).then(data => {
                if (!data) {
                    setProductList(null);
                } else {
                    setProductList(data)
                }
            })
        }
    }, [query, searchProducts])


    return (
        <>
            <Head>
                <title>{t(`common:pagesMeta.search.title`)}</title>
                <meta name="robots" content="noindex"></meta>
            </Head>
            <div className={styles.search}>
                <div className={styles["container-xl"]}>
                    <div className={styles.searchWrapper}>
                        {productList === null ? <EmptyCatalog textWarnings="No products" /> : !productList?.length ? (
                            <Loader />
                        ) : (
                            <div className={styles.searchContent}>
                                <ToolBar products={productList} updateProductList={setProductList} />
                                <div className={styles.searchList}>
                                    <CardList products={productList} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Search