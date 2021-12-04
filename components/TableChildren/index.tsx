import React from 'react'
import styles from './TableChildren.module.scss'

const TableChildren = ({name, value}) => {

    return (
        <div className={styles.contentRow}>
            <span className={styles.contentColumn}>{name}</span>
            <span className={styles.contentColumn}>{value}</span>
        </div>
    )
}


export default TableChildren