import React, { useState, useRef } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { IProduct } from '@/interfaces/IProduct';
import { sortMethod } from '@/utils/sortMethod';
import { SortArrorSvg } from '@/icons/Arrow';
import styles from './SortSelect.module.scss';

type MethodType = "default" | "priceHigher" | "priceLower"

interface SelectOptions {
    readonly method: MethodType;
    readonly label: string;
    selected: boolean;
}

interface SortSelectProps {
    updateProductList: React.Dispatch<React.SetStateAction<Array<IProduct>>>;
    setAnimate: React.Dispatch<React.SetStateAction<boolean>>;
    defaultProductList: Array<IProduct>;
}

const SortSelect = (props: SortSelectProps) => {

    const { updateProductList, defaultProductList, setAnimate } = props;

    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

    const optionListRef = useRef<HTMLUListElement>(null)
    const titleRef = useRef<HTMLSpanElement>(null)

    useOnClickOutside(() => setIsSelectOpen(false), titleRef)

    const [optionList, setOptionList] = useState<Array<SelectOptions>>([
        { method: 'default', label: 'По умолчанию', selected: true },
        { method: 'priceHigher', label: 'По возростанию цены', selected: false },
        { method: 'priceLower', label: 'По убыванию цены', selected: false },
    ])

    const sortHandler = (method: string, updateProductList: React.Dispatch<React.SetStateAction<Array<IProduct>>>): void => {
        setOptionList([...optionList.map(option => {
            if (option.method === method) {
                updateProductList(sortMethod[option.method]([...defaultProductList]))
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
        setAnimate(prevState => !prevState)
    }

    return (
        <div className={styles.selectWrapper}>
            <span className={styles.selectTitle} ref={titleRef} onClick={() => setIsSelectOpen(!isSelectOpen)}>
                <span>Сортировать по</span>
                <span className={isSelectOpen ? styles.selectTitleArrowActive : styles.selectTitleArrow}>
                    <SortArrorSvg />
                </span>
            </span>
            <ul className={isSelectOpen ? styles.selectListActive : styles.selectList} ref={optionListRef}>
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
