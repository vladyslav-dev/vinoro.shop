import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string()
        .email("Введите корректный email")
        .required("Введите ваш email. Пример example@gmail.com"),
    message: yup.string()
        .required("Введите ваше сообщение"),
}).required();

const ContactForm = () => {

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const { register, getValues, watch, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if(isValid) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    }, [isValid])

    const submitHandler = event => {
        event.preventDefault()

        // console.log(getValues())

    }
    

    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()} autoComplete="none" >
            <div className={styles.formRow}>
                <input
                    {...register("email")}
                    id="email"
                    autoComplete="none"
                    className={styles.formRowInput}
                />
                <label
                    htmlFor="email"
                    className={`${styles.formRowLabel} ${watch('email') ? styles.formRowLabelActive : ""}`}
                >
                    Email
                </label>
                <p className={styles.formRowError}>
                    {errors.email?.message}
                </p>
            </div>
            <div className={styles.formRow}>
                <input
                    {...register("message")}
                    id="message"
                    autoComplete="none"
                    className={styles.formRowInput}
                />
                <label
                    htmlFor="message"
                    className={`${styles.formRowLabel} ${watch('message') ? styles.formRowLabelActive : ""}`}
                >
                    Сообщение
                </label>
                <p className={styles.formRowError}>
                    {errors.message?.message}
                </p>
            </div>
            <div className={styles.formRow}>
                <input type="submit" className={`${styles.formButton} ${isButtonDisabled ? styles.formButtonDisabled : null}`} onSubmit={submitHandler} value="Отправить" />
            </div>
        </form>
    )
}

export default ContactForm