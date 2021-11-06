import React, { useState, useEffect } from 'react'
import styles from './Stepper.module.scss'

//Components
import { StepperCart, StepperUser, StepperMoney, StepperCheckMark } from '@/components/StepperIcon'
import StepperComponent from '@/components/StepperComponent'
import OrderDeliveryForm from '@/components/OrderDeliveryForm'
import PersonalDataForm from '@/components/PersonalDataForm'

const Stepper = () => {

    const [step, setStep] = useState(0) //current step

    const [stepsContent, setStepsContent] = useState([
        {
            id: 0,
            label: 'КОРЗИНА',
            icon: <StepperCart />,
            component: <StepperCart />,
            isActive: false,
            isPassed: false
        },
        {
            id: 1,
            label: 'ЛИЧНЫЕ ДАННЫЕ',
            icon: <StepperUser />,
            component: <PersonalDataForm />,
            isActive: false,
            isPassed: false
        },
        {
            id: 2,
            label: 'ДОСТАВКА И ОПЛАТА',
            icon: <StepperMoney />,
            component: <OrderDeliveryForm />,
            isActive: false,
            isPassed: false
        },
        {
            id: 3,
            label: 'ЗАКАЗ ОФОРМЛЕН',
            icon: <StepperCheckMark />,
            component: <StepperCheckMark />,
            isActive: false,
            isPassed: false
        }
    ]) //steps data

    useEffect(() => {
        setStepsContent([...stepsContent.map(el => el.id === step ? { ...el, isActive: true, isPassed: true } : { ...el, isActive: false })])
    }, [step])

    const nextButtonHandler = () => {
        setStep(step === stepsContent.length - 1 ? stepsContent.length - 1 : step + 1)
    }

    console.log('render')
    return (
        <div className={styles["container-xl"]}>
            <div className={styles.wrraper}>
                <StepperComponent stepsContent={stepsContent} nextButtonHandler={nextButtonHandler}>
                    {
                        stepsContent.map(el => {
                            return (
                                <div key={el.id} style={{ color: "red" }}>
                                    {el.id === step ? el.component : null}
                                </div>
                            )
                        })
                    }
                </StepperComponent>
            </div>

        </div>
    )
}

export default Stepper
