import React, { useState, useEffect, useRef } from 'react';
import styles from '../Accordion.module.scss';
import { SortArrorSvg } from '@/icons/Arrow';
import { IAccordionData } from '@/interfaces/accordion';
import { IAccordionController } from '..';
import useLanguage from '@/hooks/useLanguage';


interface IAccordionItem {
    data: IAccordionData;
    controller: IAccordionController;
}

const AccordionItem: React.FC<IAccordionItem> = ({data, controller}) => {

    const { language } = useLanguage();

    const [height, setHeight] = useState<number>(0);

    const hiddenBlockRef = useRef<HTMLParagraphElement>(null);
    const hiddenBlockHeight = hiddenBlockRef?.current?.scrollHeight as number;
    const isCurrentAccord: boolean = controller.checkIsCurrentAccord(data[language]?.title);

    useEffect(() => setHeight(hiddenBlockHeight), [hiddenBlockHeight])

    const accordHandler = () => {
        if (controller?.getCurrentAccord() === data[language]?.title) {
            setHeight(0)
            controller.toggleAccord('')
        } else {
            setHeight(hiddenBlockHeight)
            controller?.toggleAccord(data[language]?.title)
        }
    }

    return (
        <li
            className={`${styles.accordionItem} ${isCurrentAccord ? styles.active : ''}`}
            onClick={accordHandler}
        >
            <div className={styles.accordionItemRow}>
                <h6 className={styles.accordionItemTitle}>{data[language]?.title}</h6>
                <SortArrorSvg color='#FFFFFF' />
            </div>
            <div
                ref={hiddenBlockRef}
                className={styles.accordionItemDescription}
                style={{ maxHeight: isCurrentAccord ? `${height}px` : '0' }}
            >
                <div dangerouslySetInnerHTML={{__html: data[language]?.description}} />
            </div>
        </li>
    )
}

export default AccordionItem;