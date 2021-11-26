import React, { useContext, useEffect } from 'react'
import styles from './PlacedOrder.module.scss'
import { GlobalContext } from '@/store/index';

// icons
import { OrderUserSvg } from '@/icons/User';
import { ProductSvg } from '@/icons/Product';

//components
import TableChildren from '../TableChildren';
import BasketProduct from '../BasketProduct';
import TotalPrice from '../TotalPrice';

const PlacedOrder = () => {
    const { ORDER, BASKET } = useContext(GlobalContext)
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
                        <TableChildren name="Имя" value={personData.name || "Не указано"} />
                        <TableChildren name="Фамилия" value={personData.surname || "Не указано"} />
                        <TableChildren name="Адрес электронной почты" value={personData.email || "Не указано"} />
                        <TableChildren name="Телеофн" value={personData.phone || "Не указано"} />
                        <TableChildren name="Город" value={personData.city || "Не указано"} />
                        <TableChildren name="Доставка" value={personData.postDepartment || personData.zpAddress || "Не указано"} />
                        <TableChildren name="Оплата" value={personData.payment || "Не указано"} />
                        <TableChildren name="Дата оформления" value={personData.createdAt} />
                    </div>
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.infoBlockTitle}>
                        <ProductSvg />
                        <h2>Товар</h2>
                    </div>
                    <div className={styles.infoBlockContent}>
                        {
                            BASKET.state.products.map(item => (
                                <BasketProduct product={item} key={item._id} condition={true} />
                            ))
                        }
                    </div>
                    <div className={styles.totalPrice}>
                        <TotalPrice products={BASKET.state.products} title="Всего: " />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlacedOrder
