import React, { useMemo } from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.scss';
import { BreadcrumbHomeSvg } from '@/icons/Home';
import { SortArrorSvg } from '@/icons/Arrow';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import useLanguage from '@/hooks/useLanguage';
import useTranslation from 'next-translate/useTranslation';


const Breadcrumb: React.FC = () => {

    const { language } = useLanguage();

    const { t } = useTranslation();

    const { currentCategory, categoryCollection, isLoaded } = useSelector((state: RootState) => state.catalogReducer)

    const categoryName: string = useMemo(() => {

        if (!isLoaded || !currentCategory) {
            return '';
        }

        if (currentCategory in categoryCollection) {
            return categoryCollection[currentCategory].category_name[language] as string;
        } else {
            return '';
        }

    }, [currentCategory, categoryCollection, isLoaded, language])


    if (!currentCategory) {
        return null;
    }
    return (
        <div className={styles.breadcrumb}>
            <div className={styles.breadcrumbItem}>
                <Link href="/">
                    <a>
                        <BreadcrumbHomeSvg />
                        <span>{t("common:menu.main")}</span>
                    </a>
                </Link>
            </div>
            <div className={styles.arrowNext}>
                <SortArrorSvg color="#1C1C1C" />
            </div>
            <div className={styles.breadcrumbItem}>
                <Link href={`/category/[id]`} as={`/category/${currentCategory}`}>
                    <a>
                        <span>{categoryName}</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default React.memo(Breadcrumb);