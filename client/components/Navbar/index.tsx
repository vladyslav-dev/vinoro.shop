import React, { useState, useEffect, useMemo } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link'
import axios from 'axios';
import Router from 'next/router';

import { HeaderLogoSvg } from '@/icons/Logo';
import { HeartSvg } from '@/icons/Heart';
import { BagSvg } from '@/icons/Bag';
import { WorldSvg } from '@/icons/World';

import NavbarMenu from '@/components/NavbarMenu';
import HeaderIcon from '@/components/HeaderIcon';
import Basket from '@/components/Basket';
import SearchModal from '@/components/SearchModal'
import CardList from '../CardList'
import { ICategory } from '@/interfaces/ICategory';
import ToolBar from '@/components/ToolBar'

export interface NavbarProps {
    category?: Array<ICategory>
};

const Navbar = (props: NavbarProps) => {
    
    const { category } = props;
    const [visible, setVisible] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [products, setProducts] = useState(null)

    Router.events.on('routeChangeComplete', () => setVisible(false));

    const handleSumbmit = async () => {
        const res = await axios({   method: 'POST',   url: window.location.origin + '/api/search',   data: { searchQuery } });
        setProducts(res.data.products)
    }

    const t = () => {
        return  {
            gridTemplateColumns: `repeat(${5}, 1fr)`
        }
    }

    return (
        <>
            <div className={styles.navbarWrapper}>
                <div className={styles["container-xl"]}>
                    <div className={styles.navbar}>
                        <div className={styles.navbarLogo} style={{display: 'flex'}}>
                            <Link href="/">
                                <a>
                                    <HeaderLogoSvg />
                                </a>
                            </Link>
                            <HeaderIcon label={"ЯЗЫК"} click={() =>  setVisible(true)}>
                                <WorldSvg />
                            </HeaderIcon>
                        </div>
                        <NavbarMenu category={category} />
                        <div className={styles.navbarIcons}>
                            <Link href="/favorite/">
                                <div className={styles.favoriteIcon}>
                                    <HeaderIcon label={"ИЗБРАННОЕ"}>
                                        <HeartSvg />
                                    </HeaderIcon>
                                </div>
                            </Link>
                            <HeaderIcon label={"КОРЗИНА"} className={styles.basketIcon}>
                                <BagSvg />
                                <div className={styles.basket}>
                                    <Basket />
                                </div>
                            </HeaderIcon>
                        </div>
                    </div>
                </div>
            </div>
            { 
                visible && <SearchModal setVisible={setVisible} searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSumbmit={handleSumbmit}>
                    <ToolBar products={products} updateProductList={setProducts} />
                    <CardList products={products} customStyles={t()} />
                </SearchModal>
            }
            <div className={styles.navbarSimulator} />
        </>
    );
};

export default Navbar;