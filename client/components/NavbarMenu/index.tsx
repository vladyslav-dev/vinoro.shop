import React, { FC } from 'react';
import Link from 'next/link'

import styles from './NavbarMenu.module.scss';
import { ICategory } from '@/interfaces/ICategory';

export interface NavbarMenuProps {
    category: Array<ICategory>
};

enum Catalog {
    "Продукты питания" = 0,
    "Алкогольные напитки" = 1,
    "Бытовая химия" = 2,
}

const NavbarMenu: FC<NavbarMenuProps> = ({ category }) => {


    const getCatalog = (key: string) => {
        return category.map(item => {
            if (Catalog[key] === item.catalog) {
                return (
                    <li key={item._id}>
                        <Link href={`/category/[id]`} as={`/category/${item._id}`} >
                            <a>{item.category_name}</a>
                        </Link>
                    </li>
                )
            }
        })
    }

    return (
        <>
            {category && (
                <div className={styles.navbarMenu}>
                    {Object.values(Catalog).map((item, key) => {
                        return typeof item === "string" && (
                            <div key={key} className={styles.category}>
                                <a> {item}</a>
                                <div className={styles.subCategory}>
                                    <ul className={styles.subCategotyWrapper}>
                                        {getCatalog(item)}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
}

export default NavbarMenu;