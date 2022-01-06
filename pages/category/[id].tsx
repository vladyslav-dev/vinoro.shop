import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ToolBar from '@/components/ToolBar'
import styles from './category.module.scss';
import CardList from '@/components/CardList';
import { getCurrentRange } from '@/utils/index';
import { IProduct } from '@/interfaces/IProduct';
import useCurrentCategory from '@/hooks/useCurrentCategory';

interface CategoryProps {
    products?: Array<IProduct>;
}

type RangeType = "sm" | "md" | "lg"

const Category = ({ products }: CategoryProps) => {

    const router = useRouter()

    const { setCurrentCategory } = useCurrentCategory(router.query.id as string)

    const [animate, setAnimate] = useState(false);

    const [productList, setProductList] = useState<Array<IProduct>>(products);

    const [range, setRange] = useState<RangeType>("md")

    useEffect(() => {
        if (!products) router.push("/")
    }, [])

    useEffect(() => setCurrentCategory(router.query.id as string), [router])

    useEffect(() => setProductList(products), [products])

    return (
        <div className={styles.category}>
            <div className={styles["container-xl"]}>
                <div className={styles.categoryWrapper}>
                    <div className={styles.categoryContent}>
                        <ToolBar products={products} setAnimate={setAnimate} setRange={setRange} updateProductList={setProductList} />
                        <div className={styles.categoryList}>
                            <CardList products={productList} animate={animate} customStyles={getCurrentRange(range)} />
                        </div>
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
        }
    }
}

export default Category;