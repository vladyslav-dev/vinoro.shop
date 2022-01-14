import React, { useState, useContext } from 'react'
import Img from '@/components/Img';
import styles from './Product.module.scss'
import Button from '../Button'
import { IProduct } from '@/interfaces/IProduct';
import { IBasketProduct } from '@/interfaces/IBasket';
import { IProductCard } from '@/interfaces/IFavorite'
import { GlobalContext } from '@/store/index';
import { LinkSvg } from '@/icons/Link';

interface ProductPageProps {
    product: IProduct
}

const Product: React.FC<ProductPageProps> = ({ product }) => {

    const { BASKET, FAVORITES } = useContext(GlobalContext)
    //console.log(product)

    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const isProductInBasket = BASKET.state.products.some(item => item._id === product._id)

    const isPrductInFavorites = FAVORITES.state.products?.some(item => item._id === product._id)

    const addToBasket = () => BASKET.handlers.addProduct({
        _id: product._id,
        name: product.name,
        cost: product.cost,
        image: product.image,
    } as IBasketProduct)

    const addFavorites = () => FAVORITES.handlers.addProduct({
        _id: product._id,
        name: product.name,
        cost: product.cost,
        image: product.image,
        availability: product.availability
    } as IProductCard)

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        setIsShowModal(true)
        setTimeout(() => setIsShowModal(false), 2280)
    }

    return (
        <div className={styles.content}>
            <div className={styles.leftPart}>
                <Img src={product.image} />
            </div>
            <div className={styles.rightPart}>
                <div className={styles.productNamePrice}>
                    <p>{product.name}</p>
                    <p>{product.cost} UAH</p>
                </div>
                <div className={styles.productAvailability}>
                    {product.availability ? <p className={styles.cardAvailabilityGreen}>Есть в наличии &#10004;</p> : <p className={styles.cardAvailabilityRed}>Нет в наличии &#10008;</p>}
                </div>
                <button className={styles.productLink} onClick={copyLink}>
                    <p>Копировать ссылку на продукт</p>
                    <LinkSvg />
                </button>
                <div className={styles.addButtons}>
                    <Button
                        label={isProductInBasket ? "УЖЕ В КОРЗИНЕ" : "ДОБАВИТЬ В КОРЗИНУ"}
                        click={() => { !isProductInBasket ? addToBasket() : null }}
                        styles={{ width: "100%", margin: '15px 0' }}
                    />
                    <Button
                        label={isPrductInFavorites ? "УЖЕ В ИЗБРАННОМ" : "ДОБАВИТЬ В ИЗБРАННОЕ"}
                        type="outlined"
                        styles={{ width: "100%", margin: '15px 0' }}
                        click={() => { !isPrductInFavorites ? addFavorites() : null }}
                    />
                </div>
                <div className={styles.productDescriptions}>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className={`${styles.productModalWarning} ${isShowModal ? styles.productModalWarningShow : null}`}>Ссылка скопирована</div>
        </div>
    )
}

export default Product;

