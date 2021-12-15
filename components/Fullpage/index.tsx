import React, { useState } from 'react';
import styles from "./Fullpage.module.scss";

import Section from "./helpers/Section";
import SectionContainer from "./helpers/SectionContainer";
import Navbar from "@/components/Navbar";

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
        <SectionContainer className={styles.sectionContainer} {...options} activeSection={current}>
            <Section className={styles.section}></Section>
            <Section className={styles.section}></Section>
            <Section className={styles.section}></Section>
        </SectionContainer>
    )
}

export default Fullpage;
