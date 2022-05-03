import useTranslation from 'next-translate/useTranslation';
import React from 'react'
import styles from './TotalPrice.module.scss'

interface TotalPriceProps {
    totalPrice: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ totalPrice }) => {

    const { t } = useTranslation();

    return (
        <div className={styles.orderPrice}>
            <p>{t(`common:total`)}:</p>
            <p className={styles.price}>{totalPrice} ₴</p>
        </div>
    )
}

export default TotalPrice
