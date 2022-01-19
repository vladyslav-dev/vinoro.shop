import React from 'react';
import styles from './Footer.module.scss';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.footer}>
            <div className={styles['container-xl']}>
               <p className={styles.footerCopyright}>{t("common:copyright")}</p>
            </div>
        </div>
    );
}

export default Footer;
