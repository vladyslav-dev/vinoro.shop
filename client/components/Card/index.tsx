import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Card.module.scss'

import { IProduct } from '@/interfaces/IProduct'

interface CardProps {
    product: IProduct;
    animate: boolean;
}

const CardComponent = ({ product, animate }: CardProps) => {
    console.log("animate ", animate)
    return (
        <Link href={`/product/[id]`} as={`/product/${product._id}`}>
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
        </Link>
    )
}

const Card = React.memo(CardComponent)

export default Card
