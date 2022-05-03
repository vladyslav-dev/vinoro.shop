import Link from 'next/link'
import React from 'react'
import styles from './Card.module.scss'

import Img from '@/components/Img';
import { TrashSvg } from '@/icons/Trash';
import { IProductCard } from '@/interfaces/IFavorite'

import { NewSvg } from '../Icons/New';
import useLanguage from '@/hooks/useLanguage';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

interface CardProps {
    product: IProductCard;
    removeButton?: boolean;
}

const CardComponent = ({ product, removeButton }: CardProps) => {

    const { t } = useTranslation();
    const { language } = useLanguage();

    const removeFromFavotite = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    return (
        <div className={styles.defaultCard} id={product.id}>
            <Link href={`/product/[id]`} as={`/product/${product.id}`} scroll={false} >
                <a className={styles.cardLink}>
                    <div className={styles.cardImage}>
                        <Img src={product.image} />
                    </div>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardAvailability}>
                            {product.availability ? (
                                <p className={styles.cardAvailabilityGreen}>{t(`common:availability.available`)}	&nbsp;&#10004;</p>
                            ) : (
                                <p className={styles.cardAvailabilityRed}>{t(`common:availability.notAvailable`)} &#10008;</p>
                            )}
                        </div>
                        <div className={styles.cardName}>
                            <span>{product.name[language]}</span>
                        </div>

                        {product.discount_price ? (
                            <div className={styles.cardDiscountCost}>
                                <span className={styles.cardNewCost}>{product.discount_price} ₴</span>
                                {product.price !== 1 && (
                                    <span className={styles.cardOldCost}>{product.price} ₴</span>
                                )}
                            </div>
                        ) : (
                            <div className={styles.cardCost}>
                                {product.price !== 1 && (
                                    <span>{product.price} ₴</span>
                                )}

                            </div>
                        )}
                    </div>
                    {product.new && (
                        <div className={styles.cardNew}>
                            <NewSvg />
                        </div>
                    )}
                    {removeButton ?
                        <div className={styles.imageButton} onClick={(e) => removeFromFavotite(e)}>
                            <TrashSvg color="#FFFFFF" />
                        </div> : null
                    }
                </a>
            </Link>
        </div>
    )
}
const Card = React.memo(CardComponent)

export default Card
