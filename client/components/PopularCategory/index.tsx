import React, { FC, ReactNode } from 'react';
import styles from './PopularCategory.module.scss';

import Item from './partials/Item';
import { IPopularCategory } from '../../interfaces/IPopularCategory';


export interface PopularCategoryProps {
    children?: ReactNode;
    data?: Array<IPopularCategory>
};

const PopularCategory: FC<PopularCategoryProps> = ({ children, data }) => (
    <section className={styles.popularCategory}>
        <div className={styles.container}>
            <div className={styles.list}>
                {data.length && data.map(item => (
                    <Item key={item._id} {...item} />
                ))}
            </div>
        </div>
    </section>
);

export default PopularCategory;