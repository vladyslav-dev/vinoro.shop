import React from 'react';
import Link from 'next/link'
import styles from './HeaderBottom.module.scss';

const HeaderBottom = () => {
    return (
        <div className={styles.HeaderBottom}>
            <div className={styles.HeaderBottomItem}>
                <Link href="/">
                    <a>КОНТАКТЫ</a>
                </Link>
            </div>
            <div className={styles.HeaderBottomItem}>
                <Link href="/">
                    <a>ПОМОЩЬ</a>
                </Link>
            </div>
        </div>
    )
}

export default HeaderBottom;