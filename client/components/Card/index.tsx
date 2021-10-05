import Image from 'next/image'
import React from 'react'
import styles from './Card.module.scss'

import {IProduct} from '@/interfaces/IProduct'

interface Card {
    product :  IProduct
}

const Card = ({product}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image src={product.image} alt={product.name} layout='fill' className={styles.image} quality={100}/>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardAvailability}>
                    {product.availability ? <p className={styles.cardAvailabilityGreen}>Есть в наличии &#10004;</p> : <p  className={styles.cardAvailabilityRed}>Нет в наличии &#10008;</p>}
                </div>
                <div className={styles.cardName}>
                    <span>{product.name}</span>
                </div>
                <div className={styles.cardCost}>
                    <span>{product.cost} UAH</span>
                </div>
            </div>
        </div>
    )
}

export default Card