import React from 'react'
import styles from './StepperComponent.module.scss'
import Link from 'next/link'
//Components
import Button from '../Button'
import Step from '../Step'
import TotalPrice from '../TotalPrice'

const StepperComponent = (
    {
        stepsContent,
        nextButtonHandler,
        backButtonHandler,
        products,
        children
    }
) => {

    // const lastSection = stepsContent.some(item => item.isLast && item.isActive) //find last  element

    const [currentStep, setCurrentStep] = React.useState(null)

    React.useEffect(() => {
        setCurrentStep(stepsContent.find(item => item.isActive))
    }, [stepsContent])



    return (
        <div className={styles.content}>
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

                <div className={styles.buttonFiled}>
                    <div className={styles.finalButton}>
                        <Link href={`/`}>
                            <div>
                                <Button label="На главную" click={() => null} styles={{ width: "220px" }} />
                            </div>
                        </Link>
                    </div>
                </div> :

                <div className={styles.buttonFiled}>
                    <div className={styles.prevButton}>
                        <Button label="Назад" type="without" styles={{ fontSize: "15px" }} click={backButtonHandler} />
                    </div>
                    <div className={styles.nextButton}>
                        <TotalPrice products={products} title="Общая стоимость: " />
                        <Button label="Продолжить" click={nextButtonHandler} styles={{ width: "220px" }} type={currentStep?.isButtonDisabled ? "disabled" : "default"} />
                    </div>
                </div>
            }

        </div>
    )
}

export default StepperComponent