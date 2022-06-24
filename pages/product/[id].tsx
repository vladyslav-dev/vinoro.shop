import React, { useEffect } from 'react';
import styles from './product.module.scss'
import Product from '@/components/Product';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ProductService from 'services/ProductService';
import { useDispatch } from 'react-redux';
import { setCatalogOpen } from '@/store/slices/catalog';
import Head from 'next/head';
import useLanguage from '@/hooks/useLanguage';
import useTranslation from 'next-translate/useTranslation';

const ProductPage: React.FC= () => {

    const { language } = useLanguage();

    const { t } = useTranslation();

    const router = useRouter()

    const dispatch = useDispatch();

    const { data: product } = useSWR(`PRODUCT-GET-ONE-${router.query.id}`, async () => {
        return await ProductService.getOne(router.query.id as string)
    })

    useEffect(() => {
        dispatch(setCatalogOpen(true));
    }, [])

    if (!product) {
        return null;
    }

    return (
        <>
            <Head>
                <title>{product.name[language]}</title>
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
                    content={product.name[language]}
                />
                <meta
                    property="og:description"
                    content={t(`common:pagesMeta.general.description`)}
                />
                <meta
                    property="og:image"
                    content={product?.image.replace('.webp', '.jpeg')}
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
