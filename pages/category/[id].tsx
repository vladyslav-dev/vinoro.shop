import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import ToolBar from '@/components/ToolBar'
import styles from './category.module.scss';
import CardList from '@/components/CardList';
import { IProduct } from '@/interfaces/product';
import useCurrentCategory from '@/hooks/useCurrentCategory';
import useSWR from 'swr';
import ProductService from 'services/ProductService';
import Loader from '@/components/Loader';
import { setCatalogOpen } from '@/store/slices/catalog';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import useLanguage from '@/hooks/useLanguage';


const Category: React.FC = () => {

    const { t } = useTranslation();

    const { language } = useLanguage();

    const router = useRouter();

    const dispatch = useDispatch();

    const { currentCategory, categoryCollection } = useSelector((state: RootState) => state.catalogReducer);

    const { data: products } = useSWR(`GET-PRODUCTS-BY-CATEGORY-${router.query.id}`, async () => {
        return await ProductService.getByCategoryId(router.query.id as string)
    })

    const category = useMemo(() => {
        return categoryCollection[currentCategory]
    }, [categoryCollection, currentCategory]);

    const { setCurrentCategory } = useCurrentCategory(router.query.id as string)

    const [productList, setProductList] = useState<Array<IProduct>>([]);

    useEffect(() => setCurrentCategory(router.query.id as string), [router])

    useEffect(() => {
        dispatch(setCatalogOpen(true));
    }, [])

    useEffect(() => {
        if (products) setProductList(products)
    }, [products])

    if (!productList.length) {
        return null;
    }

    return (
        <>
            <Head>
                <title>{category.category_name[language]}</title>
                <meta
                    name="description"
                    content={t(`common:pagesMeta.general.description`)}
                />
                <meta
                    name="keywords"
                    content={t(`common:pagesMeta.general.keywords`)}
                />
                <meta
                    property="og:title"
                    content={category.category_name[language]}
                />
                <meta
                    property="og:description"
                    content={t(`common:pagesMeta.general.description`)}
                />
            </Head>
            <div className={styles.category}>
                <div className={styles["container-xl"]}>
                    <div className={styles.categoryWrapper}>
                        {!productList.length ? <Loader /> : (
                            <div className={styles.categoryContent}>
                                <ToolBar products={productList} updateProductList={setProductList} />
                                <div className={styles.categoryList}>
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

export default Category;