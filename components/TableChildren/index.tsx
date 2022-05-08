import React from 'react'
import { ValidDdata } from '../Stepper/helpers/PlacedOrder'
import styles from './TableChildren.module.scss'

interface TableChildrenProps extends ValidDdata {}

const TableChildren: React.FC<TableChildrenProps> = ({ label, value }) => (
    <div className={styles.contentRow}>
        <span className={styles.contentColumn}>{label}</span>
        <span className={styles.contentColumn}>{value}</span>
    </div>
)


export default TableChildren