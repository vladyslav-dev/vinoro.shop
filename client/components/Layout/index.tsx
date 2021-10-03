import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ICategory } from '@/interfaces/ICategory';

export interface LayoutProps {
    children?: ReactNode;
    category: Array<ICategory>;
}

const Layout: FC<LayoutProps> = ({ children, category }) => {
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