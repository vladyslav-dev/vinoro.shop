import React, { useEffect, useRef, useState } from 'react'
import styles from './PlacedOrder.module.scss'
import { RootState } from '@/store/index';

// icons
import { OrderUserSvg } from '@/icons/User';
import { ProductSvg } from '@/icons/Product';

//components
import TableChildren from '@/components/TableChildren';
import BasketProduct from '@/components/BasketProduct';
import TotalPrice from '@/components/TotalPrice';
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from 'next-translate/useTranslation';
import { ICollectedOrder } from '@/interfaces/order';
import { clearBasket } from '@/store/slices/basket';
import { resetData } from '@/store/slices/order';
import OrderService from 'services/OrderService';
import useLanguage from '@/hooks/useLanguage';
import { IBasketProduct, IBasketProductCollection } from '@/interfaces/product';

export interface ValidDdata {
    label?: string,
    value?: string
}

const PlacedOrder = () => {

    const { t, lang } = useTranslation();

    const { language } = useLanguage();

    const disaptch = useDispatch();

    const isNotDefined: string = t(`order:notFilled`);

    const { personData } = useSelector((state: RootState) => state.orderReducer);
    const { totalPrice: tprice, basketProducts } = useSelector((state: RootState) => state.basketReducer);

    const productList = useRef<Array<IBasketProduct>>(Object.values(basketProducts));
    const totalPrice = useRef<number>(tprice);

    const [collectedOrder, setCollectedOrder] = useState<ICollectedOrder | null>(null)

    const [validData, setValidData] = useState<Array<ValidDdata>>([])


    useEffect(() => {
        const orderData = {
            ...personData,
            order_id: `${Date.now()}`,
            created_at: `${new Date().toLocaleString('uk')}`
        }

        setCollectedOrder(orderData)

        OrderService.sendMail({
            ...orderData,
            products: basketProducts,
            mailLanguage: language
        }).then(response => {
            if ("error" in response.data) {
                alert("Упс, здається сталася помилка. Замовлення не було оформлене / Oops, there seems to have been an error. The order was not processed.")
            }
        }).catch(error => {
            console.error(error)
            alert("Упс, здається сталася помилка. Замовлення не було оформлене / Oops, there seems to have been an error. The order was not processed.")
        })

        disaptch(clearBasket());

        return () => {
            disaptch(resetData());
        }
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
                    value: collectedOrder.isLocal ? (personData.local_address || isNotDefined) : `Нова Пошта, ${personData.post_adress}, №${personData.post_number}`
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
                <h1 className={styles.orderTitle}>{t(`order:Order`)} №{collectedOrder?.order_id} {t(`order:confirmed`)}!</h1>
                <p className={styles.orderDescription}>{t(`order:orderDescription`)}</p>
                <div className={styles.infoBlock}>
                    <div className={styles.infoBlockTitle}>
                        <OrderUserSvg />
                        <h2>{t(`order:BuyerData`)}</h2>
                    </div>
                    <div className={styles.infoBlockContent}>
                        {
                            validData.map((el, key) => (
                                <TableChildren key={key} label={el.label} value={el.value} />
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
                            productList?.current?.map(item => (
                                <BasketProduct product={item} key={item.id} onlyView={true} />
                            ))
                        }
                    </div>
                    <div className={styles.totalPrice}>
                        <TotalPrice totalPrice={totalPrice.current} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlacedOrder
