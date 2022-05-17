import React, { useEffect } from 'react';
import Fullpage from '@/components/Fullpage';
import { useDispatch } from 'react-redux';
import { setCatalogOpen } from '@/store/slices/catalog';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {

    const dispatch = useDispatch();

    const { t } = useTranslation();

    useEffect(() => {

        document.body.style.position = 'fixed';

        dispatch(setCatalogOpen(false));

        return () => {
            document.body.style.position = 'unset';
        }
    }, [])

    return (
        <>
            <Head>
                <title>{t(`common:pagesMeta.home.title`)}</title>
                <meta
                    name="description"
                    content={t(`common:pagesMeta.general.description`)}
                />
                <meta
                    name="keywords"
                    content={t(`common:pagesMeta.general.keywords`)}
                />
                <meta
                    property="og:title"
                    content={t(`common:pagesMeta.home.title`)}
                />
                <meta
                    property="og:description"
                    content={t(`common:pagesMeta.general.description`)}
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/vinoro-media-storage/image/upload/v1632513149/vinoro/catalog/alcoholSlide_ibmhrp.jpg"
                />
            </Head>
            <Fullpage />
            <style global jsx>{`
                #nprogress .bar {
                    background: #fff;
                }
            `}</style>
        </>
    )
}

export default Index;