import React from 'react';
import styles from './Loader.module.scss';
import ReactLoading from 'react-loading';


const Loader: React.FC = () => (
    <div className={`${styles.loading}`}>
        <div className={styles.loadingText}>
            <ReactLoading type={'bubbles'} color="#1C1C1C" width={80} />
            <span className={styles.loadingWord}>Загрузка</span>
        </div>
    </div>
)

export default Loader;