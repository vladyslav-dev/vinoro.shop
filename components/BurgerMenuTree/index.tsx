import React, { useState } from 'react'
import styles from "./BurgerMenuTree.module.scss";
import { useRouter } from 'next/router';
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import HeaderIcon from '@/components/HeaderIcon';
import CategoryTree from '@/components/CategoryTree';

import { ContactsSvg } from '@/icons/Contacts';
import { CatalogSvg } from '@/icons/Catalog';
import { SortArrorSvg } from '@/icons/Arrow';
import { SearchSvg } from '@/icons/Search';
import { HeartSvg } from '../Icons/Heart';
import { HomeSvg } from '@/icons/Home';
import { HelpSvg } from '@/icons/Help';

interface BurgerMenuTreeProps {
    isActive?: boolean;
    openSearchHandler: () => void;
}

const BurgerMenuTree = (props: BurgerMenuTreeProps) => {
    const { isActive, openSearchHandler } = props;

    const router = useRouter();
    const { t } = useTranslation();

    const isShowCatalog = () => {
        return router.pathname.includes("/category") || router.pathname.includes("/product")
    }

    const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(() => isShowCatalog());

    return (
        <div className={`${styles.menu} ${isActive ? styles.menuActive : null}`}>
            <ul className={`${styles.menuList} ${isCatalogOpen ? styles.menuListHide : null}`}>
                <li className={styles.menuListItem}>
                    <Link href={`/`}>
                        <a>
                            <HomeSvg />
                            <span>{t("common:menu.main")}</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.menuListItem}>
                    <a onClick={() => setIsCatalogOpen(true)}>
                        <CatalogSvg />
                        <span>{t("common:menu.catalog")}</span>
                    </a>
                </li>
                <li className={styles.menuListItem}>
                    <Link href={`/contacts`}>
                        <a>
                            <ContactsSvg />
                            <span>{t("common:menu.contacts")}</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.menuListItem}>
                    <Link href={`/help`}>
                        <a>
                            <HelpSvg />
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
                onClick={() => setIsCatalogOpen(false)}
            >
                <SortArrorSvg />
                <span>{t("common:menu.catalog")}</span>
            </button>
            <ul className={styles.bottomMenu}>
                <li className={styles.bottomMenuItem} onClick={() => openSearchHandler()}>
                    <HeaderIcon label={t("common:navbarIcons.search")}>
                        <SearchSvg />
                    </HeaderIcon>
                </li>
                <li className={styles.bottomMenuItem}>
                    <Link href="/favorite">
                        <a>
                            <HeaderIcon label={t("common:navbarIcons.favorites")}>
                                <HeartSvg />
                            </HeaderIcon>
                        </a>
                    </Link>
                </li>
                <li className={styles.bottomMenuItem}>
                    <Link href="/help">
                        <a>
                            <HeaderIcon label={t("common:menu.help")}>
                                <HelpSvg />
                            </HeaderIcon>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default BurgerMenuTree;