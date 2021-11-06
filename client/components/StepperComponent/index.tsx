import React from 'react'
import styles from './StepperComponent.module.scss'

//Components
import Button from '../Button'
import Step from '../Step'
import TotalPrice from '../TotalPrice'

const StepperComponent = ({stepsContent, nextButtonHandler, backButtonHandler, products, children}) => {
    return (
        <div className={styles.content}>
            <div className={styles.steps}>
                {
                    stepsContent.map(el => {
                        return <Step data={el} key={el.id}/>
                    })
                }
            </div>
            <div className={styles.stepContent}>
                {children}
            </div>
            <div className={styles.buttonFiled}>
                <div className={styles.prevButton}>
                    <Button label="Назад" type="without" styles={{fontSize: "15px"}} click={backButtonHandler}/>
                </div>
                <div className={styles.nextButton}>
                    <TotalPrice products={products} title="Общая стоимость: "/>
                    <Button label="Продолжить" click={nextButtonHandler} styles={{width: "220px"}}/>
                </div>
            </div>
        </div>
    )
}

export default StepperComponent
