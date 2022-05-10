import React, { useState, useMemo } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';
import { BagSvg } from '@/icons/Bag';
import Logo from "@/components/Logo";
import Basket from '@/components/Basket';
import BurgerMenu from "@/components/BurgerMenu";
import HeaderIcon from '@/components/HeaderIcon';
import Language from '@/components/Language';
import useLightElements from '@/hooks/useLightElements';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import Search from '@/components/Search';

export interface NavbarProps {
    navbarStyles?: React.CSSProperties;
};

const Navbar: React.FC<NavbarProps> = ({ navbarStyles }) => {

    const { t } = useTranslation();

    const { isLight } = useLightElements();

    const { basketProducts } = useSelector((state: RootState) => state.basketReducer);

    const productsNumber = useMemo(() => Object.keys(basketProducts).length, [basketProducts]);

    const [basketIsOpen, setBasketIsOpen] = useState<boolean>(false);

    const showBasket = () => setBasketIsOpen(true)
    const hideBasket = () => setBasketIsOpen(false)

    return (
        <>
            <div className={styles.navbarWrapper} style={ navbarStyles }>
                <div className={styles["container-xl"]}>
                    <div className={styles.navbar}>
                        <div className={styles.navbarIconList}>
                            <div className={styles.navbarBurger}>
                                <BurgerMenu />
                            </div>
                            <div className={styles.navbarIcon}>
                                <Search />
                            </div>
                        </div>
                        <div className={styles.navbarLogo}>
                            <Link href="/">
                                <a>
                                    <Logo />
                                </a>
                            </Link>
                        </div>
                        <div className={styles.navbarIconList}>
                            <div className={styles.navbarIcon}>
                                <div onClick={showBasket} onMouseEnter={showBasket} onMouseLeave={hideBasket}>
                                    <HeaderIcon label={t("common:navbarIcons.basket")} className={styles.basketIcon}>
                                        <BagSvg color={isLight ? '#fff' : ''} />
                                        <div className={styles.basket} style={{right: basketIsOpen ? 0 : "-120%"}}>
                                            <Basket closeBasketHandler={hideBasket} />
                                        </div>
                                        {productsNumber ? <div className={styles.basketCount}>{productsNumber}</div> : null}
                                    </HeaderIcon>
                                </div>
                            </div>
                            <div className={styles.navbarIcon}>
                                <Language />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navbarSimulator} style={{
                display: navbarStyles?.background === 'transparent' ? 'none' : 'block'
            }} />
        </>
    );
};

export default Navbar;