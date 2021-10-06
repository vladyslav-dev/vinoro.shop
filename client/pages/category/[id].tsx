import React from 'react';
import axios from 'axios';
import CardList from '@/components/CardList';
import CardFilter from '@/components/CardFilter'
import CategoryTree from '@/components/CategoryTree'

const Category = ({ products, category }) => {
    return (
        <>
            <CardFilter />
            <CategoryTree category={category}/>
            <CardList products={products} />
        </>
    )
}

export const getServerSideProps = async ({ query }) => {
    const { data } = await axios.get(`http://localhost:3000/api/category/${query.id}`);
    return {
        props: {
            products: data.products,
            category: data.category
        }
    }
}

export default Category;