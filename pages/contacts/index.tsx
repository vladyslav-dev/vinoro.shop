import styles from './contacts.module.scss';
import Link from 'next/link';
import { PhoneSvg } from '@/icons/Phone';
import { ViberFilledSvg } from '@/icons/SocialMedia';
import { MailSvg } from '@/icons/Mail';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {

    return (
        <div className={styles.contacts}>
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
                                    <span className={styles.contactTooltip}>Нажмите для мгновенного визова</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles.contactItem}>
                            <Link href="viber://chat?number=+380689125456">
                                <a>
                                    <ViberFilledSvg />
                                    <span className={styles.contactItemLink}>068-912-54-56</span>
                                    <span className={styles.contactTooltip}>Нажмите для открития в Viber</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles.contactItem}>
                            <Link href="mailto:vinorosend@gmail.com">
                                <a>
                                    <MailSvg />
                                    <span className={styles.contactItemLink}>vinorosend@gmail.com</span>
                                    <span className={styles.contactTooltip}>Нажмите чтоби написать письмо</span>
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
    )
}

export default ContactPage;