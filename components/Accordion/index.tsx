import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import AccordionItem from './helpers/AccordionItem';
import { IAccordion } from '@/interfaces/IAccordion';

export interface IAccordionController {
    getCurrentAccord: () => string;
    toggleAccord: (title: string) => void;
    checkIsCurrentAccord: (title: string) => boolean;
}

interface IAccordionProps { accordionData: IAccordion[] }

const Accordion: React.FC<IAccordionProps> = ({ accordionData }) => {

    const [currentAccord, setCurrentAccord] = useState<string>('');

    const accordionController: IAccordionController = {
        getCurrentAccord: () => currentAccord,
        toggleAccord: (title) => setCurrentAccord(title),
        checkIsCurrentAccord: (title) => currentAccord === title
    }

    return (
        <div className={styles.accordion}>
            <h2 className={styles.accordionTitle}>Часто задаваемие вопроси</h2>
            <ul className={styles.accordionList}>
                {accordionData?.map((acc: IAccordion) => (
                   <AccordionItem key={acc?.title} {...acc}  controller={accordionController}  />
                ))}
            </ul>
        </div>
    )
}

export default Accordion;