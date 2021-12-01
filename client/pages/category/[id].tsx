import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';
import styles from './category.module.scss';
import CardList from '@/components/CardList';
import CategoryTree from '@/components/CategoryTree';
import ToolBar from '@/components/ToolBar'
import { IProduct } from '@/interfaces/IProduct';
import { ICategory } from '@/interfaces/ICategory';

interface CategoryProps {
    products?: Array<IProduct>;
    category?: Array<ICategory>;
    success?: boolean;
}

type RangeType = "sm" | "md" | "lg"

const Category = ({ products, category, success }: CategoryProps) => {

    const [isTreeOpen, setIsTreeOpen] = useState<boolean>(true)
    const [animate, setAnimate] = useState(false);

    const [productList, setProductList] = useState<Array<IProduct>>(products);

    const [range, setRange] = useState<RangeType>("md")

    useEffect(() => {
        if (!success) Router.push("/")
    }, [])

    useEffect(() => setProductList(products), [products])

    if (!success) { // stop rendering
        return null
    }

    const categoryTreeHandler = () => {
        setIsTreeOpen(!isTreeOpen)
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
                    <ToolBar products={products} setAnimate={setAnimate} setRange={setRange} updateProductList={setProductList} />
                    <div className={styles.categoryList}>
                        <CardList products={productList} animate={animate} customStyles={getCurrentRange()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const { data } = await axios.get(`${process.env.DOMAIN}api/category/${query.id}`);

    return {
        props: {
            products: data.products,
            category: data.category,
            success: data.success
        }
    }
}

export default Category;