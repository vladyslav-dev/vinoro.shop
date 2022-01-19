import React, { useMemo, useRef } from 'react';
import Link from 'next/link';
import styles from './CategoryModal.module.scss';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { ICategory } from '@/interfaces/ICategory';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

interface CategoryModalProps {
    category?: ICategory[];
    closeHandler?: () => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ category, closeHandler }) => {
    

    const modalRef = useRef<HTMLDivElement>(null)
    const { t } = useTranslation();

    useOnClickOutside(closeHandler, modalRef)

    const sortedCategoryByNameLength = useMemo(() => {
        return category.sort((a, b) => a.category_name.length - b.category_name.length)
    }, [category])

    return (
        <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
                pageInitial: {
                    opacity: 0,
                },
                pageAnimate: {
                    opacity: 1,
                },
                pageExit: {
                    backgroundColor: "white",
                    opacity: 0,
                }
            }}
            transition={{
                x: { type: "spring", stiffness: 100 },
                default: { duration: .3 },
              }}
        >
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
                                <li className={styles.modalItem} key={item._id}>
                                    <Link href={`category/${item._id}`}>
                                        <a>
                                            {t(`common:category.${item.category_name}`)}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CategoryModal;