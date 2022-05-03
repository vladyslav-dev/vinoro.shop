import React from 'react';
import Link from 'next/link'
import styles from './FoollpageBottom.module.scss';
import useTranslation from 'next-translate/useTranslation'

const FoollpageBottom = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.FoollpageBottom}>
            <div className={styles.FoollpageBottomItem}>
                <Link href="/contacts">
                    <a>{t("common:menu.contacts")}</a>
                </Link>
            </div>
            <div className={styles.FoollpageBottomItem}>
                <Link href="/help">
                    <a>{t("common:menu.help")}</a>
                </Link>
            </div>
        </div>
    )
}

export default FoollpageBottom;