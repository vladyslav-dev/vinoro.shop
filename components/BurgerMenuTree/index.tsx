import React, { useState } from 'react'
import styles from "./BurgerMenuTree.module.scss";
import Link from 'next/link'
import { useRouter } from 'next/router';

import { HomeSvg } from '@/icons/Home';
import { CatalogSvg } from '@/icons/Catalog';
import { ContactsSvg } from '@/icons/Contacts';
import { HelpSvg } from '@/icons/Help';
import { SortArrorSvg } from '@/icons/Arrow';

import CategoryTree from '@/components/CategoryTree';
import { ICategory } from '@/interfaces/ICategory';
interface BurgerMenuTreeProps { 
    isActive?: boolean;
    category?: Array<ICategory>;
}

const BurgerMenuTree = (props: BurgerMenuTreeProps) => {
    const { isActive, category } = props;

    const router = useRouter()

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
                            <span>ГЛАВНАЯ</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.menuListItem}>
                    <a onClick={() => setIsCatalogOpen(true)}>
                        <CatalogSvg />
                        <span>КАТАЛОГ</span>
                    </a>
                </li>
                <li className={styles.menuListItem}>
                    <Link href={`/`}>
                        <a>
                            <ContactsSvg />
                            <span>КОНТАКТЫ</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.menuListItem}>
                    <Link href={`/`}>
                        <a>
                            <HelpSvg />
                            <span>ПОМОЩЬ</span>
                        </a>
                    </Link>
                </li>
            </ul>
            <div className={`${styles.catalog} ${isCatalogOpen ? styles.catalogActive : null}`}>
                <CategoryTree category={category}  />
            </div>
            <button 
                className={`${styles.catalogBack} ${isCatalogOpen ? styles.catalogBackActive : null}`}
                onClick={() => setIsCatalogOpen(false)}
            >
                <SortArrorSvg />
                <span>КАТАЛОГ</span>
            </button>
        </div>
    )
}

export default BurgerMenuTree;