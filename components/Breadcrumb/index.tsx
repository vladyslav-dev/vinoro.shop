import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.scss';
import { BreadcrumbHomeSvg } from '@/icons/Home';
import { SortArrorSvg } from '@/icons/Arrow';
import useTranslation from 'next-translate/useTranslation'

interface BreadcrumbProps {
    category?: {
        _id: string;
        category_name: string;
    };
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ category }) => {
    const { t } = useTranslation();
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
            {category && (
                <div className={styles.breadcrumbItem}>
                    <Link href={`/category/${category?._id}`}>
                        <a>
                            <span>{t(`common:category.${category?.category_name}`)}</span>
                        </a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Breadcrumb;