import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link'

import { HeaderLogoSvg } from '@/icons/Logo';
import { HeartSvg } from '@/icons/Heart';
import { BagSvg } from '@/icons/Bag';
import { WorldSvg } from '@/icons/World';

import NavbarMenu from '@/components/NavbarMenu';
import HeaderIcon from '@/components/HeaderIcon';
import Basket from '@/components/Basket';

import { ICategory } from '@/interfaces/ICategory';


export interface NavbarProps {
    category?: Array<ICategory>
};

const Navbar = (props: NavbarProps) => {

    const { category } = props;

    return (
        <>
            <div className={styles.navbarWrapper}>
                <div className={styles["container-xl"]}>
                    <div className={styles.navbar}>
                        <div className={styles.navbarLogo}>
                            <Link href="/">
                                <a>
                                    <HeaderLogoSvg />
                                </a>
                            </Link>
                        </div>
                        <NavbarMenu category={category} />
                        <div className={styles.navbarIcons}>
                            <HeaderIcon label={"ИЗБРАННОЕ"}>
                                <HeartSvg />
                            </HeaderIcon>
                            <HeaderIcon label={"КОРЗИНА"} className={styles.basketIcon}>
                                <BagSvg />
                                <div className={styles.basket}>
                                    <Basket />
                                </div>
                            </HeaderIcon>
                            <HeaderIcon label={"ЯЗЫК"}>
                                <WorldSvg />
                            </HeaderIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navbarSimulator} />
        </>
    );
};

export default Navbar;