import React from 'react'
import styles from './TotalPrice.module.scss'
import { totalPrice } from '@/utils/totalPrice'

const TotalPrice = ({products}) => {
    return (
        <div className={styles.orderPrice}>
            <p>Итого: </p>
            <p>{totalPrice(products)} UAN</p>
        </div>
    )
}

export default TotalPrice
