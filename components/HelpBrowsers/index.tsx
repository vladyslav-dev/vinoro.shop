import styles from './HelpBrowsers.module.scss';
import chrome from '../../public/static/images/browsers/chrome.png';
import safari from '../../public/static/images/browsers/safari.png';
import opera from '../../public/static/images/browsers/opera.png';
import firefox from '../../public/static/images/browsers/firefox.png';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';

const images = [
    {
        title: 'Chrome',
        image: chrome,
        link: 'https://www.google.com/chrome/'
    },
    {
        title: 'Safari',
        image: safari,
        link: 'https://support.apple.com/downloads/safari',
    },
    {
        title: 'Opera',
        image: opera,
        link: 'https://www.opera.com/download',
    },
    {
        title: 'Firefox',
        image: firefox,
        link: 'https://www.mozilla.org/firefox/new/'
    },
];

const HelpBrowsers = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.browsersContent}>
            <div className={styles.textContent}>
                <h2>{t("help:browsers.title")}</h2>
                <p style={{marginBottom: "20px"}}>
                    {t("help:browsers.paragraph-1")}
                </p>
                <p>
                    {t("help:browsers.paragraph-2")}
                </p>
            </div>
            <div className={styles.imagesContent}>
                {images.map((item, key) => (
                    <div key={key} className={styles.imagesContentItem}>
                        <Link href={item.link}  >
                            <a target="_blank">
                                <Image
                                    src={item.image}
                                    quality="100"
                                    alt="Изображение на найдено"
                                />
                                <span>{item.title}</span>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.textContent}>
                    <p>
                    {t("help:browsers.paragraph-3")}<Link href="/contacts"><a>{t("help:browsers.paragraph-3-link")}</a></Link>
                    </p>
            </div>
        </div>
    )
}

export default HelpBrowsers;