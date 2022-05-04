import React from 'react';
import { ExitSvg } from '../Icons/Exit';
import Logo from '@/components/Logo';
import styles from './OrderNavbar.module.scss';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const OrderNavbar: React.FC = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className={styles.orderNavbar}>
                <div className={styles['container-xl']}>
                    <div className={styles.orderNavbarRow}>
                        <div className={styles.orderNavbar__logo}>
                            <Logo />
                        </div>
                        <div className={styles.orderNavbarExit}>
                            <Link href='/'>
                                <a>
                                    <ExitSvg />
                                    <span>{t('common:exit')}</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navbarSimulator} />
        </>
    )
}

export default OrderNavbar;