import React from 'react';
import styles from './Ranger.module.scss'

const Ranger = ({ rangeHandler }) => {

    return (
        <div className={styles.rangerWrapper}>
            <span>Вид: </span>
            <button name="sm" onClick={rangeHandler}>S</button>
            <button name="md" onClick={rangeHandler}>M</button>
            <button name="lg" onClick={rangeHandler}>L</button>
        </div>
    )
}


export default Ranger;