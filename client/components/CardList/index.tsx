import React from 'react';
import styles from './CardList.module.scss'
import { IProduct } from '@/interfaces/IProduct';
import Card from '../Card/index'

export interface CardListProps {
    products?: Array<IProduct>;
    customStyles?: React.CSSProperties;
    animate?: boolean;
}

const CardList = ({ products, customStyles, animate }: CardListProps) => (
    <div className={`${styles.cardList}`} style={customStyles}>
        {products.map(product => <Card animate={animate} product={product} key={product._id} />)}
    </div>
)


export default CardList;