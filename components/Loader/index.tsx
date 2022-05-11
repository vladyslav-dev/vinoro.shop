import React from 'react';
import styles from './Loader.module.scss';
import ReactLoading from 'react-loading';
import useTranslation from 'next-translate/useTranslation';


const Loader: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div className={`${styles.loading}`}>
            <div className={styles.loadingText}>
                <ReactLoading type={'bubbles'} color="#1C1C1C" width={80} />
                <span className={styles.loadingWord}>{t(`common:loading`)}</span>
            </div>
        </div>
    )
}

export default Loader;