import styles from './contacts.module.scss';
import Link from 'next/link';
import { PhoneSvg } from '@/icons/Phone';
import { ViberFilledSvg } from '@/icons/SocialMedia';
import { MailSvg } from '@/icons/Mail';
import ContactForm from '@/components/ContactForm';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useDispatch } from 'react-redux';
import { setCatalogOpen } from '@/store/slices/catalog';
import { useEffect } from 'react';

const ContactPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCatalogOpen(false));
    }, [])

    const { t } = useTranslation();

    return (
        <>
            <Head>
                {/* <title>{"Vinoro — Контакти"}</title>
                <meta
                    name="description"
                    content={"Інтернет-магазин Vinoro (Товари з Європи). В асортименті Алкоголь, Побутова хімія. Приємні ціни. Доставка по Україні"}
                />
                <meta
                    name="keywords"
                    content={"vinoro, продукти, алкгоголь, товари з Європи, запоріжжя, доставка, побутова хімія, ціни, ціна, купити, європейські товари, недорого, Україна, онлайн, інтернет-магазин"}
                />
                <meta
                    property="og:title"
                    content={"Vinoro — Контакти"}
                />
                <meta
                    property="og:description"
                    content={"Інтернет-магазин Vinoro (Товари з Європи). В асортименті Алкоголь, Побутова хімія. Приємні ціни. Доставка по Україні [og:description]"}
                />
                <meta 
                    property="og:site_name" 
                    content={"Інтернет-магазин Vinoro (Товари з Європи). В асортименті Алкоголь, Побутова хімія. Приємні ціни. Доставка по Україні [og:site_name]"}
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80"
                /> */}

               {/* HTML Meta Tags */}
                <title>Vinoro — Контакти</title>
                <meta name="description" content="Інтернет-магазин Vinoro (Товари з Європи). В асортименті Алкоголь, Побутова хімія. Приємні ціни. Доставка по Україні" />

                {/* Google / Search Engine Tags */}
                <meta itemProp="name" content="Vinoro — Контакти" />
                <meta itemProp="description" content="Інтернет-магазин Vinoro (Товари з Європи). В асортименті Алкоголь, Побутова хімія. Приємні ціни. Доставка по Україні" />
                <meta itemProp="image" content="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="http://vinoro.shop" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Vinoro — Контакти" />
                <meta property="og:description" content="Інтернет-магазин Vinoro (Товари з Європи). В асортименті Алкоголь, Побутова хімія. Приємні ціни. Доставка по Україні" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vinoro — Контакти" />
                <meta name="twitter:description" content="Інтернет-магазин Vinoro (Товари з Європи). В асортименті Алкоголь, Побутова хімія. Приємні ціни. Доставка по Україні" />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80" />
        
            </Head>
            <div className={styles.contacts}>
                <div className={styles['container-xl']}>
                    <div className={styles.image} />
                    <div className={styles.content}>
                        <div className={styles.contentInfo}>
                            <h2 className={styles.title}>{t(`contacts:contacts`)}</h2>
                            <ul className={styles.contactList}>
                                <li className={styles.contactItem}>
                                    <Link href="tel:+380995238607">
                                        <a>
                                            <PhoneSvg />
                                            <span className={styles.contactItemLink}>099-523-86-07</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.contactItem}>
                                    <Link href="viber://chat?number=+380995238607">
                                        <a>
                                            <ViberFilledSvg />
                                            <span className={styles.contactItemLink}>099-523-86-07</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.contactItem}>
                                    <Link href="mailto:vinorosend@gmail.com">
                                        <a>
                                            <MailSvg />
                                            <span className={styles.contactItemLink}>vinorosend@gmail.com</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.contentForm}>
                            <h2 className={styles.title}>{t(`contacts:contactUs`)}</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;