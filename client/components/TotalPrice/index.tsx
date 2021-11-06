import React from 'react'
import styles from './TotalPrice.module.scss'
import { totalPrice } from '@/utils/totalPrice'

const TotalPrice = ({products, title}) => {
    return (
        <div className={styles.orderPrice}>
            <p>{title}</p>
            <p>{totalPrice(products)} UAN</p>
        </div>
    )
}

export default TotalPrice
