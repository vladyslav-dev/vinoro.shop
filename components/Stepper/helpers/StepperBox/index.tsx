import React, {useEffect} from 'react'
import styles from './StepperBox.module.scss'
import Link from 'next/link'

//Components
import Button from '@/components/Button'
import Step from '@/components/Stepper/helpers/Step'
import TotalPrice from '@/components/TotalPrice'

const StepperBox = (
    {
        stepsContent,
        nextButtonHandler,
        backButtonHandler,
        products,
        children
    }
) => {
    const [currentStep, setCurrentStep] = React.useState(null)

    useEffect(() => {
        setCurrentStep(stepsContent.find(item => item.isActive))
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
                                        <Button label="На главную" click={() => null} styles={{ width: "220px" }} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ) : (
                    <div className={styles.buttonFiled}>
                         <div className={styles['container-xl']}>
                            <div className={styles.prevButton}>
                                {!currentStep?.isFirst && (
                                    <Button label="Назад" type="without" styles={{ fontSize: "15px" }} click={backButtonHandler} />
                                )}
                            </div>
                            <div className={styles.nextButton}>
                                <TotalPrice products={products} title="Общая стоимость: " />
                                <Button label="Продолжить" click={nextButtonHandler} styles={{ width: "220px" }} type={currentStep?.isButtonDisabled || !products.length ? "disabled" : "default"} />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default StepperBox