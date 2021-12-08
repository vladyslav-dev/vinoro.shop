import React, { useState } from 'react';
import styles from "./Fullpage.module.scss";

import Section from "./helpers/Section";
import SectionContainer from "./helpers/SectionContainer";

const Fullpage = () => {

    const [current, setCurrent] = useState(0);

    const options = {
        sectionClassName: 'section',
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
        scrollBar: false,
        navigation: true,
        verticalAlign: false,
        sectionPaddingTop: '50px',
        sectionPaddingBottom: '50px',
        arrowNavigation: true,
        scrollCallback: (states) => setCurrent(states.activeSection),
    };

    return (
        <SectionContainer className={styles.sectionContainer} {...options} activeSection={current}>
            <Section className={styles.section}>Page 1</Section>
            <Section className={styles.section}>Page 2</Section>
            <Section className={styles.section}>Page 3</Section>
        </SectionContainer>
    )
}

export default Fullpage;
