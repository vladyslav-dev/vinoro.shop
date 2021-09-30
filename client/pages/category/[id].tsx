import React from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import CategoryList from '../../components/CategoryList';


const Category = ({ products }) => {

    return (
        <Layout category={[]}>
            <CategoryList products={products} />
        </Layout>
    )
}



Category.getInitialProps = async ({ query }) => {
    // console.log(query)
    const { data } = await axios.get(`http://localhost:3000/api/category/${query.id}`);
    // console.log(data)
    return {
        products: data.products,
    }

}

export default Category;