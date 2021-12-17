import React, { useState } from 'react';
import Router from 'next/router';
import styles from "./BurgerMenu.module.scss";
import HeaderIcon from "@/components/HeaderIcon";
import BurgerMenuTree from "@/components/BurgerMenuTree";

import { ICategory } from '@/interfaces/ICategory';

interface BurgerMenuProps {
    category?: Array<ICategory>;
}


const BurgerMenu = (props: BurgerMenuProps) => {

    const { category } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    Router.events.on('routeChangeStart', () => setIsMenuOpen(false));


    return (
        <>
            <div className={styles.burgerMenu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <HeaderIcon label="МЕНЮ" className={isMenuOpen ? styles.hideLabel : null}>
                    <div className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : null}`}>
                        <div />
                        <div />
                        <div />
                    </div>
                </HeaderIcon>
            </div>
            <BurgerMenuTree category={category} isActive={isMenuOpen} />
            <div 
                className={`${styles.menuBackground} ${isMenuOpen ? styles.menuBackgroundActive : null}`}
                onClick={() => setIsMenuOpen(false)}
            />
        </>
    )
}

export default BurgerMenu