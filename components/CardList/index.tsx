import React from 'react';
import styles from './CardList.module.scss';

import Card from '@/components/Card';
import { IProduct } from '@/interfaces/product';
export interface CardListProps {
    products?: Array<IProduct>;
}

const CardList = ({ products }: CardListProps) => (
    <div className={`${styles.cardList}`}>
        {products?.map(product => <Card product={product} key={product?.id} />)}
    </div>
)


export default CardList;