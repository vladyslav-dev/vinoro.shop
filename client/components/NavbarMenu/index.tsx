import React, { FC } from 'react';
import styles from './NavbarMenu.module.scss';
import { ICategory } from '../../interfaces/ICategory';

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
                    <div key={item._id}>{item.category_name}</div>
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
                            <>
                                <div key={key}>{item}</div>
                                <div>
                                    {getCatalog(item)}
                                </div>
                            </>
                        )
                    })}
                </div>
            )}
        </>
    );
}

export default NavbarMenu;