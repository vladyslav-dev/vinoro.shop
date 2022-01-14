import React from 'react'
import SortSelect from '@/components/SortSelect'
import Ranger from '@/components/Ranger';
import TotalItemCount from '@/components/TotalItemCount';
import styles from './ToolBar.module.scss'

interface ToolBarProps {
    products: Array<any>;
    setRange?: any;
    updateProductList: any;
}

const ToolBar = ({ products, setRange, updateProductList }: ToolBarProps) => {

    const rangeHandler = (e) => {
        setRange(e.target.name)
    }

    return (
        <div className={styles.categoryToolbar}>
            <SortSelect updateProductList={updateProductList} defaultProductList={products} />
            <div className={styles.rangerTotalItem}>
                <Ranger rangeHandler={rangeHandler} />
                <TotalItemCount products={products} />
            </div>
        </div>
    )
}

export default ToolBar
