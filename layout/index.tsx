import React, { FC } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import OrderNavbar from '@/components/OrderNavbar';

const pagesWithoutFooter = ['/', '/order', '/contacts'];
const pagesWithTransparentNavbar = ['/'];
export interface LayoutProps {
    children?: React.ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {

    const router = useRouter()

    const isNavbarTransparent = !pagesWithTransparentNavbar.every(path => path !== router.pathname);

    const isShowFooter = pagesWithoutFooter.every(path => router.pathname !== path);

    const navbarStyles = {
        background: isNavbarTransparent ? 'transparent' : '#FFFFFF'
    }

    return (
        <>
            {router.pathname === '/order' ? <OrderNavbar /> : <Navbar navbarStyles={navbarStyles}  />}
            <div
                className={`__global-layout`}
            >
                {children}
            </div>
            {isShowFooter && <Footer /> }
        </>
    );
}

export default Layout