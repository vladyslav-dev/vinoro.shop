import React, { useState } from 'react';
import styles from './HeaderTitle.module.scss';
import { CategoryCollection } from '@/interfaces/ICategory';
import CategoryModal from '@/components/CategoryModal';
import { AnimatePresence } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation'

interface HeaderTitleProps extends CategoryCollection {
    interfaceHandlers?: {
        showInterface: () => void;
        hideInterface: () => void;
    }
}

const HeaderTitle = (props: HeaderTitleProps) => {
    const { title, data, interfaceHandlers } = props;
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { t } = useTranslation()

    const closeModalHandler = () => {
        setIsModalOpen(false)
        interfaceHandlers.showInterface()
    }
    const openModalHandler = () => {
        setIsModalOpen(true)
        interfaceHandlers.hideInterface()
    }
    

    return (
        <div className={styles.headerTitle}>
            {!isModalOpen ? (
                <>
                    <h1 className={styles.title}>{title}</h1>
                    <button className={styles.button} onClick={openModalHandler}>{t("home:homeButton")}</button>
                </>
            ) : null}
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {isModalOpen ? <CategoryModal closeHandler={closeModalHandler} category={data} /> : null}
            </AnimatePresence>
        </div>
    )
}

export default HeaderTitle