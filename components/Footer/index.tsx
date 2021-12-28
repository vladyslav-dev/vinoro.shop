import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles['container-xl']}>
           <p className={styles.footerCopyright}>© Все права защищены. Vinoro - 2020-2022</p>
        </div>
    </div>
);

export default Footer;
