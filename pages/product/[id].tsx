import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styles from './product.module.scss'
import { IProduct } from '@/interfaces/IProduct';
import Product from '@/components/Product';
import useCurrentCategory from '@/hooks/useCurrentCategory';

interface ProductProps {
    product?: IProduct;
    category?: {
        _id: string;
        category_name: string;
    };
}

const ProductPage: React.FC<ProductProps>= ({ product, category }) => {

    const router = useRouter();
    
    useCurrentCategory(product.category as string);
                    
    useEffect(() => {
        if (!product) router.push("/");
    }, [])

    return (
        <div className={styles.product}>
            <div className={styles.container}>
                {product ? <Product product={product} category={category} /> : null}
            </div>
        </div>
    )
};

export const getServerSideProps = async ({ query, locale }) => {

    const { data } = await axios.get(`${process.env.DOMAIN}api/product/${query.id}`, {params: {lang: locale}});

    return {
        props: {
            product: data?.product,
            category: data?.category
        }
    }
}


export default ProductPage
