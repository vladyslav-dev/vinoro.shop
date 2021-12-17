import React from 'react';
import styles from './GoAhead.module.scss'
import { ScrollMouseSvg } from '@/icons/ScrollMouse';
import { SwipeSvg } from '@/icons/Swipe';

const GoAhead = () => {
    return (
        <div className={styles.GoAhead}>
            <div className={styles.GoAheadDesktop}>
                <span className={styles.GoAheadText}>ПРОКРУЧИВАЙ</span>
                <ScrollMouseSvg />
            </div>
            <div className={styles.GoAheadMobile}>
                <span className={styles.GoAheadText}>СВАЙПАЙ</span>
                <SwipeSvg />
            </div>
        </div>
    )
}

export default GoAhead