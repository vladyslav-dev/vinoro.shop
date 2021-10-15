import React, { useState } from 'react'
import Link from 'next/link'
import styles from './CategoryTree.module.scss'
import { ICategory } from '@/interfaces/ICategory'
import { Catalog } from '../../enums/Catalog'

interface CategoryTreeProps {
    category?: Array<ICategory>;
    hideTree?: boolean;
    hideHandler: () => void;
    currentCategoryId: String;
    isTreeOpen: boolean;
    handler: () => void;
}

const CategoryTree = (props: CategoryTreeProps) => {
    const { category, hideHandler, handler, isTreeOpen, hideTree, currentCategoryId } = props

//     return (
//         <div className={styles.wrraper}>
//             <div className={hideTree ? styles.hideContent : styles.fullConetnt}>
//     isTreeOpen?: boolean;
//     handler: () => void;
// }

{/* const CategoryTree = (props: CategoryTreeProps) => {
    const { category, handler, isTreeOpen } = props */}

    return (
        <div className={isTreeOpen ? styles.fullConetnt : styles.hideContent}>
            <div onClick={() => handler()}>
                <div className={styles.content}>
                    <h3 onClick={() => hideHandler()}>{Catalog[category[0].catalog]}</h3>
                    <div className={styles.categoryContent}>
                        {
                            category.map((el) => (
                                <Link href={`/category/[id]`} as={`/category/${el._id}`} key={el._id}>
                                    <p style={currentCategoryId === el._id ? { fontWeight: 600 } : {}}>{el.category_name}</p>
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

