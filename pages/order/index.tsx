import { useEffect, useState } from 'react';
import Router from 'next/router';
import Stepper from '@/components/Stepper';
import useTranslation from 'next-translate/useTranslation';
import { RootState } from '@/store/index';
import { useSelector } from 'react-redux';
import Head from 'next/head';


const Order = () => {


    useEffect(() => {
        Router.push('/');
    }, [])



    return (
        <>

        </>
    )
}

export default Order


