import React, { FC, ReactNode, useEffect, useContext } from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ICategory } from '@/interfaces/ICategory';
import { GlobalContext } from '@/store/index';
import { IBasketProduct } from '@/interfaces/IBasket';

export interface LayoutProps {
    children?: ReactNode;
    category: Array<ICategory>;
}

const Layout: FC<LayoutProps> = ({ children, category }) => {

    const state = useContext(GlobalContext)

    useEffect(() => {
        for (let key in state) {
            if (localStorage.hasOwnProperty(key)) {

                let value = localStorage.getItem(key);

                if (key === "BASKET") {
                    try {
                        let storageValue = JSON.parse(value);
                        state.BASKET.handlers.initState([...storageValue.products]);
                    } catch (err) {
                        throw new Error(err)
                    }
                }
                
                if (key === "FAVORITES") {
                    try {
                        let storageValue = JSON.parse(value);
                        state.FAVORITES.handlers.initState([...storageValue.products]);
                    } catch (err) {
                        throw new Error(err)
                    }
                }

            } else {
                localStorage.setItem(key, JSON.stringify(state[key].state))
            }
        }
    }, [])

    return (
        <>
            <Head>
                <title>Vinoro 2.0</title>
                <meta name="keywords" content="next,javascript,nextjs,react" />
                <meta name="description" content="this is youtube tutorial for next" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <Navbar category={category} />
            {children}
            <Footer />
        </>
    );
}

export default Layout