import React from 'react';
import Fullpage from '@/components/Fullpage';

const Index = () => {

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