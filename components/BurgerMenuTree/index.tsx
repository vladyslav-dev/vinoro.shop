import React, { useEffect } from 'react'
import styles from "./BurgerMenuTree.module.scss";
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import CategoryTree from '@/components/CategoryTree';

import { ContactsSvg } from '@/icons/Contacts';
import { CatalogSvg } from '@/icons/Catalog';
import { SortArrorSvg } from '@/icons/Arrow';
import { HomeSvg } from '@/icons/Home';
import { HelpSvg } from '@/icons/Help';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { useDispatch } from 'react-redux';
import { setCatalogOpen } from '@/store/slices/catalog';

interface BurgerMenuTreeProps {
    isActive?: boolean;
}

const BurgerMenuTree = (props: BurgerMenuTreeProps) => {
    const { isActive } = props;

    const dispatch = useDispatch();

    const { currentCatalog, isCatalogOpen } = useSelector((state: RootState) => state.catalogReducer);

    const { t } = useTranslation();

    useEffect(() => {
        dispatch(setCatalogOpen(true));
    }, [currentCatalog])

    return (
        <div className={`${styles.menu} ${isActive ? styles.menuActive : null}`}>
            <ul className={`${styles.menuList} ${isCatalogOpen ? styles.menuListHide : null}`}>
                <li className={styles.menuListItem}>
                    <Link href={`/`}>
                        <a>
                            <HomeSvg color='#fff' />
                            <span>{t("common:menu.main")}</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.menuListItem}>
                    <a onClick={() => dispatch(setCatalogOpen(true))}>
                        <CatalogSvg color='#fff' />
                        <span>{t("common:menu.catalog")}</span>
                    </a>
                </li>
                <li className={styles.menuListItem}>
                    <Link href={`/contacts`}>
                        <a>
                            <ContactsSvg color='#fff' />
                            <span>{t("common:menu.contacts")}</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.menuListItem}>
                    <Link href={`/help`}>
                        <a>
                            <HelpSvg color='#fff' />
                            <span>{t("common:menu.help")}</span>
                        </a>
                    </Link>
                </li>
            </ul>
            <div className={`${styles.catalog} ${isCatalogOpen ? styles.catalogActive : null}`}>
                <CategoryTree />
            </div>
            <button
                className={`${styles.catalogBack} ${isCatalogOpen ? styles.catalogBackActive : null}`}
                onClick={() => dispatch(setCatalogOpen(false))}
            >
                <SortArrorSvg color='#fff' />
                <span>{t("common:menu.catalog")}</span>
            </button>
        </div>
    )
}

export default BurgerMenuTree;