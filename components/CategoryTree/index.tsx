import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from './CategoryTree.module.scss'
import { ICategory } from '@/interfaces/ICategory'
import { SortArrorSvg } from '@/icons/Arrow';
import { Catalog as CatalogEnum } from '@/enums/Catalog';

interface CategoryTreeProps {
    category?: Array<ICategory>;
    // treeHandler?: () => void;
    // currentCategoryId?: string;
    // isTreeOpen?: boolean;
}

type CatalogName = "Продукты питания" | "Алкогольные напитки" | "Бытовая химия"

type CatalogState = CatalogName | null;

const CategoryTree = (props: CategoryTreeProps) => {
    const { category } = props;

    const router = useRouter();
   
    const [currentCatalog, setCurrentCatalog] = useState<CatalogState>((): any => {
        const categor = category && category?.find(categor => categor?._id === router.query.id);
        return categor ? CatalogEnum[categor.catalog] : null;
    })

    const getCatalog = (key: string) => {
        return category.map(item => {
            if (CatalogEnum[key] === item.catalog) {
                return (
                    <li 
                        key={item._id} 
                        className={`${styles.subCategotyItem} ${item._id === router.query.id ? styles.subCategoryItemActive : null}`}
                    >
                        <Link href={`/category/[id]`} as={`/category/${item._id}`} >
                            <a>{item.category_name}</a>
                        </Link>
                    </li>
                )
            }
        })
    }

    return (
        <>
            {category && (
                <div className={styles.categoryTree}>
                    {Object.values(CatalogEnum).map((item, key) => {
                        return typeof item === "string" && (
                            <div key={key} className={styles.categoryList}>
                                <a 
                                    className={`${styles.categoryTitle} ${currentCatalog === item ? styles.categoryTitleActive : null}`}
                                    onClick={() => {
                                        setCurrentCatalog((prevValue: CatalogState): CatalogState => {
                                            if (prevValue === item) {
                                                return null;
                                            } else {
                                                return item as CatalogName;
                                            }
                                        })
                                    }}
                                >
                                    <span>{item}</span>
                                    <SortArrorSvg />
                                </a>
                                <div className={`${styles.subCategory} ${currentCatalog === item ? styles.subCategoryActive : null}`}>
                                    <ul className={styles.subCategotyList}>
                                        {getCatalog(item)}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
}

export default CategoryTree

