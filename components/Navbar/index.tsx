import React, { useState, useContext, useRef } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link'
import { GlobalContext } from '@/store/index'
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useTranslation from 'next-translate/useTranslation';

import { HeartSvg } from '@/icons/Heart';
import { BagSvg } from '@/icons/Bag';
import { WorldSvg } from '@/icons/World';
import { LoupeSvg } from '@/icons/Loupe';

import Logo from "@/components/Logo";
import Basket from '@/components/Basket';
import BurgerMenu from "@/components/BurgerMenu";
import HeaderIcon from '@/components/HeaderIcon';
import SearchModal from '@/components/SearchModal';
import LanguageModal from '@/components/LanguageModal';


export interface NavbarProps {
    navbarStyles?: React.CSSProperties;
};

const Navbar = (props: NavbarProps) => {

    const { navbarStyles } = props;

    const { t } = useTranslation();
    const { BASKET } = useContext(GlobalContext)
    const productsNumber = BASKET.state.products.length;
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const [basketIsOpen, setBasketIsOpen] = useState<boolean>(false);
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(false);

    // const optionListRef = useRef<HTMLUListElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(() => setIsLanguageModalOpen(false), iconRef)

    const openModalSearch = () => setShowSearch(true)
    const closeModalSearch = () => setShowSearch(false)

    const showBasket = () => {
        setBasketIsOpen(true)
    }
    const hideBasket = () => {
        setBasketIsOpen(false)
    }

    return (
        <>
            <div className={styles.navbarWrapper} style={ navbarStyles }>
                <div className={styles["container-xl"]}>
                    <div className={styles.navbar}>
                        <div className={styles.navbarIconList}>
                            <div className={styles.navbarBurger}>
                                <BurgerMenu openSearchHandler={openModalSearch} />
                            </div>
                            <div className={styles.navbarIcon}>
                                <HeaderIcon label={t("common:navbarIcons.search")} click={() => openModalSearch()}>
                                    <LoupeSvg color="#ffffff" />
                                </HeaderIcon>
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
                            <div className={`${styles.navbarIcon} ${styles.favoriteDesktop}`}>
                                <Link href="/favorite">
                                    <div className={styles.favoriteIcon}>
                                        <HeaderIcon label={t("common:navbarIcons.favorites")}>
                                            <HeartSvg />
                                        </HeaderIcon>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.navbarIcon}>
                                <div onMouseEnter={showBasket} onMouseLeave={hideBasket}>
                                    <HeaderIcon label={t("common:navbarIcons.basket")} className={styles.basketIcon}>
                                        <BagSvg />
                                        <div className={styles.basket} style={{right: basketIsOpen ? 0 : "-550px"}}>
                                            <Basket />
                                        </div>
                                        {productsNumber ? <div className={styles.basketCount}>{productsNumber}</div> : null}
                                    </HeaderIcon>
                                </div>

                            </div>
                            <div className={styles.navbarIcon}>
                                <div ref={iconRef} onClick={() => setIsLanguageModalOpen(!isLanguageModalOpen)}>
                                    <HeaderIcon label={t("common:navbarIcons.lang")}>
                                        <WorldSvg />
                                    </HeaderIcon>
                                    {isLanguageModalOpen && <LanguageModal />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showSearch && <SearchModal closeSearch={closeModalSearch} />}
            <div className={styles.navbarSimulator} style={{
                display: navbarStyles.background === 'transparent' ? 'none' : 'block'
            }} />
        </>
    );
};

export default Navbar;