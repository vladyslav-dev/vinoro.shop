import React, { useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import styles from './CategoryModal.module.scss';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { ICategory } from '@/interfaces/category';
import { LocaleEnum } from '@/enums/index';

interface CategoryModalProps {
    category: ICategory[];
    closeHandler: () => void;
    handleScroll: (value: boolean) => void;
    language: LocaleEnum;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ category, closeHandler, handleScroll, language }) => {

    const modalRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(closeHandler, modalRef)

    const sortedCategoryByNameLength = useMemo(() => {
        const categoryCopy = [...category];
        return categoryCopy.sort((a, b) => a.category_name[language].length - b.category_name[language].length);
    }, [category, language])

    console.log(sortedCategoryByNameLength)

    const close = () => {
        closeHandler(); // close modal
        handleScroll(false) // enable fullpage scroll
    }

    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLUListElement>(null);
    const shadowTopRef = useRef<HTMLDivElement>(null);
    const shadowBottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const wrapper = wrapperRef.current;
        const content = contentRef.current;

        if (content!.scrollHeight === content?.offsetHeight) {
            shadowTopRef!.current!.style.opacity = '0';
            shadowBottomRef!.current!.style.opacity = '0'
            return
        }

        function setShadow () {

            const contentScrollHeight = content!.scrollHeight - wrapper!.offsetHeight;

            const currentScroll = content!.scrollTop / (contentScrollHeight);

            shadowTopRef!.current!.style.opacity = String(currentScroll);
            shadowBottomRef!.current!.style.opacity = String((1 - currentScroll));
        }

        content!.addEventListener('scroll', setShadow);

        return () => {
            content!.removeEventListener('scroll', setShadow);
        }

    }, [])

    return (
        <div className={styles.modal}>
            <div className={styles.modalBackground} />
            <div className={styles.modalBox} ref={modalRef}>
                <span className={styles.modalBoxClose} onClick={close}>
                    <span />
                    <span />
                </span>
                <div className={styles.modalContent} ref={wrapperRef}>
                    <div className={`${styles.shadow} ${styles.top}`} ref={shadowTopRef} />
                    <div className={`${styles.shadow} ${styles.bottom}`} ref={shadowBottomRef} />
                    <ul className={styles.modalList} ref={contentRef}>
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