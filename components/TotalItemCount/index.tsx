import React from 'react'
import styles from './TotalItemCount.module.scss'
import { IProduct } from '@/interfaces/IProduct';

interface TotalItemCountProps {
    products?: Array<IProduct>;
}

const TotalItemCount = ( {products}: TotalItemCountProps) => (
    <div className={styles.content}>
        <p>Всего товаров: {products?.length}</p>
    </div>
)

export default TotalItemCount
  