import React, { useState } from 'react'
import styles from "./BurgerMenu.module.scss";
import HeaderIcon from "@/components/HeaderIcon";
import BurgerMenuTree from "@/components/BurgerMenuTree";

const BurgerMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <BurgerMenuTree isActive={isMenuOpen} />
        </>
    )
}

export default BurgerMenu