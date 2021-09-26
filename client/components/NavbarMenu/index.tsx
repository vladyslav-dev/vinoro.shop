import React, { FC } from 'react';
import styles from './NavbarMenu.module.scss';
import { ICategory } from '../../interfaces/ICategory';

export interface NavbarMenuProps {
    category: Array<ICategory>
};

const NavbarMenu: FC<NavbarMenuProps> = ({ category }) => (
    <>
        {category && (
            <div className={styles.navbarMenu}>
                {category.map(item => (
                    <div key={item._id}>{item.category_name}</div>
                ))}
            </div>
        )}
    </>
);

export default NavbarMenu;