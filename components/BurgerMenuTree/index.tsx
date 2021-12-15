import React from 'react'
import styles from "./BurgerMenuTree.module.scss";
import Link from 'next/link'

import { HomeSvg } from '@/icons/Home';
import { CatalogSvg } from '@/icons/Catalog';
import { ContactsSvg } from '@/icons/Contacts';
import { HelpSvg } from '@/icons/Help';

const menuData = [
    {
        label: "ГЛАВНАЯ",
        icon: <HomeSvg />,
        route: "/",
    },
    {
        label: "КАТАЛОГ",
        icon: <CatalogSvg />,
        route: null,
    },
    {
        label: "КОНТАКТЫ",
        icon: <ContactsSvg />,
        route: "/",
    },
    {
        label: "ПОМОЩЬ",
        icon: <HelpSvg />,
        route: "/",
    },
]

interface BurgerMenuTreeProps { isActive: boolean }

const BurgerMenuTree = (props: BurgerMenuTreeProps) => {
    const { isActive } = props;
    console.log(process.env);
    return (
        <div className={`${styles.menu} ${isActive ? styles.menuActive : null}`}>
            <ul className={styles.menuList}>
                <li className={styles.menuListItem}>
                    <Link href={`/`}>
                        <a>
                            <HomeSvg />
                            <span>ГЛАВНАЯ</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.menuListItem}>
                        <a>
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
        </div>
    )
}

export default BurgerMenuTree;