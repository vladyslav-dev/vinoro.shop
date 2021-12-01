import React, { useContext } from 'react'
import Img from '@/components/Img';
import styles from './ProductPage.module.scss'
import Button from '../Button'
import { IProduct } from '@/interfaces/IProduct';
import { IBasketProduct } from '@/interfaces/IBasket';
import { IProductCard } from '@/interfaces/IFavorite'
import { GlobalContext } from '@/store/index';

interface ProductPageProps {
    product: IProduct
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {

    const { BASKET, FAVORITES } = useContext(GlobalContext)

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
        </div>
    )
}

export default ProductPage

