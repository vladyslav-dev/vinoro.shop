import React from 'react'
import styles from './TotalItemCount.module.scss'
import { IProduct } from '@/interfaces/IProduct';
import useTranslation from 'next-translate/useTranslation';

interface TotalItemCountProps {
    products?: Array<IProduct>;
}

const TotalItemCount = ( {products}: TotalItemCountProps) => {

    const { t } = useTranslation();

    return (
        <div className={styles.content}>
            <p>{t("common:toolbar.totalProducts")}: {products?.length}</p>
        </div>
    )
}

export default TotalItemCount
  