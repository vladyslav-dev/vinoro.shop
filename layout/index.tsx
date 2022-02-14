import React, { FC, ReactNode, useEffect, useContext, useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { GlobalContext } from '@/store/index';
import { NextRouter } from 'next/router';


export interface LayoutProps {
    children?: ReactNode;
    router?: NextRouter;
}

const Layout: FC<LayoutProps> = ({ children, router }) => {

    const state = useContext(GlobalContext)

    const [isLoaded, setIsLoaded] = useState({
        basket: false,
        favorite: false
    })

    useEffect(() => {
        for (const key in state) {
            if (localStorage.hasOwnProperty(key)) {

                const value = localStorage.getItem(key);

                if (key === "BASKET") {
                    try {
                        const storageValue = JSON.parse(value);
                        state.BASKET.handlers.initState([...storageValue.products]);
                    } catch (err) {
                        throw new Error(err)
                    }
                }

                if (key === "FAVORITES") {
                    try {
                        const storageValue = JSON.parse(value);
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

    useEffect(() => {
        if (isLoaded.basket) {
            localStorage.setItem("BASKET", JSON.stringify(state.BASKET.state))
        } else {
            setIsLoaded({ ...isLoaded, basket: true })
        }

    }, [state.BASKET])

    useEffect(() => {
        if (isLoaded.favorite) {
            localStorage.setItem("FAVORITES", JSON.stringify(state.FAVORITES.state))
        } else {
            setIsLoaded({ ...isLoaded, favorite: true });
        }
    }, [state.FAVORITES])

    const isNavbarTransparent = router.pathname === '/' || router.pathname === '/help';
    const isShowFooter = router.pathname !== '/' && router.pathname !== '/help';

    const navbarStyles = {
        background: isNavbarTransparent ? 'transparent' : '#1C1C1C'
    }

    return (
        <>
            {/* <Head>
                <title>Vinoro 2.0</title>
                <meta name="keywords" content="next,javascript,nextjs,react" />
                <meta name="description" content="this is youtube tutorial for next" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <Navbar navbarStyles={navbarStyles} />
            {children}
            {isShowFooter && <Footer /> }
        </>
    );
}

export default Layout