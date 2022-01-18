import React from 'react';
import Link from 'next/link'
import styles from './HeaderBottom.module.scss';
import useTranslation from 'next-translate/useTranslation'

const HeaderBottom = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.HeaderBottom}>
            <div className={styles.HeaderBottomItem}>
                <Link href="/">
                    <a>{t("common:menu.contacts")}</a>
                </Link>
            </div>
            <div className={styles.HeaderBottomItem}>
                <Link href="/">
                    <a>{t("common:menu.help")}</a>
                </Link>
            </div>
        </div>
    )
}

export default HeaderBottom;