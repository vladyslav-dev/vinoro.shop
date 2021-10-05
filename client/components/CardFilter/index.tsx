import React from 'react'
import styles from './CardFilter.module.scss'

import FilterSelect from '../FilterSelect/index'

const index = () => {
    return (
        <div className={styles.content}>
            <FilterSelect />
        </div>
    )
}

export default index
