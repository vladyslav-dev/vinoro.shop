import React, { FC, ReactNode, useEffect, useContext, useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';

const pagesWithoutFooter = ['/', '/help', '/order'];

type TTransitionStage = 'fadeIn' | 'fadeOut';
export interface LayoutProps {
    children?: React.ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {

    // const state = useContext(GlobalContext)
    const router = useRouter()

    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState<TTransitionStage>("fadeOut");

    useEffect(() => {
        setTransitionStage("fadeIn");
      }, []);

      useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
      }, [children, setDisplayChildren, displayChildren]);

    // const [isLoaded, setIsLoaded] = useState({
    //     basket: false,
    //     favorite: false
    // })

    // useEffect(() => {
    //     for (const key in state) {
    //         if (localStorage.hasOwnProperty(key)) {

    //             const value = localStorage.getItem(key);

    //             if (key === "BASKET") {
    //                 try {
    //                     const storageValue = JSON.parse(value);
    //                     state.BASKET.handlers.initState([...storageValue.products]);
    //                 } catch (err) {
    //                     throw new Error(err)
    //                 }
    //             }

    //             if (key === "FAVORITES") {
    //                 try {
    //                     const storageValue = JSON.parse(value);
    //                     state.FAVORITES.handlers.initState([...storageValue.products]);
    //                 } catch (err) {
    //                     throw new Error(err)
    //                 }
    //             }

    //         } else {
    //             localStorage.setItem(key, JSON.stringify(state[key].state))
    //         }
    //     }
    // }, [])

    // useEffect(() => {
    //     if (isLoaded.basket) {
    //         localStorage.setItem("BASKET", JSON.stringify(state.BASKET.state))
    //     } else {
    //         setIsLoaded({ ...isLoaded, basket: true })
    //     }

    // }, [state.BASKET])

    // useEffect(() => {
    //     if (isLoaded.favorite) {
    //         localStorage.setItem("FAVORITES", JSON.stringify(state.FAVORITES.state))
    //     } else {
    //         setIsLoaded({ ...isLoaded, favorite: true });
    //     }
    // }, [state.FAVORITES])

    const isNavbarTransparent = router.pathname === '/' || router.pathname === '/help';


    const isShowFooter = pagesWithoutFooter.every(route => router.pathname !== route);

    const navbarStyles = {
        background: isNavbarTransparent ? 'transparent' : '#FFFFFF'
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
            <div
                onTransitionEnd={() => {
                    if (transitionStage === "fadeOut") {
                      console.log("fading out");
                      setDisplayChildren(children);
                      setTransitionStage("fadeIn");
                    }
                  }}
                  className={`__global-layout ${transitionStage}`}
            >
                {displayChildren}
            </div>
            {isShowFooter && <Footer /> }
        </>
    );
}

export default Layout