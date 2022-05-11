import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useTranslation from 'next-translate/useTranslation';
import { IQuestion } from '@/interfaces/question';
import QuestionService from 'services/QuestionService';
import useLanguage from '@/hooks/useLanguage';

const ContactForm = () => {

    const { t } = useTranslation();
    const { language } = useLanguage();

    const [showAlert, setShowAlert] = useState<boolean>(false);

    const schema = yup.object().shape({
        email: yup.string()
            .email(t(`contacts:errors.validEmail`))
            .required(t(`contacts:errors.validEmail`)),
        message: yup.string()
            .required(t(`contacts:errors.enterMessage`)),
    }).required();

    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const { register, handleSubmit, watch, reset, formState: { errors, isValid } } = useForm<IQuestion>({
        defaultValues: {
            email: '',
            message: ''
        },
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

    const submitHandler = (data: IQuestion) => {
        QuestionService.sendQuestion({
            ...data,
            lang: language
        });

        reset();

        setShowAlert(true);

        setTimeout(() => setShowAlert(false), 3000);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(submitHandler)} autoComplete="none" >
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
                    {t(`contacts:message`)}
                </label>
                <p className={styles.formRowError}>
                    {errors.message?.message}
                </p>
            </div>
            <div className={styles.formRow}>
                <input type="submit" className={`${styles.formButton} ${isButtonDisabled ? styles.formButtonDisabled : null}`} onSubmit={handleSubmit(submitHandler)} value={t(`contacts:send`)} />
            </div>
            <div className={`${styles.alert} ${showAlert ? styles.active : ''}`}>{t(`contacts:messageSent`)}</div>
        </form>
    )
}

export default ContactForm