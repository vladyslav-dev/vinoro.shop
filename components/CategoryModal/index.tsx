import React, { useMemo, useRef } from 'react';
import Link from 'next/link';
import styles from './CategoryModal.module.scss';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { ICategory } from '@/interfaces/category';
import useLanguage from '@/hooks/useLanguage';

interface CategoryModalProps {
    category: ICategory[];
    closeHandler: () => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ category, closeHandler }) => {


    console.log(category)

    const modalRef = useRef<HTMLDivElement>(null)

    const { language } = useLanguage();

    useOnClickOutside(closeHandler, modalRef)

    const sortedCategoryByNameLength = useMemo(() => {
        return category.slice().sort((a, b) => a.category_name[language].length - b.category_name[language].length);

    }, [category])

    console.log(sortedCategoryByNameLength)

    return (
        <div className={styles.modal}>
            <div className={styles.modalBackground} />
            <div className={styles.modalBox} ref={modalRef}>
                <span className={styles.modalBoxClose} onClick={closeHandler}>
                    <span />
                    <span />
                </span>
                <div className={styles.modalContent}>
                    <ul className={styles.modalList}>
                        {sortedCategoryByNameLength.map((item) => (
                            <li className={styles.modalItem} key={item?.id}>
                                <Link href={`category/${item?.id}`}>
                                    <a>
                                        {item?.category_name[language]}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoryModal;