import React, { useEffect, useContext } from 'react'
import styles from './StepperBasketList.module.scss';
import BasketProduct from '@/components/BasketProduct';
import { useDispatch } from 'react-redux';
import { setData } from '@/store/slices/order';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';


const StepperBasketList = () => {

    const { t } = useTranslation();

    const router = useRouter();

    const dispatch = useDispatch();
    const { basketProducts } = useSelector((state: RootState) => state.basketReducer);

    useEffect(() => {
        if (!Object.keys(basketProducts).length) {
            router.push('/');
        }
    }, [basketProducts])

    useEffect(() => {
        dispatch(setData({ products: basketProducts }))
    }, [])

    if (!Object.keys(basketProducts).length) {
        return null;
    }

    return (
        <>
            <div className={styles.basketText}>
                <p>{t(`order:stepper.basket`)}</p>
            </div>
            <div className={styles.basketActual}>
                {Object.values(basketProducts).map(item => (
                    <div className={styles.productWrapper} key={item.id}>
                        <BasketProduct product={item} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default StepperBasketList;