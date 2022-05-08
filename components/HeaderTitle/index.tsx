import React from 'react';
import styles from './HeaderTitle.module.scss';
import useTranslation from 'next-translate/useTranslation'
import { ICatalog } from '@/interfaces/catalog';
import useLanguage from '@/hooks/useLanguage';
import { setCatalogOpen, setCurrentCatalog, setMenuOpen } from '@/store/slices/catalog';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';

interface HeaderTitleProps {
    catalog: ICatalog;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ catalog }) => {

    const dispatch = useDispatch();

    const { currentCatalog } = useSelector((state: RootState) => state.catalogReducer);

    const { t } = useTranslation()

    const { language } = useLanguage();

    const openModalHandler = () => {
        if (currentCatalog !== catalog.id) {
            dispatch(setCurrentCatalog(catalog.id));
        }

        dispatch(setCatalogOpen(true));
        dispatch(setMenuOpen(true));
    }

    return (
        <div className={styles.headerTitle}>
            <h3 className={styles.title}>{catalog.catalog_name[language]}</h3>
            <button className={styles.button} onClick={openModalHandler}>{t("home:homeButton")}</button>
        </div>
    )
}

export default HeaderTitle