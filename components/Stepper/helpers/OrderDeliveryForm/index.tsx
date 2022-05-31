import { RootState } from '@/store/index';
import useTranslation from 'next-translate/useTranslation';
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './OrderDeliveryForm.module.scss'
import { setPaymentValid, setData } from '@/store/slices/order';
import { SortArrorSvg } from '@/components/Icons/Arrow';

interface OrderDeliveryFormProps {
    updateButtonDisabled: (bool: boolean) => void;
}

const OrderDeliveryForm: React.FC<OrderDeliveryFormProps> = ({ updateButtonDisabled }) => {

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const LOCAL_CITY = t(`order:deliveryType.zpCity`);
    const ANOTHER_CITY = t(`order:deliveryType.otherCity`);

    const CARD_PAYMENT = t(`order:paymentType.cardPayment`);
    const CASH_PAYMENT = t(`order:paymentType.cashPayment`);
    const CASH_ON_DELIVERY = t(`order:paymentType.cashOnDelivery`);

    const tarrifLink = <a href='https://novaposhta.ua/basic_tariffs' rel="noopener noreferrer" target='_blank'>{t(`order:tariffs`)}</a>

    const { personData } = useSelector((state: RootState) => state.orderReducer);

    const anchorRef = useRef<HTMLDivElement>(null);

    const [paymentDropDown, setPaymentDropDown] = useState<boolean>(false);

    const [delivery, setDelivery] = useState<string>((personData.city === LOCAL_CITY || personData.isLocal) ? LOCAL_CITY : ""); // LOCAL_CITY | ANOTHER_CITY
    const [payment, setPayment] = useState<string>(personData.payment || ""); // CARD_PAYMENT | CASH_PAYMENT | CASH_ON_DELIVERY

    const [localAdress, setLocalAdress] = useState<string>(personData.local_address || "");

    const [postAddress, setPostAddress] = useState<string>(personData.post_adress || "");
    const [postNumber, setPostNumber] = useState<string>(personData.post_number || "");

    const deliveryHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setDelivery(e.target.value as string)
    }

    const paymentHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPayment(e.target.value as string)
    }

    useEffect(() => {
        if (paymentDropDown) {
            setTimeout(() => {
                // window.scrollBy({
                //     top: window.innerHeight,
                //     behavior: 'smooth'
                // });
                anchorRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 400)
        }
    }, [paymentDropDown])

    useEffect(() => {
        const isPostDataValid = postNumber && postAddress.trim();
        if (delivery && payment && (isPostDataValid || delivery === LOCAL_CITY)) {
            dispatch(setData({
                isLocal: !!(delivery === LOCAL_CITY),
                local_address: localAdress || null,
                post_adress: postAddress || null,
                post_number: postNumber || null,
                payment: payment,
            }))

            dispatch(setPaymentValid(true))
            updateButtonDisabled(false)
        } else {
            dispatch(setPaymentValid(false))
            updateButtonDisabled(true)
        }

    }, [payment, delivery, localAdress, postAddress, postNumber])

    return (
        <div className={styles.formRow}>
            <div className={styles.formCol}>
                <div className={styles.formTitle}>{t(`order:delivery`)}</div>
                <div className={styles.radioGroup}>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value={LOCAL_CITY}
                                onChange={deliveryHandler}
                                checked={delivery === LOCAL_CITY}
                                name="city"
                                className={styles.radioInput}
                            />
                            <p className={styles.radioText}>{t(`order:fromZp`)}</p>
                        </label>
                        {delivery === LOCAL_CITY && (
                            <div className={styles.deliveryInfo}>
                                <p className={styles.deliveryInfoText}>{t(`order:zpDeliveryInfo`)}</p>
                                <div className={styles.deliveryWrapper}>
                                    <div className={styles.deliveryInfoRow}>
                                        <input
                                            id="localAdress"
                                            autoComplete="none"
                                            value={localAdress}
                                            onChange={(e) => setLocalAdress(e.target.value)}
                                        />
                                        <label
                                            htmlFor="localAdress"
                                            className={`${localAdress ? styles.labelActive : ""}`}
                                        >
                                            {t(`order:localAdress`)}
                                        </label>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value={ANOTHER_CITY}
                                onChange={deliveryHandler}
                                checked={delivery === ANOTHER_CITY}
                                name="city"
                                className={styles.radioInput}
                            />
                            <p className={styles.radioText}>{t(`order:deliveryType.otherCity`)}</p>
                        </label>
                        {delivery === ANOTHER_CITY && (
                            <div className={styles.deliveryInfo}>
                                <p className={styles.deliveryInfoText}>{t(`order:otherCityDelivery`)} {tarrifLink}.</p>
                                <div className={styles.deliveryWrapper}>
                                    <div className={styles.deliveryInfoRow}>
                                        <input
                                            id="postAddress"
                                            autoComplete="none"
                                            value={postAddress}
                                            onChange={(e) => setPostAddress(e.target.value)}
                                        />
                                        <label
                                            htmlFor="postAddress"
                                            className={`${postAddress ? styles.labelActive : ""}`}
                                        >
                                            {t(`order:departmentAdress`)}
                                    </label>
                                    </div>
                                    <div className={styles.deliveryInfoRow}>
                                        <input
                                            id="postNumber"
                                            autoComplete="none"
                                            type="text"
                                            value={postNumber}
                                            onChange={(e: React.ChangeEvent) => {
                                                const { value } = e.target as HTMLInputElement;
                                                const pattern = /^\d*$/.test(value);
                                                return pattern && (value === "" || parseInt(value)) && setPostNumber(value)
                                            }}
                                        />
                                        <label
                                            htmlFor="postNumber"
                                            className={`${postNumber ? styles.labelActive : ""}`}
                                        >
                                            №
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.formCol}>
                <div className={styles.formTitle}>{t(`order:payment`)}</div>
                <div className={styles.radioGroup}>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                checked={payment === CARD_PAYMENT}
                                name="payment"
                                className={styles.radioInput}
                                onChange={paymentHandler}
                                value={CARD_PAYMENT}
                            />
                            <p className={styles.radioText}>{CARD_PAYMENT}</p>
                        </label>
                    </div>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                checked={payment === CASH_PAYMENT}
                                name="payment"
                                className={styles.radioInput}
                                onChange={paymentHandler}
                                value={CASH_PAYMENT}
                            />
                            <p className={styles.radioText}>{CASH_PAYMENT}</p>
                        </label>
                    </div>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                checked={payment === CASH_ON_DELIVERY}
                                name="payment"
                                className={styles.radioInput}
                                onChange={paymentHandler}
                                value={CASH_ON_DELIVERY}
                            />
                            <p className={styles.radioText}>{CASH_ON_DELIVERY}</p>
                        </label>
                    </div>
                </div>
                <div className={styles.paymentInfo}>
                    <div className={`${styles.paymentDropDown} ${paymentDropDown ? styles.active : ''}`} onClick={() => setPaymentDropDown(!paymentDropDown)}>
                        <span ref={anchorRef}>{t(`order:more`)}</span>
                        <SortArrorSvg />
                    </div>
                    <div className={`${styles.infoList} ${paymentDropDown ? styles.active : ''}`} >
                        <div className={styles.infoItem}>
                            <h3>{t(`order:paymentType.cardPayment`)}</h3>
                            <p>{t(`order:paymentType.description.cardPayment`)}</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h3>{t(`order:paymentType.cashPayment`)}</h3>
                            <p>{t(`order:paymentType.description.cashPayment`)}</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h3>{t(`order:paymentType.cashOnDelivery`)}</h3>
                            <p>{t(`order:paymentType.description.cashOnDelivery`)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDeliveryForm
