import React, {useEffect} from 'react'
import styles from './StepperBox.module.scss'
import Link from 'next/link'

//Components
import Button from '@/components/Button'
import Step from '@/components/Stepper/helpers/Step'
import { IStepContent } from '../..'
import { IBasketProductCollection } from '@/interfaces/product'
import useTranslation from 'next-translate/useTranslation'
import TotalPrice from '@/components/TotalPrice'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/index'

interface StepperBoxProps {
    stepsContent: Array<IStepContent>;
    products: IBasketProductCollection;
    nextButtonHandler: () => void;
    backButtonHandler: () => void;
    children: React.ReactNode;
}

const StepperBox: React.FC<StepperBoxProps> = (
    {
        nextButtonHandler,
        backButtonHandler,
        stepsContent,
        products,
        children
    }
) => {
    const [currentStep, setCurrentStep] = React.useState<IStepContent>();

    const { t } = useTranslation();

    const { totalPrice } = useSelector((state: RootState) => state.basketReducer);

    useEffect(() => {
        const activeStep = stepsContent.find(item => item.isActive)
        if (activeStep) {
            setCurrentStep(activeStep as IStepContent)
        }
    }, [stepsContent])

    return (
        <div className={styles.content}>
            <div className={styles['container-xl']}>
                <div className={styles.steps}>
                    {
                        stepsContent.map(el => {
                            return <Step data={el} key={el.id} />
                        })
                    }
                </div>
                <div className={styles.stepContent}>
                    {children}
                </div>

                {currentStep?.isLast && currentStep?.isActive ?
                    (<div className={styles.buttonFiled}>
                        <div className={styles['container-xl']}>
                            <div className={styles.finalButton}>
                                <Link href={`/`} passHref>
                                    <a>
                                        <Button label={t(`order:goHome`)} click={() => null} styles={{ width: "220px" }} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ) : (
                    <div className={styles.buttonFiled}>
                         <div className={styles['container-xl']}>
                            <div className={styles.prevButton}>
                                {!currentStep?.isFirst ? (
                                    <Button label={t(`common:back`)} type="outlined" click={backButtonHandler} />
                                ) : (
                                    <TotalPrice totalPrice={totalPrice} />
                                )}
                            </div>
                            <div className={styles.nextButton}>
                                <Button
                                    label={currentStep?.id === 2 ? t(`order:placeAnOrder`) : t(`common:next`)}
                                    click={nextButtonHandler}
                                    type={currentStep?.isButtonDisabled || !Object.keys(products).length ? "disabled" : "default"}
                                />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default StepperBox