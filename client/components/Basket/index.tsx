import React from 'react';
import styles from './Basket.module.scss';

// import {IProduct} from '@/interfaces/IProduct';

export interface BasketProps {
    // products?: Array<IProduct>;
};

const Basket = (props: BasketProps) => {

    //  const { products } = props;

    return (
        <div className={styles.basket}>
            Корзина
        </div>
    );
};

export default Basket;