import React from 'react'
import { IStepContent } from '../..'
import styles from './Step.module.scss'

interface StepProps {
    data: IStepContent;
}

const Step: React.FC<StepProps> = ({ data }) => (
    <div style={!data.isPassed ? {opacity: '0.4'} : {}} className={styles.content}>
        <div className={styles.icon}>
            {data.icon}
        </div>
        <div className={styles.lable}>
            <p>{data.label}</p>
        </div>
    </div>
)

export default Step
