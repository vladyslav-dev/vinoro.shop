import styles from './help.module.scss';
import Accordion from '@/components/Accordion';
import HelpBrowsers from '@/components/HelpBrowsers';
import { ACCORDION_DATA } from '@/constants/index';

const Help = () => (
    <div className={styles.help}>
        <div className={styles.helpBackground} />
        <div className={styles.helpContent}>
            <div className={styles["container-xl"]}>
                <div className={styles.helpInnerContent}>
                    <div className={styles.helpInnerContentItem}>
                        <Accordion accordionData={ACCORDION_DATA} />
                    </div>
                    <div className={styles.helpInnerContentItem}>
                        <HelpBrowsers />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Help
