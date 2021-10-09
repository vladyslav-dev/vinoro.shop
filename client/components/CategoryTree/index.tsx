import React, { useState } from 'react'
import Link from 'next/link'
import styles from './CategoryTree.module.scss'
import { ICategory } from '@/interfaces/ICategory'
import { Catalog } from '../../enums/Catalog'

interface CategoryTreeProps {
    category? : Array<ICategory>;
    hideTree? : boolean;
    hideHandler: () => void;
    currentCategoryId: String;
}

const CategoryTree = (props : CategoryTreeProps) => {
    const { category, hideHandler, hideTree, currentCategoryId } = props

    return (
        <div className={styles.wrraper}>
            <div className={hideTree ? styles.hideContent : styles.fullConetnt}>
                <div className={styles.content}>
                    <h3 onClick={() => hideHandler()}>{Catalog[category[0].catalog]}</h3>
                    <div className={styles.categoryContent}>
                        {
                            category.map((el) => (
                                <Link href={`/category/[id]`} as={`/category/${el._id}`}  key={el._id}>
                                    <p style={currentCategoryId === el._id ? {fontWeight: "600"} : null}>{el.category_name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CategoryTree

