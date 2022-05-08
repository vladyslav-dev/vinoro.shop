import React, { useState, useRef } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { IProduct } from '@/interfaces/product';
import { sortMethod } from '@/utils/sortMethod';
import { SortArrorSvg } from '@/icons/Arrow';
import styles from './SortSelect.module.scss';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';

type MethodType = "default" | "ascendingPrice" | "descendingPrice"

interface SelectOptions {
    readonly method: MethodType;
    readonly label: string;
    selected: boolean;
}

interface SortSelectProps {
    updateProductList: React.Dispatch<React.SetStateAction<Array<IProduct>>>;
    products: Array<IProduct>;
}

const SortSelect = (props: SortSelectProps) => {

    const { updateProductList, products } = props;

    const defaultProducts = useRef(products);

    const { t } = useTranslation();

    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

    const titleRef = useRef<HTMLSpanElement>(null)

    useOnClickOutside(() => setIsSelectOpen(false), titleRef)

    const [optionList, setOptionList] = useState<Array<SelectOptions>>([
        { method: 'default', label: t("common:toolbar.default"), selected: true },
        { method: 'ascendingPrice', label: t("common:toolbar.ascendingPrice"), selected: false },
        { method: 'descendingPrice', label: t("common:toolbar.descendingPrice"), selected: false },
    ])

    useEffect(() => {
        setOptionList((prev) => {
            return prev.map(item => ({
                ...item,
                label: t(`common:toolbar.${item.method}`),
            } as SelectOptions))
        })
    }, [t])

    const sortHandler = (method: string, updateProductList: React.Dispatch<React.SetStateAction<Array<IProduct>>>): void => {
        setOptionList([...optionList.map(option => {
            if (option.method === method) {
                updateProductList(sortMethod[option.method]([...defaultProducts.current]))
                return {
                    ...option,
                    selected: true
                }
            } else {
                return {
                    ...option,
                    selected: false
                }
            }
        })])
    }

    return (
        <div className={styles.selectWrapper}>
            <span className={styles.selectTitle} ref={titleRef} onClick={() => setIsSelectOpen(!isSelectOpen)}>
                <span>{t("common:toolbar.sortBy")}</span>
                <span className={isSelectOpen ? styles.selectTitleArrowActive : styles.selectTitleArrow}>
                    <SortArrorSvg />
                </span>
            </span>
            <ul className={isSelectOpen ? styles.selectListActive : styles.selectList}>
                {optionList.map(option => (
                    <li
                        key={option.method}
                        id={option.method}
                        className={`${styles.selectListItem} ${option.selected ? styles.selectListItemActive : ""}`}
                        onClick={(event: React.MouseEvent) => sortHandler((event.target as HTMLLIElement).id, updateProductList)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SortSelect
