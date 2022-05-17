import React, { useState, useEffect, useMemo, useRef } from 'react'
import styles from './SearchModal.module.scss';
import Router from 'next/router';

import { SearchBackArrowSvg } from '@/icons/Arrow';
import { LoupeSvg } from '@/components/Icons/Loupe';

import { RootState } from '@/store/index';
import { useSelector } from 'react-redux';
import { ISearchProduct } from '@/interfaces/product';
import Link from 'next/link';
import useLanguage from '@/hooks/useLanguage';
import { ISearchCategoryCollection } from '@/interfaces/category';
import { highlightSearchedLetters } from '@/utils/search';
import useTranslation from 'next-translate/useTranslation';

interface SearchModalProps {
    closeSearch: () => void;
}

const SearchModal = ({ closeSearch }: SearchModalProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef?.current) inputRef.current.focus();
    }, [inputRef])

    const {
        searchCategory,
        searchProducts
    }: {
        searchCategory: ISearchCategoryCollection;
        searchProducts: ISearchProduct[];
    }  = useSelector((state: RootState) => state.searchReducer);

    const { t } = useTranslation();
    const { language } = useLanguage();

    const [relateQueries, setRelateQueries] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        setRelateQueries([
            t(`common:searchKeywords.coffee`),
            t(`common:searchKeywords.liquor`),
            t(`common:searchKeywords.passion`),
            t(`common:searchKeywords.chocolate`),
            t(`common:searchKeywords.persil`),
            t(`common:searchKeywords.hellmanns`),
            t(`common:searchKeywords.macaroni`),
            t(`common:searchKeywords.cheese`),
            t(`common:searchKeywords.ariel`),
            t(`common:searchKeywords.oliveOil`),
            t(`common:searchKeywords.wine`),
            t(`common:searchKeywords.tea`),
            t(`common:searchKeywords.caviar`),
            t(`common:searchKeywords.whiskey`),
            t(`common:searchKeywords.fragolino`),
        ])
    }, [language])

    const search = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query || !Object.keys(searchProducts).length) return

        const productResult: ISearchProduct[] = searchProducts.filter((item: ISearchProduct) => item.name[language].toLowerCase().includes(query));

        const result = productResult.reduce((acc: any, item) => {
            acc[item.category] = {
                categoryName: searchCategory[item.category],
                products: acc[item.category] ? [...acc[item.category]['products'], item] : [item]
            }
            return acc
        }, {})

        const searchResult = Object.values(result)
        const totalProducts = searchResult.reduce((acc, item: any) => {
            acc += item.products.length
            return acc;
        }, 0) as number

        return { searchResult, totalProducts }

    }, [searchQuery])

    Router.events.on('routeChangeComplete', () => closeSearch())

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'auto';
            document.body.style.position = 'initial';
        }
    }, [])

    const redirectToSearch = (param?: string) => Router.push({
        pathname: '/search',
        query: {query: param || searchQuery}
    })

    const submitHandler = (event: React.FormEvent<HTMLFormElement | HTMLSpanElement>) => {
        event?.preventDefault();
        redirectToSearch();
    }

    const relateQueryHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const button = event.target as HTMLElement;
        redirectToSearch(button.innerText)
    }

    const closeModal = () => {
        closeSearch();
        setSearchQuery('');
    }

    return (
        <div className={styles.myModal}>
            <div className={styles.myModalRow}>
                <div className={styles["container-xl"]}>
                    <div className={styles.wrapper}>
                        <div onClick={closeModal} className={styles.back}>
                            <SearchBackArrowSvg color='#fff' />
                            <span>{t(`common:back`)}</span>
                        </div>
                        <div className={styles.inputWrapper}>
                            <h3>{t(`common:findTheProductHere`)}</h3>
                            <form className={styles.inputRow} onSubmit={submitHandler}>
                                <input
                                    type="text"
                                    placeholder={t(`common:search`)}
                                    value={searchQuery}
                                    ref={inputRef}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <span className={styles.inputIcon} onClick={submitHandler}>
                                    <LoupeSvg />
                                </span>
                                {search?.searchResult && (
                                    <div className={styles.searchOutput}>
                                        <span className={styles.searchOutputLength}>{t(`common:faunded`)}: {search.totalProducts}</span>
                                            {!!search.searchResult.length && (
                                                <ul className={styles.searchList}>
                                                {search.searchResult.map((item: any, key: any) => (
                                                    <li key={key} className={styles.searchItem}>
                                                        <span className={styles.searchItemCategory}>
                                                            {t(`common:category`)}: <span className={styles.categoryName}>{item.categoryName[language]}</span>
                                                        </span>
                                                        <div className={styles.searchItemOutput}>
                                                            {item.products.map((product: ISearchProduct, index: number) => {
                                                                if (index < 5) {
                                                                    return (
                                                                        <Link href={`/product/[id]`} as={`/product/${product?.id}`} key={product.id}>
                                                                            <a className={styles.itemOutputLink} onClick={() => setSearchQuery('')}>
                                                                                <span className={styles.itemOutput}>
                                                                                    {highlightSearchedLetters(product.name[language], searchQuery).map((item, innerKey) => {
                                                                                        return (
                                                                                            <span key={innerKey} className={`${styles.letter} ${item.isHighlighted ? styles.highlight : ''}`}>
                                                                                                {item.letter}
                                                                                            </span>
                                                                                        )
                                                                                    })}
                                                                                </span>
                                                                            </a>
                                                                        </Link>
                                                                    )
                                                                }
                                                                if (item.products.length - 1 === index) {
                                                                    return (
                                                                        <Link href={`/category/[id]`} as={`/category/${product?.category}`} key={product.id}>
                                                                            <a className={`${styles.searchItemCategory} ${styles.searchItemCategoryRest}`} onClick={() => setSearchQuery('')}>
                                                                                {t(`common:moreInCategory`, { variable: item.products.length - 5 })}&nbsp;
                                                                                <span className={styles.categoryName}>{searchCategory[product.category][language]}</span>
                                                                            </a>
                                                                        </Link>
                                                                    )
                                                                }
                                                            })}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </form>
                            <div className={styles.relateQuery}>
                                <span className={styles.relateQueryTitle}>{t(`common:popularQueries`)}:</span>
                                {relateQueries.map(query => (
                                    <button onClick={relateQueryHandler} className={styles.query} key={query}>{query}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(SearchModal);
