import React, { useContext } from 'react';
import styles from './Basket.module.scss';
import { GlobalContext } from '@/store/index';
import BasketProduct from '@/components/BasketProduct';

// import {IProduct} from '@/interfaces/IProduct';

export interface BasketProps {
    // products?: Array<IProduct>;
};

const Basket = (props: BasketProps) => {

    const { BASKET } = useContext(GlobalContext)

    // useEffect(() => {
    //     console.log("context ", basket)

    // }, [basket])

    //  const { products } = props;

    return (
        <div className={styles.basket}>
            <h3 className={styles.basektTitle}>Корзина</h3>
            <ul className={styles.basketList}>
                {BASKET.state.products.map(item => (
                    <BasketProduct product={item} key={item._id} />
                ))}
            </ul>

        </div>
    );
};

export default Basket;