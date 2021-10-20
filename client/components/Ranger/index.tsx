import React from 'react';
import styles from './Ranger.module.scss'

const Ranger = ({ rangeHandler }) => {

    return (
        <div className={styles.rangerWrapper}>
            <button name="sm" onClick={rangeHandler}>sm</button>
            <button name="md" onClick={rangeHandler}>md</button>
            <button name="lg" onClick={rangeHandler}>lg</button>
        </div>
    )
}


export default Ranger;