import React from 'react';
import styles from './CardList.module.scss'
import { IProductCard } from '@/interfaces/IFavorite';
import Card from '../Card/index'

export interface CardListProps {
    products?: Array<IProductCard>;
    customStyles?: React.CSSProperties;
    animate?: boolean;
    removeButton?: boolean;
}

const CardList = ({ products, customStyles, animate, removeButton }: CardListProps) => (
    <div className={`${styles.cardList}`} style={customStyles}>
        {products?.map(product => <Card animate={animate} product={product} key={product._id} removeButton={removeButton}/>)}
    </div>
)


export default CardList;