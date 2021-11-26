import React, { useContext, useState, useEffect } from 'react'
import styles from './OrderDeliveryForm.module.scss'
import { GlobalContext } from '@/store/index';


type PaymentType = "Оплата на карту" | "Наличными" | "Наложенный платёж";
type DeliveryType = "Запорожье" | "Другой город";

const OrderDeliveryForm = ({ updateButtonDisabled }) => {


    const { ORDER } = useContext(GlobalContext)

    const [delivery, setDelivery] = useState<DeliveryType>(null);
    const [payment, setPayment] = useState<PaymentType>(null);

    const [zpAddress, setZpAddress] = useState<string>("");
    const [postAddress, setPostAddress] = useState<string>("");
    const [postNumber, setPostNumber] = useState<number>();

    const deliveryHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setDelivery(e.target.value as DeliveryType)
    }

    const paymentHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPayment(e.target.value as PaymentType)
    }

    useEffect(() => {

        if (delivery && payment) {
            ORDER.handlers.updateState({
                zpAddress: zpAddress || null,
                postDepartment: `${postAddress} ${postNumber}` || null,
                payment: payment,
            })
            ORDER.handlers.setPaymentDataValid(true)
            updateButtonDisabled(false)
        } else {
            ORDER.handlers.setPaymentDataValid(false)
            updateButtonDisabled(true)
        }

    }, [payment, delivery])

    return (
        <div className={styles.formRow}>
            <div className={styles.formCol}>
                <div className={styles.formTitle}>Доставка</div>
                <div className={styles.radioGroup}>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="Запорожье"
                                onChange={deliveryHandler}
                                checked={delivery === "Запорожье"}
                                name="city"
                                className={styles.radioInput}
                            />
                            <p className={styles.radioText}>Я из Запорожья</p>
                        </label>
                        {delivery === "Запорожье" && (
                            <div className={styles.deliveryInfo}>
                                <p className={styles.deliveryInfoText}>Бесплатная доставка по Коммунарскому и Александровскому районам на сумму от 300 UAH. Остальные районы по договорённости после оформления заказа.</p>
                                <div className={styles.deliveryWrapper}>
                                    <div className={styles.deliveryInfoInput}>
                                        <input
                                            name="zpAddress"
                                            autoComplete="none"
                                            value={zpAddress}
                                            onChange={(e) => setZpAddress(e.target.value)}
                                        />
                                        <label
                                            htmlFor="zpAddress"
                                            className={`${zpAddress ? styles.labelActive : ""}`}
                                        >
                                            Адресс
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
                                value="Другой город"
                                onChange={deliveryHandler}
                                checked={delivery === "Другой город"}
                                name="city"
                                className={styles.radioInput}
                            />
                            <p className={styles.radioText}>Другой город</p>
                        </label>
                        {delivery === "Другой город" && (
                            <div className={styles.deliveryInfo}>
                                <p className={styles.deliveryInfoText}>Для доставки в другие города Украины мы используем “НоваПошта”.</p>
                                <div className={styles.deliveryWrapper}>
                                    <div className={styles.deliveryInfoInput}>
                                        <input
                                            name="postAddress"
                                            autoComplete="none"
                                            value={postAddress}
                                            onChange={(e) => setPostAddress(e.target.value)}
                                        />
                                        <label
                                            htmlFor="postAddress"
                                            className={`${postAddress ? styles.labelActive : ""}`}
                                        >
                                            Адресс отделения
                                    </label>
                                    </div>
                                    <div className={styles.deliveryInfoInput}>
                                        <input
                                            name="postNumber"
                                            autoComplete="none"
                                            type="number"
                                            min="1"
                                            value={postNumber}
                                            onChange={(e) => setPostNumber(Number(e.target.value))}
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
                <div className={styles.formTitle}>Оплата</div>
                <div className={styles.radioGroup}>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                checked={payment === "Оплата на карту"}
                                name="payment"
                                className={styles.radioInput}
                                onChange={paymentHandler}
                                value="Оплата на карту"
                            />
                            <p className={styles.radioText}>Оплата на карту</p>
                        </label>
                    </div>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                checked={payment === "Наличными"}
                                name="payment"
                                className={styles.radioInput}
                                onChange={paymentHandler}
                                value="Наличными"
                            />
                            <p className={styles.radioText}>Наличными</p>
                        </label>
                    </div>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                checked={payment === "Наложенный платёж"}
                                name="payment"
                                className={styles.radioInput}
                                onChange={paymentHandler}
                                value="Наложенный платёж"
                            />
                            <p className={styles.radioText}>Наложенный платёж</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDeliveryForm
