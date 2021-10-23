import React from 'react';
import styles from './Ranger.module.scss'

const Ranger = ({ rangeHandler }) => {

    return (
        <div className={styles.rangerWrapper}>
            <button name="sm" onClick={rangeHandler}>5</button>
            <button name="md" onClick={rangeHandler}>4</button>
            <button name="lg" onClick={rangeHandler}>3</button>
        </div>
    )
}


export default Ranger;