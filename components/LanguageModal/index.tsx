import React from 'react';
import Link from 'next/link';
import styles from './LanguageModal.module.scss';
import { CheckedSvg } from '@/icons/Checked';
import { useRouter } from 'next/router';
import { LOCALES } from '@/constants/index';

const LanguageModal = () => {

    const router = useRouter();

    return (
        <div className={styles.modal}>
            <ul className={styles.langList}>
                {Object.keys(LOCALES).map(item => (
                    <li key={item} className={styles.langItem}>
                        <Link href={router.asPath} locale={item} scroll={false}>
                            <a className={styles.langItemLink}>
                                <span>{LOCALES[item as keyof typeof LOCALES]}</span>
                                {router.locale === item && <CheckedSvg color='#fff' />}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageModal;