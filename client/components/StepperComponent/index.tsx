import React from 'react'
import styles from './StepperComponent.module.scss'

//Components
import Button from '../Button'
import Step from '../Step'

const StepperComponent = ({stepsContent, step, nextButtonHandler, children, chooseStep}) => {
    return (
        <div className={styles.content}>
            <div className={styles.steps}>
                {
                    stepsContent.map(el => {
                        return <Step data={el} chooseStep={chooseStep} key={el.id}/>
                    })
                }
            </div>
            {children}
            <div className={styles.buttonFiled}>
                <Button label="Продолжить" click={nextButtonHandler}/>
            </div>
        </div>
    )
}

export default StepperComponent
