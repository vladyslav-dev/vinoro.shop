import React from 'react';
import Router from 'next/router';
import styles from "./BurgerMenu.module.scss";
import HeaderIcon from "@/components/HeaderIcon";
import BurgerMenuTree from "@/components/BurgerMenuTree";
import useTranslation from 'next-translate/useTranslation';
import useLightElements from '@/hooks/useLightElements';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { setMenuOpen } from '@/store/slices/catalog';

interface BurgerMenuProps {}

const BurgerMenu: React.FC<BurgerMenuProps> = () => {

    const dispatch = useDispatch();

    const { isMenuOpen } = useSelector((state: RootState) => state.catalogReducer);

    const { isLight } = useLightElements();

    const { t } = useTranslation();

    Router.events.on('routeChangeStart', () => dispatch(setMenuOpen(false)));

    return (
        <>
            <div className={styles.burgerMenu} onClick={() => dispatch(setMenuOpen(!isMenuOpen))}>
                <HeaderIcon label={t("common:navbarIcons.menu")} className={isMenuOpen ? styles.hideLabel : ''}>
                    <div className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : null} ${isLight ? styles.light : ''}`} >
                        <div />
                        <div />
                        <div />
                    </div>
                </HeaderIcon>
            </div>
            <BurgerMenuTree isActive={isMenuOpen} />
            <div
                className={`${styles.menuBackground} ${isMenuOpen ? styles.menuBackgroundActive : null}`}
                onClick={() => dispatch(setMenuOpen(false))}
            />
        </>
    )
}

export default React.memo(BurgerMenu);