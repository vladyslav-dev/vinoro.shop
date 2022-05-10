import styles from './help.module.scss';
import Accordion from '@/components/Accordion';
import HelpBrowsers from '@/components/HelpBrowsers';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Help = () => {

    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>{t(`common:pagesMeta.help.title`)}</title>
                <meta
                    name="description"
                    content={t(`common:pagesMeta.general.description`)}
                />
                <meta
                    name="keywords"
                    content={t(`common:pagesMeta.general.keywords`)}
                />
                <meta
                    property="og:title"
                    content={t(`common:pagesMeta.help.title`)}
                />
                <meta
                    property="og:description"
                    content={t(`common:pagesMeta.general.description`)}
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                />
            </Head>
            <div className={styles.help}>
                <div className={styles.helpBackground} />
                <div className={styles.helpContent}>
                    <div className={styles["container-xl"]}>
                        <div className={styles.helpInnerContent}>
                            <div className={styles.helpInnerContentItem}>
                                <Accordion />
                            </div>
                            <div className={styles.helpInnerContentItem}>
                                <HelpBrowsers />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help
