import styles from './contacts.module.scss';
import Link from 'next/link';
import { PhoneSvg } from '@/icons/Phone';
import { ViberFilledSvg } from '@/icons/SocialMedia';
import { MailSvg } from '@/icons/Mail';
import ContactForm from '@/components/ContactForm';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const ContactPage = () => {

    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>{t(`common:pagesMeta.contacts.title`)}</title>
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
                    content={t(`common:pagesMeta.contacts.title`)}
                />
                <meta
                    property="og:description"
                    content={t(`common:pagesMeta.general.description`)}
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80"
                />
            </Head>
            <div className={styles.contacts}>
                <div className={styles['container-xl']}>
                    <div className={styles.image} />
                    <div className={styles.content}>
                        <div className={styles.contentInfo}>
                            <h2 className={styles.title}>КОНТАКТИ</h2>
                            <ul className={styles.contactList}>
                                <li className={styles.contactItem}>
                                    <Link href="tel:+380995238607">
                                        <a>
                                            <PhoneSvg />
                                            <span className={styles.contactItemLink}>099-523-86-07</span>
                                            {/* <span className={styles.contactTooltip}>Нажмите для мгновенного визова</span> */}
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.contactItem}>
                                    <Link href="viber://chat?number=+380689125456">
                                        <a>
                                            <ViberFilledSvg />
                                            <span className={styles.contactItemLink}>068-912-54-56</span>
                                            {/* <span className={styles.contactTooltip}>Нажмите для открития в Viber</span> */}
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.contactItem}>
                                    <Link href="mailto:vinorosend@gmail.com">
                                        <a>
                                            <MailSvg />
                                            <span className={styles.contactItemLink}>vinorosend@gmail.com</span>
                                            {/* <span className={styles.contactTooltip}>Нажмите чтоби написать письмо</span> */}
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.contentForm}>
                            <h2 className={styles.title}>СВЯЖИТЕСЬ С НАМИ</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;