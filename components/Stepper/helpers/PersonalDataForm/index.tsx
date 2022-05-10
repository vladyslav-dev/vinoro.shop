import React, { useEffect } from 'react'
import styles from './PersonalDataForm.module.scss'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { setData, setPersonalDataValid } from '@/store/slices/order';
import useTranslation from 'next-translate/useTranslation';

interface IFormState {
    name: string;
    surname: string;
    email: string;
    phone: string;
    city: string;
}

const phoneRegExp = /^\+?3?8?(0\d{9})$/

interface PersonalDataFormProps {
    updateButtonDisabled: (param: boolean) => void;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ updateButtonDisabled }) => {

    const { t } = useTranslation();

    const schema = yup.object().shape({
        name: yup.string()
            .required(t(`order:formErrors.name`)),
        surname: yup.string()
            .required(t(`order:formErrors.surname`)),
        email: yup.string()
            .email(t(`order:formErrors.correctEmail`))
            .required(t(`order:formErrors.email`)),
        phone: yup.string()
            .required(t(`order:formErrors.phone`))
            .matches(phoneRegExp, t(`order:formErrors.correctPhone`)),
        city: yup.string()
            .required(t(`order:formErrors.city`)),
    }).required();

    const dispatch = useDispatch();

    const { personData } = useSelector((state: RootState) => state.orderReducer);

    const { register, getValues, watch, formState: { errors, isValid } } = useForm<IFormState>({
        mode: 'onChange',
        defaultValues: {
            // name: 'Владислав',
            // surname: 'Григоренко',
            // email: 'vladyslav@gmail.com',
            // phone: '0501709392',
            // city: 'Запоріжжя',
            name: personData.name || '',
            surname: personData.surname || '',
            email: personData.email || '',
            phone: personData.phone || '',
            city: personData.city || '',
        },
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (isValid) {
            updateButtonDisabled(false)
        } else {
            updateButtonDisabled(true)
        }

        return () => {
            if (isValid) {
                dispatch(setData(getValues()))
                dispatch(setPersonalDataValid(true))
            } else {
                dispatch(setPersonalDataValid(false))
            }
        }
    }, [isValid])

    return (
        <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
                <div className={styles.formHeader}>
                    <div className={styles.formHeaderItem}>
                        <h3>{t(`order:stepper.personalData`)}</h3>
                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()} autoComplete="none" className={styles.form}>
                    <div className={styles.formRowWrapper}>
                        <div className={styles.formRow}>
                            <input
                                {...register("name")}
                                id="name"
                                autoComplete="none"
                                className={styles.formRowInput}
                            />
                            <label
                                htmlFor="name"
                                className={`${styles.formRowLabel} ${watch('name') ? styles.formRowLabelActive : ""}`}
                            >
                                {t(`order:form.name`)}
                            </label>
                            <p className={styles.formRowError}>
                                {errors.name?.message}
                            </p>
                        </div>
                        <div className={styles.formRow}>
                            <input
                                {...register("surname")}
                                id="surname"
                                autoComplete="none"
                                className={styles.formRowInput}
                            />
                            <label
                                htmlFor="surname"
                                className={`${styles.formRowLabel} ${watch('surname') ? styles.formRowLabelActive : ""}`}
                            >
                                {t(`order:form.surname`)}
                            </label>
                            <p className={styles.formRowError}>
                                {errors.surname?.message}
                            </p>
                        </div>
                    </div>
                    <div className={styles.formRowWrapper}>
                        <div className={styles.formRow}>
                            <input
                                {...register("email")}
                                id="email"
                                autoComplete="none"
                                type={'email'}
                                className={styles.formRowInput}
                            />
                            <label
                                htmlFor="email"
                                className={`${styles.formRowLabel} ${watch('email') ? styles.formRowLabelActive : ""}`}
                            >
                                {t(`order:form.email`)}
                            </label>
                            <p className={styles.formRowError}>
                                {errors.email?.message}
                            </p>
                        </div>
                    </div>
                    <div className={styles.formRowWrapper}>
                        <div className={styles.formRow}>
                            <input
                                {...register("phone")}
                                id="phone"
                                autoComplete="none"
                                type={'tel'}
                                className={styles.formRowInput}
                            />
                            <label
                                htmlFor="phone"
                                className={`${styles.formRowLabel} ${watch('phone') ? styles.formRowLabelActive : ""}`}
                            >
                                {t(`order:form.phone`)}
                            </label>
                            <p className={styles.formRowError}>
                                {errors.phone?.message}
                            </p>
                        </div>
                    </div>
                    <div className={styles.formRowWrapper}>
                        <div className={styles.formRow}>
                            <input
                                {...register("city")}
                                id="city"
                                autoComplete="none"
                                className={styles.formRowInput}
                            />
                            <label
                                htmlFor="city"
                                className={`${styles.formRowLabel} ${watch('city') ? styles.formRowLabelActive : ""}`}
                            >
                                {t(`order:form.city`)}
                        </label>
                            <p className={styles.formRowError}>
                                {errors.city?.message}
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PersonalDataForm
