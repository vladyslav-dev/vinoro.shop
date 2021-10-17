import Link from 'next/link'
import React from 'react'
import styles from './Card.module.scss'

import Img from '@/components/Img';
import { IProduct } from '@/interfaces/IProduct'

interface CardProps {
    product: IProduct;
    animate: boolean;
}

const CardComponent = ({ product, animate }: CardProps) => (
    <div className={`${styles.card} ${animate ? styles.animate : ""}`}>
        <Link href={`/product/[id]`} as={`/product/${product._id}`} passHref>
            <div>
                <div className={styles.cardImage}>
                    <Img src={product.image} />
                </div>
                <div className={styles.cardInfo}>
                    <div className={styles.cardAvailability}>
                        {product.availability ? <p className={styles.cardAvailabilityGreen}>Есть в наличии &#10004;</p> : <p className={styles.cardAvailabilityRed}>Нет в наличии &#10008;</p>}
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
    </div >
)

const Card = React.memo(CardComponent)

export default Card
