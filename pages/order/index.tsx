import { useEffect, useState } from 'react';
import Router from 'next/router';
import Stepper from '@/components/Stepper';
import useTranslation from 'next-translate/useTranslation';
import { RootState } from '@/store/index';
import { useSelector } from 'react-redux';
import Head from 'next/head';


const Order = () => {

    const { t } = useTranslation();
    const { basketProducts } = useSelector((state: RootState) => state.basketReducer);

    const message = t(`order:wantToLeave`);

    const [unsavedChanges, setUnsavedChanges] = useState<boolean>(true);

    useEffect(() => {
        if (!Object.keys(basketProducts).length) {
            Router.push('/');
        }
    }, [])

    useEffect(() => {
        if (!Object.keys(basketProducts).length) {
            setUnsavedChanges(false)
        }
    }, [basketProducts])

    useEffect(() => {
    const routeChangeStart = (url: string) => {
        if (Router.asPath !== url && unsavedChanges && !confirm(message)) {
        Router.events.emit('routeChangeError');
        throw 'Abort route change. Please ignore this error.';
        }
    };

    const beforeunload = (e: any) => {
        if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = message;
        return message;
        }
    };

    window.addEventListener('beforeunload', beforeunload);
    Router.events.on('routeChangeStart', routeChangeStart);

    return () => {
        window.removeEventListener('beforeunload', beforeunload);
        Router.events.off('routeChangeStart', routeChangeStart);
    };
    }, [unsavedChanges]);

    return (
        <>
            <Head>
                <title>{t(`common:pagesMeta.order.title`)}</title>
                <meta name="robots" content="noindex"></meta>
            </Head>
            <Stepper />
        </>
    )
}

export default Order


