import React from 'react';
import styles from './CardList.module.scss'
import { IProductCard } from '@/interfaces/IFavorite'

import Card from '@/components/Card';
export interface CardListProps {
    products?: Array<IProductCard>;
    removeButton?: boolean;
}

const CardList = ({ products, removeButton }: CardListProps) => (
    <div className={`${styles.cardList}`}>
        {products?.map(product => <Card product={product} key={product?.id} removeButton={removeButton} />)}
    </div>
)


export default CardList;