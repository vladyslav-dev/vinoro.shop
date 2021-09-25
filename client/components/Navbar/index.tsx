import React, { FC } from 'react';
import styles from './Navbar.module.scss';

import { HeaderLogoSvg } from '../Icons/Logo';
import { HeartSvg } from '../Icons/Heart';
import { CartSvg } from '../Icons/Cart';
import { WorldSvg } from '../Icons/World';
import HeaderIcon from '../HeaderIcon';


export interface NavbarProps {

};

const Navbar: FC<NavbarProps> = () => (
    <div className={styles.navbar}>
        <HeaderLogoSvg />

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
);

export default Navbar;