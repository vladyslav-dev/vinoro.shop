import React, { FC, ReactNode, useEffect, useContext, useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import OrderNavbar from '@/components/OrderNavbar';

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

            {router.pathname === '/order' ? <OrderNavbar /> : <Navbar navbarStyles={navbarStyles}  />}
            <div
                onTransitionEnd={() => {
                    setTimeout(() => {
                    if (transitionStage === "fadeOut") {
                      console.log("fading out");

                        setDisplayChildren(children);
                        setTransitionStage("fadeIn");

                    }
                }, 400)
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