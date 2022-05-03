import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ToolBar from '@/components/ToolBar'
import styles from './category.module.scss';
import CardList from '@/components/CardList';
import { IProduct } from '@/interfaces/product';
import useCurrentCategory from '@/hooks/useCurrentCategory';
import useSWR from 'swr';
import ProductService from 'services/ProductService';
import Loader from '@/components/Loader';


const Category: React.FC = () => {

    const router = useRouter();

    const { data: products } = useSWR(`GET-PRODUCTS-BY-CATEGORY-${router.query.id}`, async () => {
        return await ProductService.getByCategoryId(router.query.id as string)
    })

    const { setCurrentCategory } = useCurrentCategory(router.query.id as string)

    const [productList, setProductList] = useState<Array<IProduct>>([]);

    useEffect(() => setCurrentCategory(router.query.id as string), [router])


    useEffect(() => {
        if (products) setProductList(products)
    }, [products])

    if (!productList.length) {
        return null;
    }

    return (
        <div className={styles.category}>
            <div className={styles["container-xl"]}>
                <div className={styles.categoryWrapper}>
                    {!productList.length ? <Loader /> : (
                        <div className={styles.categoryContent}>
                            <ToolBar products={productList} updateProductList={setProductList} />
                            <div className={styles.categoryList}>
                                <CardList products={productList} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category;