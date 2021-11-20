import React, { useContext, useState } from 'react'
import styles from './OrderDeliveryForm.module.scss'


interface OrderDeliveryFormProps { }

const OrderDeliveryForm = ({ }: OrderDeliveryFormProps) => {

    type PaymentType = "Оплата на карту" | "Наличными" | "Наложенный платёж"
    console.log('yes');
    const [delivery, setDelivery] = useState("");
    const [payment, setPayment] = useState("")

    return (
        <div className={styles.formRow}>
            <div className={styles.formCol}>
                <div className={styles.formTitle}>Доставка</div>
                <div className={styles.radioGroup}>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input type="radio" value="city" checked={true} className={styles.radioInput} />
                            <p className={styles.radioText}>Я из Запорожья</p>
                        </label>
                    </div>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input type="radio" value="city" checked={true} className={styles.radioInput} />
                            <p className={styles.radioText}>Другой город</p>
                        </label>
                    </div>
                </div>
            </div>
            <div className={styles.formCol}>
                <div className={styles.formTitle}>Оплата</div>
                <div className={styles.radioGroup}>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input type="radio" value="city" checked={true} className={styles.radioInput} />
                            <p className={styles.radioText}>Оплата на карту</p>
                        </label>
                    </div>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input type="radio" value="city" checked={true} className={styles.radioInput} />
                            <p className={styles.radioText}>Наличными</p>
                        </label>
                    </div>
                    <div className={styles.radioItem}>
                        <label className={styles.radioLabel}>
                            <input type="radio" value="city" checked={true} className={styles.radioInput} />
                            <p className={styles.radioText}>Наложенный платёж</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDeliveryForm
