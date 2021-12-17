import React, { useState } from 'react';
import styles from "./Fullpage.module.scss";

import Section from "./helpers/Section";
import SectionContainer from "./helpers/SectionContainer";
import HeaderTitle from '@/components/HeaderTitle';
import SocialMedia from '@/components/SocialMedia';

const Fullpage = () => {

    const [current, setCurrent] = useState(0);

    const options = {
        sectionClassName: 'section',
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
        scrollBar: false,
        navigation: true,
        verticalAlign: true,
        sectionPaddingTop: '50px',
        sectionPaddingBottom: '50px',
        arrowNavigation: true,
        scrollCallback: (states) => setCurrent(states.activeSection),
    };

    return (
        <>
            <SectionContainer className={styles.sectionContainer} {...options} activeSection={current}>
                <Section className={styles.section}>
                    <HeaderTitle title="Продукти питиния" />
                </Section>
                <Section className={styles.section}>
                    <HeaderTitle title="Продукти питиния" />
                </Section>
                <Section className={styles.section}>
                    <HeaderTitle title="Продукти питиния" />
                </Section>
            </SectionContainer>
            <div className={styles["container-xl"]}>
                <div className={styles.socialMedia}>
                    <SocialMedia color="#fff" />
                </div>
            </div>
        </>
    )
}

export default Fullpage;
