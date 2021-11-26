import React, { useContext, useEffect } from 'react'
import styles from './PlacedOrder.module.scss'
import { GlobalContext } from '@/store/index';
import { OrderUserSvg } from '@/icons/User';
import { ProductSvg } from '@/icons/Product';

const PlacedOrder = () => {
    const { ORDER } = useContext(GlobalContext)
    const { personData } = ORDER.state;

    useEffect(() => {
        ORDER.handlers.updateState({
            order_id: `${Date.now()}`,
            createdAt: new Date().toLocaleString("ru")
        })
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.orderTitle}>Заказа № {personData.order_id} оформлен!</h1>
                <p className={styles.orderDescription}>Ваш заказ будет рассмотрен  в ближайшее время, с вами свяжутся для его подтверждения. Также мы выслали на ваш электронный адрес копию заказа. По всем вопросам писать на Viber +380689125456</p>
                <div className={styles.infoBlock}>
                    <div className={styles.infoBlockTitle}>
                        <OrderUserSvg />
                        <h2>Данные покупателя</h2>
                    </div>
                    <div className={styles.infoBlockContent}>
                        <div className={styles.contentRow}>
                            <span className={styles.contentColumn}>sdajhgjgggggfasdf</span>
                            <span className={styles.contentColumn}>sadfasdffasdf</span>
                        </div>
                        <div className={styles.contentRow}>
                            <span className={styles.contentColumn}>asdf</span>
                            <span className={styles.contentColumn}>gfjkghjfgh</span>
                        </div>
                    </div>
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.infoBlockTitle}>
                        <ProductSvg />
                        <h2>Товар</h2>
                    </div>
                    <div className={styles.infoBlockContent}>
                        <div className={styles.contentRow}>
                            <span className={styles.contentColumn}>sdajhgjgggggfasdf</span>
                            <span className={styles.contentColumn}>sadfasdffasdf</span>
                        </div>
                        <div className={styles.contentRow}>
                            <span className={styles.contentColumn}>asdf</span>
                            <span className={styles.contentColumn}>gfjkghjfgh</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlacedOrder
