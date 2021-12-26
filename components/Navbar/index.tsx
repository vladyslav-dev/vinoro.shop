import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link'
import axios from 'axios';
import Router from 'next/router';

import { ICategory } from '@/interfaces/ICategory';

import { HeartSvg } from '@/icons/Heart';
import { BagSvg } from '@/icons/Bag';
import { WorldSvg } from '@/icons/World';
import { LoupeSvg } from '@/icons/Loupe';

import Logo from "@/components/Logo";
import Basket from '@/components/Basket';
import ToolBar from '@/components/ToolBar';
import CardList from '@/components/CardList';
import BurgerMenu from "@/components/BurgerMenu";
import HeaderIcon from '@/components/HeaderIcon';
import SearchModal from '@/components/SearchModal';
import AnimationWrapper from '@/components/AnimationWrapper';


export interface NavbarProps {
    category?: Array<ICategory>;
    color?: string;
};

const Navbar = (props: NavbarProps) => {
    
    const { category, color } = props
    const [products, setProducts] = useState(null)
    const [showSearch, setShowSearch] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [lastQuery, setLastQuery] = useState('')

    Router.events.on('routeChangeComplete', () => setShowSearch(false))

    console.log(Router)

    const getProductsByQuery = async () => { 
        const res = await axios({   
            method: 'POST',
            url: process.env.NEXT_PUBLIC_DOMAIN + '/api/search',
            data: { searchQuery } 
        });
        setProducts(res.data.products)
        setLastQuery(searchQuery)
    }

    return (
        <>
            <div className={styles.navbarWrapper} style={{ backgroundColor: color || "#1A1A1A" }}>
                <div className={styles["container-xl"]}>
                    <div className={styles.navbar}>
                        <div className={styles.navbarIconList}>
                            <div className={styles.navbarBurger}>
                                <BurgerMenu category={category} />
                            </div>
                            <HeaderIcon label={"ПОИСК"} click={() => setShowSearch(true)}>
                                <LoupeSvg color="#ffffff" />
                            </HeaderIcon>
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
            {showSearch && (
                <AnimationWrapper router={Router.route}>
                    <SearchModal 
                        setVisible={setShowSearch}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        handleSumbmit={getProductsByQuery}
                    >
                        { 
                        (!products || products.length) ? (
                            <>
                                    <ToolBar 
                                        products={products}
                                        updateProductList={setProducts}
                                        setAnimate={setAnimate}
                                    />
                                    <CardList 
                                        products={products}
                                        animate={animate}
                                        customStyles={{gridTemplateColumns: `repeat(${5}, 1fr)`}} 
                                    />
                            </>
                        ) : (
                            <p>Товаров за запросом - {lastQuery} не найдено</p> 
                        )
                        }
                    </SearchModal>
                </AnimationWrapper>)
            }
            <div className={styles.navbarSimulator} style={{
                display: color === 'transparent' ? 'none' : 'block'
            }} />
        </>
    );
};

export default Navbar;