import React, { useContext, useState } from 'react'
import styles from './OrderDeliveryForm.module.scss'
import { GlobalContext } from '@/store/index';

const OrderDeliveryForm = ({ updateButtonDisabled }) => {

    type PaymentType = "Оплата на карту" | "Наличными" | "Наложенный платёж";

    const { ORDER } = useContext(GlobalContext)

    const [delivery, setDelivery] = useState({
        fromZp: {
            checked: false,
            city: "Запорожье",
            address: "",
        },
        otherCity: {
            checked: false,
            city: "Другой город",
            postAddress: "",
            postNumber: ""
        }

    });

    const [payment, setPayment] = useState("")

    const [isValid, setIsValid] = useState(delivery.fromZp.checked || delivery.otherCity.checked && payment)

    return (
        <div className={styles.formRow}>
            <div className={styles.formCol}>
                <div className={styles.formTitle}>Доставка</div>
                <div className={styles.radioGroup}>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value={"fromZp"}
                                onChange={() => setDelivery(prevState => ({
                                    ...prevState,
                                    fromZp: { ...prevState.fromZp, checked: true },
                                    otherCity: { ...prevState.otherCity, checked: false },
                                }))}
                                checked={delivery.fromZp.checked}
                                name="city"
                                className={styles.radioInput}
                            />
                            <p className={styles.radioText}>Я из Запорожья</p>
                        </label>
                    </div>
                    {delivery.fromZp.checked && (
                        <div className={styles.deliveryInfo}>
                            <p className={styles.deliveryInfoText}>Бесплатная доставка по Коммунарскому и Александровскому районам на сумму от 300 UAH. Остальные районы по договорённости после оформления заказа.</p>
                            <div className={styles.deliveryInfoInput}>
                                <input
                                    name="zpAddress"
                                    autoComplete="none"
                                    value={delivery.fromZp.address}
                                    onChange={(e) => setDelivery(prevState => ({
                                        ...prevState,
                                        fromZp: {
                                            ...prevState.fromZp,
                                            address: e.target.value
                                        }
                                    }))}
                                    className={styles.formRowInput}
                                />
                                <label
                                    htmlFor="zpAddress"
                                    className={styles.formRowLabel}
                                >
                                    Адресс
                            </label>
                            </div>
                        </div>
                    )}

                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value={"otherCity"}
                                onChange={() => setDelivery(prevState => ({
                                    ...prevState,
                                    fromZp: { ...prevState.fromZp, checked: false },
                                    otherCity: { ...prevState.otherCity, checked: true },
                                }))}
                                checked={delivery.otherCity.checked}
                                name="city"
                                className={styles.radioInput} />
                            <p className={styles.radioText}>Другой город</p>
                        </label>
                    </div>

                    {delivery.otherCity.checked && (
                        <div className={styles.deliveryInfo}>
                            <p className={styles.deliveryInfoText}>Для доставки в другие города Украины мы используем “НоваПошта”.</p>
                            <div className={styles.deliveryInfoInput}>
                                <input
                                    name="postAddress"
                                    autoComplete="none"
                                    value={delivery.otherCity.postAddress}
                                    onChange={(e) => setDelivery(prevState => ({
                                        ...prevState,
                                        otherCity: {
                                            ...prevState.otherCity,
                                            postAddress: e.target.value
                                        }
                                    }))}
                                    className={styles.formRowInput}
                                />
                                <label
                                    htmlFor="postAddress"
                                    className={styles.formRowLabel}
                                >
                                    Адресс отделения
                                </label>
                            </div>
                            <div className={styles.deliveryInfoInput}>
                                <input
                                    name="postNumber"
                                    autoComplete="none"
                                    type="number"
                                    value={delivery.otherCity.postNumber}
                                    onChange={(e) => setDelivery(prevState => ({
                                        ...prevState,
                                        otherCity: {
                                            ...prevState.otherCity,
                                            postNumber: e.target.value
                                        }
                                    }))}
                                    className={styles.formRowInput}
                                />
                                <label
                                    htmlFor="postNumber"
                                    className={styles.formRowLabel}
                                >
                                    №
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.formCol}>
                <div className={styles.formTitle}>Оплата</div>
                <div className={styles.radioGroup}>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="Оплата на карту"
                                checked={payment === "Оплата на карту"}
                                name="payment"
                                className={styles.radioInput}
                                onChange={(e) => setPayment(e.target.value)}
                            />
                            <p className={styles.radioText}>Оплата на карту</p>
                        </label>
                    </div>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="Наличными"
                                checked={payment === "Наличными"}
                                name="payment"
                                className={styles.radioInput}
                                onChange={(e) => setPayment(e.target.value)}
                            />
                            <p className={styles.radioText}>Наличными</p>
                        </label>
                    </div>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="Наложенный платёж"
                                checked={payment === "Наложенный платёж"}
                                name="payment"
                                className={styles.radioInput}
                                onChange={(e) => setPayment(e.target.value)}
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
