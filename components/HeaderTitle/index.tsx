import React, { useState } from 'react';
import styles from './HeaderTitle.module.scss';
import CategoryModal from '@/components/CategoryModal';
import useTranslation from 'next-translate/useTranslation'
import { ICatalog } from '@/interfaces/catalog';
import { ICategory } from '@/interfaces/category';
import useLanguage from '@/hooks/useLanguage';
import Portal from '@/pages/Portal';

interface HeaderTitleProps {
    catalog: ICatalog;
    category: ICategory[];
    interfaceHandlers: {
        showInterface: () => void;
        hideInterface: () => void;
    };
    handleScroll: (value: boolean) => void;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ catalog, category, interfaceHandlers, handleScroll }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const { t } = useTranslation()

    const { language } = useLanguage();

    const closeModalHandler = () => {
        setIsModalOpen(false)
        handleScroll(false)
        interfaceHandlers.showInterface()
    }
    const openModalHandler = () => {
        setIsModalOpen(true)
        handleScroll(true)
        interfaceHandlers.hideInterface()
    }

    return (
        <div className={styles.headerTitle}>
            {!isModalOpen ? (
                <>
                    <h3 className={styles.title}>{catalog.catalog_name[language]}</h3>
                    <button className={styles.button} onClick={openModalHandler}>{t("home:homeButton")}</button>
                </>
            ) : null}
            {isModalOpen ? (
                <Portal>
                    <CategoryModal
                        closeHandler={closeModalHandler}
                        handleScroll={handleScroll}
                        category={category}
                        language={language}
                    />
                </Portal>
            ) : null}
        </div>
    )
}

export default HeaderTitle