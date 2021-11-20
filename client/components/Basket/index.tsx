import React, { useContext } from 'react';
import styles from './Basket.module.scss';
import { GlobalContext } from '@/store/index';
import BasketProduct from '@/components/BasketProduct';
import Button from '../Button';
import Link from 'next/link';
import TotalPrice from '../TotalPrice';

export interface BasketProps {
    // products?: Array<IProduct>;
};

const Basket = (props: BasketProps) => {

    const { BASKET } = useContext(GlobalContext)
    
    return (
        <div className={styles.basket}>
            <h3 className={styles.basektTitle}>Корзина</h3>
            <ul className={styles.basketList}>
                {!BASKET.state.products.length ?
                    <p>Корзина пуста...</p> :
                    BASKET.state.products.map(item => (
                        <BasketProduct product={item} key={item._id} />
                    ))
                }
            </ul>
                <div className={styles.confirmOrder}>
                    <TotalPrice products={BASKET.state.products} title="Итого: "/>
                    {BASKET.state.products.length ? 

                        <Link href="/order/">
                            <div className={styles.buttonWrapper}>
                                <Button label = "Оплатить заказ" styles={{ width: '100%'}} click={() => null} type="default"/>
                            </div>
                        </Link>:

                        <Button label = "Оплатить заказ" styles={{ width: '50%'}} click={() => null} type="disabled"/>
                    }
                </div>
        </div>
    )
}

export default Basket;