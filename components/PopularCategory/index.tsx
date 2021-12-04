import React, { FC } from 'react';
import styles from './PopularCategory.module.scss';

import Item from './partials/Item';
import { IPopularCategory } from '@/interfaces/IPopularCategory';


export interface PopularCategoryProps {
    data?: Array<IPopularCategory>
};

const PopularCategory: FC<PopularCategoryProps> = ({ data }) => (
    <section className={styles.popularCategory}>
        <div className={styles.container}>
            <div className={styles.list}>
                {data?.length && data.map(item => (
                    <Item key={item._id} {...item} />
                ))}
            </div>
        </div>
    </section>
);

export default PopularCategory;