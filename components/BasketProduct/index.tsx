import React, { useContext } from 'react';
import styles from './BasketProduct.module.scss';
import { IBasketProduct } from '@/interfaces/product';
import Img from '@/components/Img';
import { increaseCount, decreaseCount, removeOne } from '@/store/slices/basket';

import { TrashSvg } from '@/icons/Trash';
import { MinusSvg, PlusSvg } from '@/icons/Operator';
import { useDispatch } from 'react-redux';
import useLanguage from '@/hooks/useLanguage';

interface BasketProductProps {
    product: IBasketProduct;
    onlyView?: boolean;
}

const BasketProduct: React.FC<BasketProductProps> = ({ product, onlyView = false }) => {

    const dispatch = useDispatch();

    const { language } = useLanguage();

    const increaseProduct = () => dispatch(increaseCount(product));
    const decreaseProduct = () => dispatch(decreaseCount(product));
    const removeProduct = () => dispatch(removeOne(product));

    return (
        <div className={styles.product}>
            <div className={styles.productImage}>
                <Img src={product.image} />
            </div>
            <div className={styles.productInfo}>
                <h2 className={styles.productInfoTitle}>{product.name[language]}</h2>
                <div className={styles.productInfoCost}>
                    <span>{product.current_price} ₴ {product.quantity > 1 && <span> &#xA0;&#xA0; x &#xA0;&#xA0; {product.quantity}</span>}</span>
                    {product.quantity > 1 && <span>{product.total_price} ₴</span>}
                </div>
                {!onlyView && (
                    <div className={styles.productQuantity}>
                        <button className={styles.productQuantityButton} onClick={decreaseProduct}>
                            <MinusSvg />
                        </button>
                        <span className={styles.productQuantityNumber}>{product.quantity}</span>
                        <button className={styles.productQuantityButton} onClick={increaseProduct}>
                            <PlusSvg />
                        </button>
                    </div>
                )}
            </div>
            {!onlyView && (
                <button className={styles.productRemove} onClick={removeProduct}>
                    <TrashSvg />
                </button>
            )}
        </div>
    );
};

export default BasketProduct;