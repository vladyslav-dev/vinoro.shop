import React, { useState } from 'react';
import styles from './Search.module.scss';
import useTranslation from 'next-translate/useTranslation';
import HeaderIcon from '@/components/HeaderIcon';
import SearchModal from '@/components/SearchModal';
import useLightElements from '@/hooks/useLightElements';
import { LoupeSvg } from '@/components/Icons/Loupe';

const Search: React.FC = () => {

    const { isLight } = useLightElements();

    const { t } = useTranslation();

    const [showSearch, setShowSearch] = useState<boolean>(false)

    return (
        <>
            <HeaderIcon label={t("common:navbarIcons.search")} click={() => setShowSearch(true)}>
                <LoupeSvg color={isLight ? '#fff' : ''} />
            </HeaderIcon>
            <div className={`${styles.searchModal} ${showSearch ? styles.active : ''}`}>
                {showSearch && <SearchModal closeSearch={() => setShowSearch(false)} />}
            </div>
        </>
    );
};

export default React.memo(Search);