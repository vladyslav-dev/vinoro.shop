import React from 'react'
import styles from './Step.module.scss'

const Step = ({data, chooseStep}) => {
    return (
        <div style={!data.isPassed ? {opacity: '0.4'} : {}} className={styles.content}>
            <div className={styles.icon}  onClick={() => data.isPassed ? chooseStep(data.id) : null}>
                {data.icon}
            </div>
            <div className={styles.lable}>
                <p>{data.label}</p>
            </div>
        </div>
    )
}

export default Step
