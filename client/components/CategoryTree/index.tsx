import React, { useState } from 'react'
import Link from 'next/link'
import styles from './CategoryTree.module.scss'
import { ICategory } from '@/interfaces/ICategory'
import { Catalog } from '../../enums/Catalog'
import { TreeArrowSvg } from '@/icons/Arrow';

interface CategoryTreeProps {
    category?: Array<ICategory>;
    treeHandler?: () => void;
    currentCategoryId?: string;
    isTreeOpen?: boolean;
}

const CategoryTree = (props: CategoryTreeProps) => {
    const { category, treeHandler, isTreeOpen, currentCategoryId } = props
    return (
        <div className={isTreeOpen ? styles.fullConetnt : styles.hideContent}>
            <div className={styles.content}>
                <h3>{Catalog[category[0].catalog]}</h3>
                <ul className={styles.categoryList}>
                    {category.map((el) => (
                        <Link href={`/category/[id]`} as={`/category/${el._id}`} key={el._id}>
                            <li className={styles.categoryListItem} style={currentCategoryId === el._id ? { fontWeight: 600 } : {}}>{el.category_name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className={isTreeOpen ? styles.treeArrow : styles.treeArrowClosed} onClick={() => treeHandler()}>
                <TreeArrowSvg />
            </div>
        </div>
    )
}

export default CategoryTree

