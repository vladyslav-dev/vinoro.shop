import React, { FC } from 'react';
import styles from './Navbar.module.scss';
import axios from 'axios';

import { HeaderLogoSvg } from '../Icons/Logo';
import { HeartSvg } from '../Icons/Heart';
import { CartSvg } from '../Icons/Cart';
import { WorldSvg } from '../Icons/World';

import NavbarMenu from '../NavbarMenu';
import HeaderIcon from '../HeaderIcon';

import { ICategory } from '../../interfaces/ICategory';


export interface NavbarProps {
    category?: Array<ICategory>
};

const Navbar = (props: NavbarProps) => {

    const { category } = props;

    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbar}>
                    <HeaderLogoSvg />
                    <NavbarMenu category={category} />
                    <div>
                        <HeaderIcon label={"ИЗБРАННОЕ"}>
                            <HeartSvg />
                        </HeaderIcon>
                        <HeaderIcon label={"КОРЗИНА"}>
                            <CartSvg />
                        </HeaderIcon>
                        <HeaderIcon label={"ЯЗЫК"}>
                            <WorldSvg />
                        </HeaderIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;