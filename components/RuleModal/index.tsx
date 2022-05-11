import useLanguage from '@/hooks/useLanguage';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import styles from './RuleModal.module.scss';
import { ruleTexts } from './ruleTexts';

interface RuleModalProps {
    closeRule: () => void;
}

const RuleModal: React.FC<RuleModalProps> = ({ closeRule }) => {

    const { t } = useTranslation();

    const { language } = useLanguage();

    return (
        <div className={styles.ruleBackground} onClick={closeRule}>
            <div className={styles.ruleModal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.ruleHeader}>
                    <h4>{t(`order:rule.UserAgreementTerms`)}</h4>
                    <span className={styles.closeRule} onClick={closeRule}></span>
                </div>
                <div className={styles.ruleBox}>
                    <pre>{ruleTexts[language]}</pre>
                </div>
            </div>
        </div>
    )
}

export default React.memo(RuleModal);