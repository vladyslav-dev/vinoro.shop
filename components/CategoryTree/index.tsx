import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import styles from './CategoryTree.module.scss';
import { GlobalContext } from '../../store';
import { SortArrorSvg } from '@/icons/Arrow';
import useCategoryEnum from '@/hooks/useCategoryEnum';
import useTranslation from 'next-translate/useTranslation';

type CatalogName = any

type CatalogState = CatalogName | null;

const CategoryTree = () => {

    const { CATEGORY } = useContext(GlobalContext)
    const { category, currentCategory, isLoaded } = CATEGORY.state
    const [currentCatalog, setCurrentCatalog] = useState<CatalogState>(null)

    const { catalogEnum } = useCategoryEnum()

    const { t } = useTranslation();

    useEffect(() => {
        if (isLoaded) {
            setCurrentCatalog((): any => {
                const categor = category?.find(categor => categor?._id === currentCategory);
                return categor ? catalogEnum[categor.catalog] : null;
            })
        }
    }, [currentCategory])

    if (!category.length) return null

    const getCatalog = (key: string) => {
        return category.map(item => {
            if (catalogEnum[key] === item.catalog) {
                return (
                    <li 
                        key={item._id} 
                        className={`${styles.subCategotyItem} ${item._id === currentCategory ? styles.subCategoryItemActive : null}`}
                    >
                        <Link href={`/category/[id]`} as={`/category/${item._id}`} >
                            <a>{t(`common:category.${item.category_name}`)}</a>
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
                    {Object.values(catalogEnum).map((item, key) => {
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

