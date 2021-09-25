import React, { FC, ReactNode } from 'react';
import styles from './HeaderIcon.module.scss';

export interface HeaderIconProps {
    children?: ReactNode;
    label?: string;
};

const HeaderIcon: FC<HeaderIconProps> = ({ children, label = 'icon' }) => (
    <div className={styles.headerIcon}>
        <span className={styles.headerIconImage}>{children}</span>
        <span className={styles.headerIconLabel}>{label}</span>
    </div>
);

export default HeaderIcon;