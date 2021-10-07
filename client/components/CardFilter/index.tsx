import React from 'react'
import styles from './CardFilter.module.scss'

import FilterSelect from '../FilterSelect/index'

const CardFilter = () => {
    return (
        <div className={styles.content}>
            <FilterSelect />
        </div>
    )
}

export default CardFilter
