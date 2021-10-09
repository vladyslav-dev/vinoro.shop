import React, { useState } from 'react';
import axios from 'axios';
import styles from './category.module.scss';
import CardList from '@/components/CardList';
import CardFilter from '@/components/CardFilter'
import Ranger from '@/components/Ranger';
import CategoryTree from '@/components/CategoryTree';

const Category = ({ products, category }) => {
    const [hideTree, setHideTree] = useState(false)

    const hideHandler = () => {
        setHideTree(!hideTree)
    }

    return (
        <div className={styles["container-xl"]}>
            <div className={styles.categoryWrapper}>
                <CategoryTree category={category} hideTree={hideTree} hideHandler={hideHandler} currentCategoryId={products[0].category}/>
                <div className={styles.categoryContent}>
                    <div className={styles.categoryToolbar}>
                        <CardFilter />
                        <Ranger />
                    </div>
                    <div className={styles.categoryList}>
                        <CardList products={products} customStyles={{}} />
                    </div>
                </div>
            </div>
        </div>
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