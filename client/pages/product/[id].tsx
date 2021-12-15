<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useEffect } from 'react'
import Router from 'next/router';
>>>>>>> Stashed changes
import styles from './product.module.scss'
import axios from 'axios';
import ProductPage from '@/components/ProductPage';
import PersonalDataForm from '@/components/PersonalDataForm';

const Product = ({ product }) => {
<<<<<<< Updated upstream
=======
    
    useEffect(() => {
        if (!product) Router.push("/")
    }, [])

>>>>>>> Stashed changes
    return (
        <>
            <div className={styles.container}>
                <ProductPage product={product} />
            </div>
        </>
    )
}

export const getServerSideProps = async ({ query }) => {

    const { data } = await axios.get(`http://localhost:3000/api/product/${query.id}`);

    return {
        props: {
            product: data.product
        }
    }
}


export default Product
