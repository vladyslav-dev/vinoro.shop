import React, { useState, useEffect } from 'react'
import styles from './Stepper.module.scss';

//Components
import { StepperCart, StepperUser, StepperMoney, StepperCheckMark } from '@/components/Icons/StepperIcon';
import OrderDeliveryForm from '@/components/Stepper/helpers/OrderDeliveryForm';
import StepperBasketList from '@/components/Stepper/helpers/StepperBasketList';
import StepperBox from '@/components/Stepper/helpers/StepperBox';
import PersonalDataForm from '@/components/Stepper/helpers/PersonalDataForm';
import PlacedOrder from '@/components/Stepper/helpers/PlacedOrder';
import useTranslation from 'next-translate/useTranslation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';

export interface IStepContent {
    id: number;
    label: string;
    icon: React.ReactNode;
    component: React.ReactNode;
    isActive: boolean;
    isPassed: boolean;
    isLast: boolean;
    isFirst: boolean;
    isButtonDisabled: boolean;
}

const Stepper = () => {

    const { t, lang } = useTranslation();

    const { isPaymentValid, isPersonDataValid } = useSelector((state: RootState) => state.orderReducer);
    const { basketProducts } = useSelector((state: RootState) => state.basketReducer);

    const [step, setStep] = useState(0) //current step

    const initialStepContent = [
        {
            id: 0,
            label: t(`order:stepper.basket`),
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
            label: t(`order:stepper.personalData`),
            icon: <StepperUser />,
            component: <PersonalDataForm updateButtonDisabled={updateButtonDisabled} />,
            isActive: false,
            isPassed: false,
            isLast: false,
            isFirst: false,
            isButtonDisabled: !isPersonDataValid,
        },
        {
            id: 2,
            label: t(`order:stepper.deliveryAndPayment`),
            icon: <StepperMoney />,
            component: <OrderDeliveryForm updateButtonDisabled={updateButtonDisabled} />,
            isActive: false,
            isPassed: false,
            isLast: false,
            isFirst: false,
            isButtonDisabled: !isPaymentValid,
        },
        {
            id: 3,
            label: t(`order:stepper.orderConfirmed`),
            icon: <StepperCheckMark />,
            component: <PlacedOrder />,
            isActive: false,
            isPassed: false,
            isLast: true,
            isFirst: false,
            isButtonDisabled: false,
        }
    ]

    const [stepsContent, setStepsContent] = useState<Array<IStepContent>>(initialStepContent) //steps data

    useEffect(() => setStepsContent(initialStepContent), [lang])

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

    // if (!Object.keys(basketProducts).length) {
    //     return null
    // }

    return (
        <div className={styles.wrraper}>
            <StepperBox
                stepsContent={stepsContent}
                nextButtonHandler={nextButtonHandler}
                backButtonHandler={backButtonHandler}
                products={basketProducts}
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