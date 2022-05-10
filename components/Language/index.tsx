import React, { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Language.module.scss';
import { CheckedSvg } from '@/icons/Checked';
import { useRouter } from 'next/router';
import { LOCALES } from '@/constants/index';
import useLightElements from '@/hooks/useLightElements';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import HeaderIcon from '../HeaderIcon';
import { WorldSvg } from '../Icons/World';
import useTranslation from 'next-translate/useTranslation';

const Language = () => {

    const router = useRouter();

    const { t } = useTranslation();

    const { isLight } = useLightElements();

    const iconRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(() => setIsLanguageModalOpen(false), iconRef);

    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(false);

    return (
        <div ref={iconRef} onClick={() => setIsLanguageModalOpen(!isLanguageModalOpen)}>
            <HeaderIcon label={t("common:navbarIcons.lang")}>
                <WorldSvg color={isLight ? '#fff' : ''} />
            </HeaderIcon>
            {isLanguageModalOpen && (
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
            )}
        </div>
    )
}

export default React.memo(Language);