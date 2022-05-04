import React, { useContext, useEffect, useState } from 'react'
import styles from './PlacedOrder.module.scss'
import { RootState } from '@/store/index';

// icons
import { OrderUserSvg } from '@/icons/User';
import { ProductSvg } from '@/icons/Product';

//components
import TableChildren from '@/components/TableChildren';
import BasketProduct from '@/components/BasketProduct';
import TotalPrice from '@/components/TotalPrice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setData } from '@/store/slices/order';
import { clearBasket } from '@/store/slices/basket';
import useTranslation from 'next-translate/useTranslation';
import { ICollectedOrder } from '@/interfaces/order';

type ValidDdata = {
    label?: string,
    value?: string
}

const PlacedOrder = () => {

    const { t, lang } = useTranslation();

    const isNotDefined: string = t(`order:notFilled`);

    const dispatch = useDispatch();

    const { personData } = useSelector((state: RootState) => state.orderReducer);
    const { totalPrice, basketProducts } = useSelector((state: RootState) => state.basketReducer);

    const [collectedOrder, setCollectedOrder] = useState<ICollectedOrder | null>(null)

    const [validData, setValidData] = useState<Array<ValidDdata>>([])
    console.log(personData)
    console.log(validData)


    useEffect(() => {
        setCollectedOrder({
            ...personData,
            order_id: `${Date.now()}`,
            created_at: `${new Date().toLocaleString('uk')}`
        })
    }, [])

    useEffect(() => {

        if (collectedOrder !== null) {
            setValidData([
                {
                    label: t(`order:form.name`),
                    value: collectedOrder.name || isNotDefined
                },
                {
                    label: t(`order:form.surname`),
                    value: collectedOrder.surname || isNotDefined
                },
                {
                    label: t(`order:form.email`),
                    value: collectedOrder.email || isNotDefined
                },
                {
                    label: t(`order:form.phone`),
                    value: collectedOrder.phone || isNotDefined
                },
                {
                    label: t(`order:form.city`),
                    value: collectedOrder.city || isNotDefined
                },
                {
                    label: t(`order:delivery`),
                    value: collectedOrder.isLocal ? personData.local_address || isNotDefined : `${personData.post_adress} ${personData.post_number}`
                },
                {
                    label: t(`order:payment`),
                    value: collectedOrder.payment || isNotDefined
                },
                {
                    label: t(`order:orderDate`),
                    value: collectedOrder?.created_at || isNotDefined
                },
            ])
        }


    }, [lang, collectedOrder])


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.orderTitle}>{t(`order:Order`)} № {collectedOrder?.order_id} {t(`order:confirmed`)}!</h1>
                <p className={styles.orderDescription}>{t(`order:orderDescription`)}</p>
                <div className={styles.infoBlock}>
                    <div className={styles.infoBlockTitle}>
                        <OrderUserSvg />
                        <h2>{t(`order:BuyerData`)}</h2>
                    </div>
                    <div className={styles.infoBlockContent}>
                        {
                            validData.map((el, key) => (
                                <TableChildren key={key} name={el.label} value={el.value} />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.infoBlockTitle}>
                        <ProductSvg />
                        <h2>{t(`order:Goods`)}</h2>
                    </div>
                    <div className={styles.infoBlockContent}>
                        {
                            Object.values(basketProducts).map(item => (
                                <BasketProduct product={item} key={item.id} condition={true} />
                            ))
                        }
                    </div>
                    <div className={styles.totalPrice}>
                        <TotalPrice totalPrice={totalPrice} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlacedOrder
