import React, { useState, useEffect, useContext } from 'react'
import styles from './Stepper.module.scss'
import { GlobalContext } from '@/store/index';

//Components
import { StepperCart, StepperUser, StepperMoney, StepperCheckMark } from '@/components/StepperIcon'
import StepperComponent from '@/components/StepperComponent'
import PersonalDataForm from '@/components/PersonalDataForm'
import BasketProduct from '@/components/BasketProduct';
import OrderDeliveryForm from '@/components/OrderDeliveryForm'


const Stepper = () => {

    const { BASKET, ORDER } = useContext(GlobalContext)

    const [step, setStep] = useState(0) //current step

    const [stepsContent, setStepsContent] = useState([
        {
            id: 0,
            label: 'КОРЗИНА',
            icon: <StepperCart />,
            component: <StepperBasketList />,
            isActive: false,
            isPassed: false,
            isLast: false,
            isButtonDisabled: false,
        },
        {
            id: 1,
            label: 'ЛИЧНЫЕ ДАННЫЕ',
            icon: <StepperUser />,
            component: <PersonalDataForm updateButtonDisabled={updateButtonDisabled} />,
            isActive: false,
            isPassed: false,
            isLast: false,
            isButtonDisabled: !ORDER.state.isPersonDataValid,
        },
        {
            id: 2,
            label: 'ДОСТАВКА И ОПЛАТА',
            icon: <StepperMoney />,
            component: <OrderDeliveryForm updateButtonDisabled={updateButtonDisabled} />,
            isActive: false,
            isPassed: false,
            isLast: false,
            isButtonDisabled: !ORDER.state.isPaymentValid,
        },
        {
            id: 3,
            label: 'ЗАКАЗ ОФОРМЛЕН',
            icon: <StepperCheckMark />,
            component: <StepperCheckMark />,
            isActive: false,
            isPassed: false,
            isLast: true,
            isButtonDisabled: false,
        }
    ]) //steps data

    useEffect(() => {
        setStepsContent([...stepsContent.map(el => el.id === step ? { ...el, isActive: true, isPassed: true } : { ...el, isActive: false })])
    }, [step])

    function updateButtonDisabled(bool: boolean) {
        setStepsContent((prevState) => prevState.map(item => item.isActive ? { ...item, isButtonDisabled: bool } : item))
    }

    const nextButtonHandler = () => {
        setStep(step === stepsContent.length - 1 ? stepsContent.length - 1 : step + 1)
    }

    const backButtonHandler = () => {
        setStep(step > 0 ? step - 1 : 0)
    }

    return (
        <div className={styles["container-xl"]} style={{ padding: 0 }}>
            <div className={styles.wrraper}>
                <StepperComponent
                    stepsContent={stepsContent}
                    nextButtonHandler={nextButtonHandler}
                    backButtonHandler={backButtonHandler}
                    products={BASKET.state.products}
                >
                    {
                        stepsContent.map(el => {
                            return (
                                <div key={el.id}>
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


export const StepperBasketList = () => {
    const { BASKET } = useContext(GlobalContext)

    return (
        <div className={styles["container-xl"]}>
            <div className={styles.basketText}>
                <p>КОРЗИНА</p>
            </div>
            <div className={styles.basketActual}>
                {BASKET.state.products.map(item => (
                    <div className={styles.productWrapper} key={item._id}>
                        <BasketProduct product={item} key={item._id} />
                    </div>
                ))}
            </div>
        </div>
    )
}
