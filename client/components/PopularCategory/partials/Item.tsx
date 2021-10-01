import React, { FC } from 'react';
import Image from 'next/image'
import styles from '../PopularCategory.module.scss';

import { IPopularCategory } from '../../../interfaces/IPopularCategory';

export interface ItemProps {
    itemData: IPopularCategory
};

const Item: FC<IPopularCategory> = (
    {
        title,
        description,
        imageURL,
        brands,
        categoryId,
    }
) => (
        <div className={styles.item}>
            <h3 className={styles.titleMobile}>{title}</h3>
            <div className={styles.itemImage}>
                <Image src={imageURL} layout="fill" className={styles.image} quality={100} />
            </div>
            <div className={styles.itemInfo}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.brands}>
                    <p>Брэнды:</p>
                    <ul className={styles.brandsList}>
                        {brands.map((brand, key) => (
                            <li className={styles.brandsItem} key={key}>{brand}</li>
                        ))}
                        <li className={styles.brandsItem}>. . .</li>
                    </ul>
                </div>
            </div>
        </div>
    );

export default Item;