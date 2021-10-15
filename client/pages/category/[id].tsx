import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './category.module.scss';
import CardList from '@/components/CardList';
import SortSelect from '@/components/SortSelect'
import Ranger from '@/components/Ranger';
import CategoryTree from '@/components/CategoryTree';
import { IProduct } from '@/interfaces/IProduct';
import { ICategory } from '@/interfaces/ICategory';

interface CategoryProps {
    products: Array<IProduct>;
    category: Array<ICategory>;
}

let index = 0;

const Category = ({ products, category }: CategoryProps) => {

    console.log("Props from category ", index)

    const [isTreeOpen, setIsTreeOpen] = useState<boolean>(true)
    const [animate, setAnimate] = useState(false);

    const [productList, setProductList] = useState<Array<IProduct>>(products);

    useEffect(() => setProductList(products), [products])

    const categoryTreeHandler = () => {
        setIsTreeOpen(!isTreeOpen)
    }

    type RangeType = "sm" | "md" | "lg"

    const [range, setRange] = useState<RangeType>("lg")

    const rangeHandler = e => {
        setAnimate(prevState => !prevState);
        setRange(e.target.name)

    }

    const getCurrentRange = () => {
        switch (range) {
            case "lg":
                return {
                    gridTemplateColumns: `repeat(${isTreeOpen ? 3 : 4}, 1fr)`
                }
            case "md":
                return {
                    gridTemplateColumns: `repeat(${isTreeOpen ? 4 : 5}, 1fr)`
                }
            case "sm":
                return {
                    gridTemplateColumns: `repeat(${isTreeOpen ? 5 : 6}, 1fr)`
                }
            default:
                return {
                    gridTemplateColumns: `repeat(${isTreeOpen ? 4 : 5}, 1fr)`
                }
        }
    }

    return (
        <div className={styles["container-xl"]}>
            <div className={styles.categoryWrapper}>
                <CategoryTree
                    category={category}
                    isTreeOpen={isTreeOpen}
                    treeHandler={categoryTreeHandler}
                    currentCategoryId={products[0].category}
                />
                <div className={styles.categoryContent}>
                    <div className={styles.categoryToolbar}>
                        <SortSelect updateProductList={setProductList} defaultProductList={products} setAnimate={setAnimate} />
                        <Ranger rangeHandler={rangeHandler} />
                    </div>
                    <div className={styles.categoryList}>
                        <CardList products={productList} animate={animate} customStyles={getCurrentRange()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const { data } = await axios.get(`http://localhost:3000/api/category/${query.id}`);
    // console.log("server side props ", data)
    return {
        props: {
            products: data.products,
            category: data.category
        }
    }
}

export default Category;