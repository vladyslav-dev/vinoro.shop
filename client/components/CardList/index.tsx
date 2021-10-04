import React from 'react';
import styles from './CardList.module.scss'

import Card from '../Card/index'

const CardList = ({ products }) => {

    return (
        <div className={styles.cardList}>
            {products.map((item, key) => <Card product={item} key={key}/>)}
        </div>
    )
}


export default CardList;