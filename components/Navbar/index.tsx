import React, { useState, useEffect, useMemo } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link'
import axios from 'axios';
import Router from 'next/router';

import { HeartSvg } from '@/icons/Heart';
import { BagSvg } from '@/icons/Bag';
import { WorldSvg } from '@/icons/World';

import Logo from "@/components/Logo";
import BurgerMenu from "@/components/BurgerMenu";
import HeaderIcon from '@/components/HeaderIcon';
import Basket from '@/components/Basket';
import SearchModal from '@/components/SearchModal'
import CardList from '@/components/CardList'
import { ICategory } from '@/interfaces/ICategory';
import ToolBar from '@/components/ToolBar'

export interface NavbarProps {
    category?: Array<ICategory>;
    color?: string;
};

const Navbar = (props: NavbarProps) => {
    
    const { category, color } = props
    const [products, setProducts] = useState(null)
    const [isVisible, setIsVisible] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [lastQuery, setLastQuery] = useState('')

    Router.events.on('routeChangeComplete', () => setIsVisible(false))

    const getProductsByQuery = async () => { 
        const res = await axios({   method: 'POST',   url: window.location.origin + '/api/search',   data: { searchQuery } });
        setProducts(res.data.products)
        setLastQuery(searchQuery)
    }

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
                            <HeaderIcon label={"ЯЗЫК"} click={() =>  setIsVisible(true)}>
                                <WorldSvg />
                            </HeaderIcon>
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
            { 
                isVisible && (
                <SearchModal 
                    setVisible={setIsVisible}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSumbmit={getProductsByQuery}
                >
                    <ToolBar 
                        products={products}
                        updateProductList={setProducts}
                        setAnimate={setAnimate}
                      />
                    { 
                       (products === null || products.length) ? (
                        <CardList products={products} customStyles={{gridTemplateColumns: `repeat(${5}, 1fr)`}} animate={animate}/>
                       ) : (
                        <p>Товаров за запросом - {lastQuery} не найдено</p> 
                       )
                    }
                </SearchModal>)
            }
            <div className={styles.navbarSimulator} />
        </>
    );
};

export default Navbar;