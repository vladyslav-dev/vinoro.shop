import React from 'react';
import axios from 'axios';
import CategoryList from '@/components/CategoryList';

const Category = ({ products }) => {
    return (
        <CategoryList products={products} />
    )
}

export const getServerSideProps = async ({ query }) => {
    const { data } = await axios.get(`http://localhost:3000/api/category/${query.id}`);
    return {
        props: {
            products: data.products
        },
    }

}

export default Category;