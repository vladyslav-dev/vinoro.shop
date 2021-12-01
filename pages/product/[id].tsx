import React from 'react'
import Router from 'next/router';
import styles from './product.module.scss'
import axios from 'axios';
import ProductPage from '@/components/ProductPage';

const Product = ({ product }) => {
    React.useEffect(() => {
        if (!product) Router.push("/")
    }, [])

    return (
        <>
            <div className={styles.container}>
                {product ? <ProductPage product={product} /> : null}
            </div>
        </>
    )
}

export const getServerSideProps = async ({ query }) => {

    const { data } = await axios.get(`${process.env.DOMAIN}api/product/${query.id}`);

    return {
        props: {
            product: data.product
        }
    }
}


export default Product
