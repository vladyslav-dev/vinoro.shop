import React from 'react';
import axios from 'axios';
import styles from './category.module.scss';
import CardList from '@/components/CardList';
import CardFilter from '@/components/CardFilter'
import Ranger from '@/components/Ranger';

const Category = ({ products }) => {
    return (
        <div className={styles["container-xl"]}>
            <div className={styles.categoryWrapper}>
                <div className={styles.categoryTree}>
                    Component Tree
                </div>
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
            products: data.products
        },
    }

}

export default Category;