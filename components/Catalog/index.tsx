import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './Catalog.module.scss';
import ToolBar from '@/components/ToolBar';
import CardList from '@/components/CardList';

interface CatalogProps {
    products?: any;
    alt?: any;
}

const Catalog: React.FC<CatalogProps> = ({ products, alt: alternateComponent }) => {

    const router = useRouter()

    const [productList, setProductList] = useState(products);

    useEffect(() => setProductList(products), [products])

    return (
        <div className={styles.wrraper}>
            {products?.length ?
                (
                    <>
                        <ToolBar products={products} updateProductList={setProductList} />
                        <div className={styles.catalogList}>
                            <CardList
                                products={productList}
                                removeButton={router.pathname === '/favorite'}
                            />
                        </div>
                    </>
                )
                :
                (
                    <>{alternateComponent}</>
                )
            }
        </div>
    )
}

export default Catalog;