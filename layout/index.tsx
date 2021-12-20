import React, { FC, ReactNode, useEffect, useContext, useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ICategory } from '@/interfaces/ICategory';
import { GlobalContext } from '@/store/index';
import { motion, AnimatePresence } from 'framer-motion';


export interface LayoutProps {
    children?: ReactNode;
    category: Array<ICategory>;
    router?: any;
}

const Layout: FC<LayoutProps> = ({ children, category, router }) => {

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
            setIsLoaded({ ...isLoaded, favorite: true })
        }
    }, [state.FAVORITES])



    return (
        <>
            {/* <Head>
                <title>Vinoro 2.0</title>
                <meta name="keywords" content="next,javascript,nextjs,react" />
                <meta name="description" content="this is youtube tutorial for next" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
           
            <Navbar category={category} color={router.pathname === '/' ? 'transparent' : null} />
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={router.route}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={{
                        pageInitial: {
                            opacity: 0,
                        },
                        pageAnimate: {
                            opacity: 1,
                        },
                        pageExit: {
                            backgroundColor: "white",
                            // filter: `invert()`,
                            opacity: 0,
                        }
                    }}>
                    {children}
                </motion.div>
            </AnimatePresence>
            <Footer />
        </>
    );
}

export default Layout