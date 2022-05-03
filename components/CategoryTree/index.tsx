import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import styles from './CategoryTree.module.scss';
import { SortArrorSvg } from '@/icons/Arrow';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { ICatalogCollection } from '@/interfaces/catalog';
import { ICategory, ICategoryCollection } from '@/interfaces/category';
import useLanguage from '@/hooks/useLanguage';

interface ICatalogRef {
    [catalogId: string]: {
        ref: HTMLDivElement;
        isActive: boolean;
    }
}

const CategoryTree = () => {

    const { language } = useLanguage();

    const categoryTreeRef = useRef<HTMLDivElement>(null);
    const currentCategoryRef = useRef<HTMLLIElement>(null);

    const {
        catalogCollection,
        categoryCollection,
        currentCategory,
        isLoaded
    }: {
        catalogCollection: ICatalogCollection;
        categoryCollection: ICategoryCollection;
        currentCategory: string
        isLoaded: boolean;
    } = useSelector((state: RootState) => state.catalogReducer);

    const [catalogHeight, setCatalogHeight] = useState(0);

    const [currentCatalog, setCurrentCatalog] = useState<string>('') // catalog id

    const catalogCollectionValues = useMemo(() => Object.values(catalogCollection), [catalogCollection])

    const catalogRefs = useRef<ICatalogRef>({});

    useEffect(() => {
        if (isLoaded && currentCategory in categoryCollection) {
            setCurrentCatalog(categoryCollection[currentCategory].catalog);
            categoryTreeRef?.current?.scrollIntoView();
            currentCategoryRef?.current?.scrollIntoView({ block: "end", inline: "end" });
        }
    }, [isLoaded, currentCategory, categoryCollection])

    useEffect(() => {
        const currentRef = Object.values(catalogRefs.current).find((item) => item.isActive);
        if(currentRef) {
            setCatalogHeight(currentRef.ref.scrollHeight);
        }
    }, [currentCatalog]);

    const getCatalog = (catalogId: keyof typeof catalogCollection) => {
        return catalogCollection[catalogId].category.map((item: ICategory) => {

            const isCurrentCategory = item?.id === currentCategory;

            const additionalProps = isCurrentCategory ? { ref: currentCategoryRef } : {};

            return (
                <li
                    key={item?.id}
                    className={`${styles.subCategotyItem} ${isCurrentCategory ? styles.subCategoryItemActive : null}`}
                    {...additionalProps}
                >
                    <Link href={`/category/[id]`} as={`/category/${item?.id}`} >
                        <a>{item?.category_name[language]}</a>
                    </Link>
                </li>
            )
        })
    }

    if (!isLoaded) return null;

    return (
        <div className={styles.categoryTree} ref={categoryTreeRef}>
            {catalogCollectionValues.map((item, key) => {

                const isCurrentCatalog = item.catalog.id === currentCatalog;;

                return (
                    <div key={key} className={styles.categoryList}>
                        <a
                            className={`${styles.categoryTitle} ${isCurrentCatalog ? styles.categoryTitleActive : null}`}
                            onClick={() => {
                                setCurrentCatalog((prevValue) => {
                                    if (prevValue === item.catalog.id) {
                                        return '';
                                    } else {
                                        return item.catalog.id;
                                    }
                                })
                            }}
                        >
                            <span>{item.catalog.catalog_name[language]}</span>
                            <SortArrorSvg />
                        </a>
                        <div
                            className={`${styles.subCategory} ${isCurrentCatalog ? styles.subCategoryActive : null}`}
                            ref={(ref: HTMLDivElement) => {
                                catalogRefs.current[item.catalog.id] = { ref, isActive: !!isCurrentCatalog }
                            }}
                            style={{
                                maxHeight: isCurrentCatalog ? catalogHeight : 0
                            }}
                        >
                            <ul className={styles.subCategotyList}>
                                {getCatalog(item.catalog.id)}
                            </ul>
                        </div>
                    </div>
                )})
            }
        </div>
    );
}

export default React.memo(CategoryTree);

