import React, { useEffect } from 'react';
import styles from './product.module.scss'
import Product from '@/components/Product';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ProductService from 'services/ProductService';

const ProductPage: React.FC= () => {

    const router = useRouter()

    const { data: product } = useSWR(`PRODUCT-GET-ONE-${router.query.id}`, async () => {
        return await ProductService.getOne(router.query.id as string)
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (!product) {
        return null;
    }

    return (
        <div className={styles.product}>
            <div className={styles['container-xl']}>
                {product ? <Product product={product} /> : null}
            </div>
        </div>
    )
};


export default ProductPage
