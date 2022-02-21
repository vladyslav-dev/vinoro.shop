import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '@/store/index';
import styles from './Stepper.module.scss';

//Components
import { StepperCart, StepperUser, StepperMoney, StepperCheckMark } from '@/components/Icons/StepperIcon';
import OrderDeliveryForm from '@/components/Stepper/helpers/OrderDeliveryForm';
import StepperBasketList from '@/components/Stepper/helpers/StepperBasketList';
import StepperBox from '@/components/Stepper/helpers/StepperBox';
import PersonalDataForm from '@/components/Stepper/helpers/PersonalDataForm';
import PlacedOrder from '@/components/Stepper/helpers/PlacedOrder';



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
            isFirst: true,
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
            isFirst: false,
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
            isFirst: false,
            isButtonDisabled: !ORDER.state.isPaymentValid,
        },
        {
            id: 3,
            label: 'ЗАКАЗ ОФОРМЛЕН',
            icon: <StepperCheckMark />,
            component: <PlacedOrder />,
            isActive: false,
            isPassed: false,
            isLast: true,
            isFirst: false,
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
        <div className={styles.wrraper}>
            <StepperBox
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
            </StepperBox>
        </div>
    )
}

export default Stepper;