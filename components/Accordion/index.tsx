import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import AccordionItem from './helpers/AccordionItem';
import { IAccordion } from '@/interfaces/accordion';
import useTranslation from 'next-translate/useTranslation';

export interface IAccordionController {
    getCurrentAccord: () => string;
    toggleAccord: (title: string) => void;
    checkIsCurrentAccord: (title: string) => boolean;
}

const Accordion: React.FC= () => {

    const [currentAccord, setCurrentAccord] = useState<string>('');

    const { t } = useTranslation();

    const accordionData: IAccordion[] = t(`help:FAQ.questions`, { count: 1}, { returnObjects: true } );

    const accordionController: IAccordionController = {
        getCurrentAccord: () => currentAccord,
        toggleAccord: (title) => setCurrentAccord(title),
        checkIsCurrentAccord: (title) => currentAccord === title
    }

    if (!Array.isArray(accordionData)) {
        return null
    }

    return (
        <div className={styles.accordion}>
            <h2 className={styles.accordionTitle}>{t("help:FAQ.title")}</h2>
            <ul className={styles.accordionList}>
                {accordionData?.map((acc: IAccordion) => (
                   <AccordionItem key={acc?.title} {...acc}  controller={accordionController}  />
                ))}
            </ul>
        </div>
    )
}

export default Accordion;