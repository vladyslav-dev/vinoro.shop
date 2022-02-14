import React, { useState, useEffect, useRef } from 'react';
import styles from '../Accordion.module.scss';
import { SortArrorSvg } from '@/icons/Arrow';
import { IAccordionController } from '../index';

interface IAccordionItem {
    title: string;
    description: string;
    controller: IAccordionController;
}

const AccordionItem: React.FC<IAccordionItem> = ({title, description, controller}) => {

    const [height, setHeight] = useState<number>(0);

    const hiddenBlockRef = useRef<HTMLParagraphElement>(null);
    const hiddenBlockHeight = hiddenBlockRef?.current?.scrollHeight as number;
    const isCurrentAccord: boolean = controller.checkIsCurrentAccord(title);

    useEffect(() => setHeight(hiddenBlockHeight), [hiddenBlockHeight])

    const accordHandler = (event: React.MouseEvent<HTMLElement>) => {
        if (controller?.getCurrentAccord() === title) {
            setHeight(0)
            controller.toggleAccord('')
        } else {
            setHeight(hiddenBlockHeight)
            controller?.toggleAccord(title)
        }
    }

    return (
        <li
            className={`${styles.accordionItem} ${isCurrentAccord ? styles.active : ''}`}
            onClick={accordHandler}
        >
            <div className={styles.accordionItemRow}>
                <h6 className={styles.accordionItemTitle}>{title}</h6>
                <SortArrorSvg color='#FFFFFF' />
            </div>
            <p
                ref={hiddenBlockRef}
                className={styles.accordionItemDescription}
                style={{ maxHeight: isCurrentAccord ? `${height}px` : '0' }}
            >
                <div dangerouslySetInnerHTML={{__html: description}} />
            </p>
        </li>
    )
}

export default AccordionItem;