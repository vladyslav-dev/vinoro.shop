import React, { useEffect } from 'react';
import Fullpage from '@/components/Fullpage';
import { useDispatch } from 'react-redux';
import { setCatalogOpen } from '@/store/slices/catalog';

const Index = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCatalogOpen(true));
    }, [])

    return (
        <>
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