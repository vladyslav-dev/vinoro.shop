import React, { FC, ReactNode } from 'react';
import styles from './HeaderIcon.module.scss';

export interface HeaderIconProps {
    children?: ReactNode;
    label?: string;
    className?: string;
    click?: () => void;
};

const HeaderIcon: FC<HeaderIconProps> = ({ children, label = 'icon', click, className }) => (
    <div className={`${styles.headerIcon} ${className}`} onClick={click}>
        <span className={styles.headerIconImage}>{children}</span>
        <span className={styles.headerIconLabel}>{label}</span>
    </div>
);

export default HeaderIcon;