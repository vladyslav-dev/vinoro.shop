import React from 'react';
import styles from './GoAhead.module.scss'
import { ScrollMouseSvg } from '@/icons/ScrollMouse';
import { SwipeSvg } from '@/icons/Swipe';
import useTranslation from 'next-translate/useTranslation'

const GoAhead = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.GoAhead}>
            <div className={styles.GoAheadDesktop}>
                <span className={styles.GoAheadText}>{t("common:scrollDown")}</span>
                <ScrollMouseSvg color='#fff' />
            </div>
            <div className={styles.GoAheadMobile}>
                <span className={styles.GoAheadText}>{t("common:swipeDown")}</span>
                <SwipeSvg color='#fff' />
            </div>
        </div>
    )
}

export default GoAhead