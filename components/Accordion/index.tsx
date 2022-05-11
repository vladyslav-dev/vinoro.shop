import React, { useRef, useState } from 'react';
import styles from './Accordion.module.scss';
import AccordionItem from './helpers/AccordionItem';
import { IAccordionData } from '@/interfaces/accordion';
import useTranslation from 'next-translate/useTranslation';
import { ACCORDION_DATA } from '@/constants/accordion';

export interface IAccordionController {
    getCurrentAccord: () => string;
    toggleAccord: (title: string) => void;
    checkIsCurrentAccord: (title: string) => boolean;
}

const Accordion: React.FC= () => {

    const [currentAccord, setCurrentAccord] = useState<string>('');

    const { t } = useTranslation();

    const accordionData = useRef<Array<IAccordionData>>(ACCORDION_DATA);

    const accordionController: IAccordionController = {
        getCurrentAccord: () => currentAccord,
        toggleAccord: (title) => setCurrentAccord(title),
        checkIsCurrentAccord: (title) => currentAccord === title
    }

    if (!Array.isArray(accordionData.current)) {
        return null
    }

    return (
        <div className={styles.accordion}>
            <h2 className={styles.accordionTitle}>{t("help:FAQ.title")}</h2>
            <ul className={styles.accordionList}>
                {accordionData?.current?.map((acc: IAccordionData, index) => (
                   <AccordionItem key={index} data={acc} controller={accordionController}  />
                ))}
            </ul>
        </div>
    )
}

export default Accordion;