import React, { useEffect } from 'react';
import styles from './product.module.scss'
import Product from '@/components/Product';
import ProductService from 'services/ProductService';
import { useDispatch } from 'react-redux';
import { setCatalogOpen } from '@/store/slices/catalog';
import Head from 'next/head';
import useLanguage from '@/hooks/useLanguage';
import useTranslation from 'next-translate/useTranslation';
import { IProduct } from '@/interfaces/product';

export async function getServerSideProps(context) {
    const { id } = context.query;
    const data = await ProductService.getOne(id as string)
    return {
      props: {
        product: data
       }
    }
}

const ProductPage: React.FC<{ product: IProduct }>= ({ product }) => {

    const { language } = useLanguage();

    const { t } = useTranslation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCatalogOpen(true));
    }, [])

    return (
        <>
            <Head>
                <title>{product?.name[language]}</title>
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
                    content={product?.name[language]}
                />
                <meta
                    property="og:description"
                    content={t(`common:pagesMeta.general.description`)}
                />
                <meta
                    property="og:image"
                    content={product?.image}
                />
            </Head>
            <div className={styles.product}>
                <div className={styles['container-xl']}>
                    {product ? <Product product={product} /> : null}
                </div>
            </div>
        </>
    )
};


export default ProductPage
