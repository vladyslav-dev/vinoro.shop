import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link'

import { HeaderLogoSvg } from '@/icons/Logo';
import { HeartSvg } from '@/icons/Heart';
import { CartSvg } from '@/icons/Cart';
import { WorldSvg } from '@/icons/World';

import NavbarMenu from '@/components/NavbarMenu';
import HeaderIcon from '@/components/HeaderIcon';

import { ICategory } from '@/interfaces/ICategory';


export interface NavbarProps {
    category?: Array<ICategory>
};

const Navbar = (props: NavbarProps) => {

    const { category } = props;
    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbar}>
                    <div className={styles.navbarLogo}>
                        <Link href="/">
                            <a>
                                <HeaderLogoSvg />
                            </a>
                        </Link>
                    </div>
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