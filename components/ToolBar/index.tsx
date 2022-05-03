import React from 'react'
import SortSelect from '@/components/SortSelect'
import TotalItemCount from '@/components/TotalItemCount';
import styles from './ToolBar.module.scss';
import { IProduct } from '@/interfaces/product';

interface ToolBarProps {
    products: Array<IProduct>;
    updateProductList: any;
}

const ToolBar = ({ products, updateProductList }: ToolBarProps) => {

    return (
        <div className={styles.categoryToolbar}>
            <SortSelect updateProductList={updateProductList} products={products} />
            <div className={styles.rangerTotalItem}>
                <TotalItemCount products={products} />
            </div>
        </div>
    )
}

export default ToolBar
