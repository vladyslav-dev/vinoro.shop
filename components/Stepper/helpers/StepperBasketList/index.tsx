import React, { useEffect, useContext } from 'react'
import styles from './StepperBasketList.module.scss';
import { GlobalContext } from '@/store/index';
import BasketProduct from '@/components/BasketProduct';


const StepperBasketList = () => {
    const { BASKET, ORDER } = useContext(GlobalContext)

    useEffect(() => {
        ORDER.handlers.updateState({ products: BASKET.state.products })
    }, [])

    return (
        <>
            <div className={styles.basketText}>
                <p>КОРЗИНА</p>
            </div>
            <div className={styles.basketActual}>
                {BASKET.state.products.map(item => (
                    <div className={styles.productWrapper} key={item._id}>
                        <BasketProduct product={item} key={item._id} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default StepperBasketList;