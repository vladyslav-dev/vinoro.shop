import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body id='body-tag'>
                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}

export default MyDocument