import React, { useState } from 'react'
import styles from './CategoryTree.module.scss'
import { ICategory } from '@/interfaces/ICategory'
import { Catalog } from '../../enums/Catalog'

interface CategoryTreeProps {
    category? : Array<ICategory>;
    hideTree? : boolean;
    hideHandler: () => void;
}

const CategoryTree = (props : CategoryTreeProps) => {
    const { category, hideHandler, hideTree } = props

    return (
        <div className={hideTree ? styles.hideContent : styles.fullConetnt}>
            <div onClick={() => hideHandler()}>
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

