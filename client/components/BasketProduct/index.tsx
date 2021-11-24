import React, { useContext } from 'react';
import styles from './BasketProduct.module.scss';
import { IBasketProduct } from '@/interfaces/IBasket';
import Img from '@/components/Img';
import { GlobalContext } from '@/store/index';

import { TrashSvg } from '@/icons/Trash';
import { MinusSvg, PlusSvg } from '@/icons/Operator';


interface BasketProductProps {
    product: IBasketProduct
}


const BasketProduct: React.FC<BasketProductProps> = ({ product }) => {

    const { BASKET } = useContext(GlobalContext)

    const increaseProduct = () => BASKET.handlers.increaseCountById(product._id)
    const decreaseProduct = () => BASKET.handlers.decreaseCountById(product._id)
    const removeProduct = () => BASKET.handlers.removeProductById(product._id)

    if (product.quantity < 1) removeProduct()

    return (
        <div className={styles.product}>
            <div className={styles.productImage}>
                <Img src={product.image} />
            </div>
            <div className={styles.productInfo}>
                <h2 className={styles.productInfoTitle}>{product.name}</h2>
                <div className={styles.productInfoCost}>{product.cost} UAH</div>
                <div className={styles.productQuantity}>
                    <button className={styles.productQuantityButton} onClick={decreaseProduct}>
                        <MinusSvg />
                    </button>
                    <span className={styles.productQuantityNumber}>{product.quantity}</span>
                    <button className={styles.productQuantityButton} onClick={increaseProduct}>
                        <PlusSvg />
                    </button>
                </div>
            </div>
            <button className={styles.productRemove} onClick={removeProduct}>
                <TrashSvg />
            </button>

        </div>
    );
};

export default BasketProduct;