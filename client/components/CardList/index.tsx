import React, { useState } from 'react';
import styles from './CardList.module.scss'
import { IProduct } from '@/interfaces/IProduct';
import Card from '../Card/index'

export interface CardListProps {
    products?: Array<IProduct>;
    customStyles?: React.CSSProperties;
    animate?: boolean;
}

const CardList = ({ products, customStyles, animate }: CardListProps) => {
    return (
        <div className={`${styles.cardList}`} style={customStyles}>
            {products.map((item, key) => <Card animate={animate} product={item} key={key} />)}
        </div>
    )
}


export default CardList;