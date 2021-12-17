import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link'

import { HeartSvg } from '@/icons/Heart';
import { BagSvg } from '@/icons/Bag';
import { WorldSvg } from '@/icons/World';

import Logo from "@/components/Logo";
import BurgerMenu from "@/components/BurgerMenu";
import HeaderIcon from '@/components/HeaderIcon';
import Basket from '@/components/Basket';

import { ICategory } from '@/interfaces/ICategory';

export interface NavbarProps {
    category?: Array<ICategory>;
    color?: string;
};

const Navbar = (props: NavbarProps) => {

    const { category, color } = props;
    return (
        <>
            <div className={styles.navbarWrapper} style={{ backgroundColor: color || "#1A1A1A" }}>
                <div className={styles["container-xl"]}>
                    <div className={styles.navbar}>
                        <BurgerMenu category={category} />
                        <div className={styles.navbarLogo}>
                            <Link href="/">
                                <a>
                                    <Logo />
                                </a>
                            </Link>
                        </div>
                        <div className={styles.navbarIconList}>
                            <div className={styles.navbarIcon}>
                                <Link href="/favorite/">
                                    <div className={styles.favoriteIcon}>
                                        <HeaderIcon label={"ИЗБРАННОЕ"}>
                                            <HeartSvg />
                                        </HeaderIcon>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.navbarIcon}>
                                <HeaderIcon label={"КОРЗИНА"} className={styles.basketIcon}>
                                    <BagSvg />
                                    <div className={styles.basket}>
                                        <Basket />
                                    </div>
                                </HeaderIcon>
                            </div>
                            <div className={styles.navbarIcon}>
                                <HeaderIcon label={"ЯЗЫК"}>
                                    <WorldSvg />
                                </HeaderIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {color !== "transparent" && <div className={styles.navbarSimulator} />}
        </>
    );
};

export default Navbar;