import React from 'react';
import styles from './HeaderTitle.module.scss';

interface HeaderTitleProps {
    title?: string;
    handlerClick?: () => void;
}

const HeaderTitle = (props: HeaderTitleProps) => {
    const { title, handlerClick } = props;

    return (
        <div className={styles.headerTitle}>
            <h1 className={styles.title}>{title}</h1>
            <button className={styles.button}>СМОТРЕТЬ</button>
        </div>
    )
}

export default HeaderTitle