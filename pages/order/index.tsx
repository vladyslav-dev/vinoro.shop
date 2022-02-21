import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
//Components
import Stepper from '@/components/Stepper';


const Order = () => {

   const router = useRouter();


    const message = 'Do you want to leave?';
    const unsavedChanges = true

    useEffect(() => {
    const routeChangeStart = url => {
        if (Router.asPath !== url && unsavedChanges && !confirm(message)) {
        Router.events.emit('routeChangeError');
        throw 'Abort route change. Please ignore this error.';
        }
    };

    const beforeunload = e => {
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

    return <Stepper />
}

export default Order


