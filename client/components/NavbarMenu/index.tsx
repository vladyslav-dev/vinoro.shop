import React, { FC } from 'react';
import Link from 'next/link'

import styles from './NavbarMenu.module.scss';
import { ICategory } from '@/interfaces/ICategory';
import { Catalog as CatalogEnum } from '@/enums/Catalog';

export interface NavbarMenuProps {
    category: Array<ICategory>
};

const NavbarMenu: FC<NavbarMenuProps> = ({ category }) => {


    const getCatalog = (key: string) => {
        return category.map(item => {
            if (CatalogEnum[key] === item.catalog) {
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
                    {Object.values(CatalogEnum).map((item, key) => {
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