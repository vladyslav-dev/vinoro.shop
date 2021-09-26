import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { ICategory } from '../../interfaces/ICategory';


export interface LayoutProps {
    children?: ReactNode;
    category: Array<ICategory>;
}

const Layout: FC<LayoutProps> = ({ children, category }) => {

    return (
        <div>
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
        </div>
    );
}

export default Layout