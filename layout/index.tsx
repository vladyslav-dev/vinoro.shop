import React, { FC, useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import OrderNavbar from '@/components/OrderNavbar';

const pagesWithoutFooter = ['/', '/help', '/order', '/contacts'];

type TTransitionStage = 'fadeIn' | 'fadeOut';
export interface LayoutProps {
    children?: React.ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {

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
            {router.pathname === '/order' ? <OrderNavbar /> : <Navbar navbarStyles={navbarStyles}  />}
            <div
                // onTransitionEnd={() => {
                //     if (transitionStage === "fadeOut") {
                //         console.log("fading out");

                //         // setDisplayChildren(children);
                //             setTransitionStage("fadeIn");

                //         }
                // }}
                className={`__global-layout`}
            >
                {children}
            </div>
            {isShowFooter && <Footer /> }
        </>
    );
}

export default Layout