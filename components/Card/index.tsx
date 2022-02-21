import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './Card.module.scss'

import Img from '@/components/Img';
import { TrashSvg } from '@/icons/Trash';
import { IProductCard } from '@/interfaces/IFavorite'

import { GlobalContext } from '@/store/index';
import { motion } from "framer-motion"

interface CardProps {
    product: IProductCard;
    removeButton?: boolean;
}

const CardComponent = ({ product, removeButton }: CardProps) => {

    const { FAVORITES } = useContext(GlobalContext)

    const removeFromFavotite = (e) => {
        e.stopPropagation()
        FAVORITES.handlers.removeProduct(product?._id)
    }

    return (
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
                    // transition: {
                    //     delay: .5
                    // }
                }
            }}
        >
            <Link href={`/product/[id]`} as={`/product/${product?._id}`} passHref>
                <div>
                    <div className={styles.cardImage}>
                        <Img src={product.image} />
                    </div>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardAvailability}>
                            {product.availability ? <p className={styles.cardAvailabilityGreen}>Есть в наличии	&nbsp;&#10004;</p> : <p className={styles.cardAvailabilityRed}>Нет в наличии &#10008;</p>}
                        </div>
                        <div className={styles.cardName}>
                            <span>{product.name}</span>
                        </div>
                        <div className={styles.cardCost}>
                            <span>{product.cost} UAH</span>
                        </div>
                    </div>
                    {removeButton ?
                        <div className={styles.imageButton} onClick={(e) => removeFromFavotite(e)}>
                            <TrashSvg color="#FFFFFF" />
                        </div> : null
                    }
                </div>
            </Link>
        </motion.div>
    )
}
const Card = React.memo(CardComponent)

export default Card
