import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './Card.module.scss'

import Img from '@/components/Img';
import Button from '@/components/Button'
import { IProductCard } from '@/interfaces/IFavorite'

import { GlobalContext } from '@/store/index';
import { motion } from "framer-motion"

interface CardProps {
    product: IProductCard;
    animate: boolean;
    removeButton?: boolean;
}

const CardComponent = ({ product, animate, removeButton }: CardProps) => {

    const { FAVORITES } = useContext(GlobalContext)

    const removeFromFavotite = (e) => {
        e.stopPropagation()
        FAVORITES.handlers.removeProduct(product._id)
    }

    return (
        // <div className={`${styles.card} ${animate ? styles.animate : ""}`}>
        <motion.div
            className={`${styles.card}`}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 9000
                    }
                }
            }}
        >
            <Link href={`/product/[id]`} as={`/product/${product._id}`} passHref>
                <div>
                    <div className={styles.cardImage}>
                        <Img src={product.image} />
                        {
                            removeButton ?
                                <div className={styles.imageButton}>
                                    <Button
                                        label="Удалить товар"
                                        click={removeFromFavotite}
                                        styles={{ width: '100%', border: 'none', opacity: '0.7' }}
                                    />
                                </div> :
                                null
                        }
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
        </motion.div>
    )
}
const Card = React.memo(CardComponent)

export default Card
