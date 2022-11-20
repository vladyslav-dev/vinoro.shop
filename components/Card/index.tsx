import Link from 'next/link'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './Card.module.scss'

import Img from '@/components/Img';

import { NewSvg } from '../Icons/New';
import useLanguage from '@/hooks/useLanguage';
import useTranslation from 'next-translate/useTranslation';
import { IProduct } from '@/interfaces/product';
import { AddToCartSvg } from '../Icons/addToCart';
import { InCartSvg } from '../Icons/inCart';
import { useDispatch, useSelector } from 'react-redux';
import { addOne } from '@/store/slices/basket';
import { RootState } from '@/store/index';
import { useRouter } from 'next/router';

interface CardProps {
    product: IProduct;
}

const CardComponent = ({ product }: CardProps) => {

    const router = useRouter();

    const [isRouteChangeState, setIsRouteChangeStart] = useState(false);

    const { t } = useTranslation();
    const { basketProducts } = useSelector((state: RootState) => state.basketReducer);
    const dispatch = useDispatch();
    const { language } = useLanguage();

    const scrollIntoView = useCallback((element: HTMLElement) => {
        const yOffset = -68;
        const y: number = Number(element.getBoundingClientRect().top + window.pageYOffset + yOffset);
        window.scrollTo({ top: y, behavior: "smooth" })
    }, [])

    useEffect(() => {
        router.prefetch(`/product/${product.id}`);

        const URL = router.asPath;
        const currentId = URL.split('#')?.at(1);

        if (currentId && currentId === product.id) {
            const cardElement = document.getElementById(String(currentId)) as HTMLDivElement;
            scrollIntoView(cardElement);
        }

        const handleRouteChange = (nextURL: string) => {

            setIsRouteChangeStart(true);

            const nextProductURL = nextURL.split("/product/")?.at(1);

            const isCurrentProduct = nextProductURL === product?.id;

            if (isCurrentProduct) {
                const currentURL = URL.split('#')?.at(0);
                router.replace(`${currentURL}#${product.id}`);
            }
        }

        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
          }
      }, []);

    const isInBasket = useMemo(() => Object.keys(basketProducts).includes(product.id), [basketProducts, product]);

    const addToCart = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (isInBasket) return

        dispatch(addOne(product))
    }

    return (
        <div className={styles.defaultCard} id={product.id}>
            <Link href={`/product/[id]`} as={`/product/${product.id}`} >
                <a className={styles.cardLink} style={{ opacity: product.availability ? "1" : "0.5" }}>
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
                    {product.availability && (
                        <div className={`${styles.addToCart} ${isInBasket ? styles.active : ''}`} onClick={addToCart}>
                            {isInBasket ? <InCartSvg /> : <AddToCartSvg />}
                        </div>
                    )}
                </a>
            </Link>
            <div className={styles.routeChangeWhiteBack} style={{ display: isRouteChangeState ? "block" : "none" }} />
        </div>
    )
}
const Card = React.memo(CardComponent)

export default Card
