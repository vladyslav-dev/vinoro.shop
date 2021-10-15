import React, { useState } from 'react'
import styles from './CategoryTree.module.scss'
import { ICategory } from '@/interfaces/ICategory'
import { Catalog } from '../../enums/Catalog'

interface CategoryTreeProps {
    category?: Array<ICategory>;
    isTreeOpen?: boolean;
    handler: () => void;
}

const CategoryTree = (props: CategoryTreeProps) => {
    const { category, handler, isTreeOpen } = props

    return (
        <div className={isTreeOpen ? styles.fullConetnt : styles.hideContent}>
            <div onClick={() => handler()}>
                <div className={styles.content}>
                    <h3>{Catalog[category[0].catalog]}</h3>
                    <div className={styles.categoryContent}>
                        {
                            category.map((el) => (
                                <p key={el._id}>{el.category_name}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryTree

