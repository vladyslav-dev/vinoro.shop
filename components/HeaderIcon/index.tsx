import useLightElements from '@/hooks/useLightElements';
import React, { FC, ReactNode } from 'react';
import styles from './HeaderIcon.module.scss';

export interface HeaderIconProps {
    children?: ReactNode;
    label?: string;
    className?: string;
    iconStyles?: React.CSSProperties;
    click?: () => void;
};

const HeaderIcon: FC<HeaderIconProps> = ({ children, label = 'icon', click, className, iconStyles }) => {

    const { isLight } = useLightElements();

    return (
        <div className={`${styles.headerIcon} ${className}`} onClick={click}>
            <span className={styles.headerIconImage} style={iconStyles}>{children}</span>
            <span className={`${styles.headerIconLabel} ${isLight ? styles.light : ''}`} data-icon-label>{label}</span>
        </div>
    )
}

export default HeaderIcon;