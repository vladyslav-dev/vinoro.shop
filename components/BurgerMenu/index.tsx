import React, { useState } from 'react';
import Router from 'next/router';
import styles from "./BurgerMenu.module.scss";
import HeaderIcon from "@/components/HeaderIcon";
import BurgerMenuTree from "@/components/BurgerMenuTree";
import useTranslation from 'next-translate/useTranslation';
import useLightElements from '@/hooks/useLightElements';

interface BurgerMenuProps {
    openSearchHandler: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ openSearchHandler }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { isLight } = useLightElements();

    const { t } = useTranslation();

    Router.events.on('routeChangeStart', () => setIsMenuOpen(false));

    return (
        <>
            <div className={styles.burgerMenu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <HeaderIcon label={t("common:navbarIcons.menu")} className={isMenuOpen ? styles.hideLabel : ''}>
                    <div className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : null} ${isLight ? styles.light : ''}`} >
                        <div />
                        <div />
                        <div />
                    </div>
                </HeaderIcon>
            </div>
            <BurgerMenuTree isActive={isMenuOpen} openSearchHandler={openSearchHandler} />
            <div
                className={`${styles.menuBackground} ${isMenuOpen ? styles.menuBackgroundActive : null}`}
                onClick={() => setIsMenuOpen(false)}
            />
        </>
    )
}

export default BurgerMenu