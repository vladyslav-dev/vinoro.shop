import React from 'react';
import Link from 'next/link';
import styles from './LanguageModal.module.scss';
import { CheckedSvg } from '@/icons/Checked';
import { useRouter } from 'next/router';

const LanguageModal = () => {

    const router = useRouter();
    console.log(router)

    const locales = {
        "uk-UA": "Українська",
        "ru-RU": "Русский",
        "en-US": "English",
    }

    return (
        <div className={styles.modal}>
            <ul className={styles.langList}>
                {Object.keys(locales).map(item => (
                    <li key={item} className={styles.langItem}>
                        <Link href={router.asPath} locale={item}>
                            <a onClick={() => console.log("clicked!!!!!")} className={styles.langItemLink}>
                                <span>{locales[item]}</span>
                                {router.locale === item && <CheckedSvg />}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageModal;