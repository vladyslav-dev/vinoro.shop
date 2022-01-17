import React, { useState, useContext } from 'react';
import styles from "./Fullpage.module.scss";

import Section from "./helpers/Section";
import SectionContainer from "./helpers/SectionContainer";
import HeaderTitle from '@/components/HeaderTitle';
import SocialMedia from '@/components/SocialMedia';
import GoAhead from '@/components/GoAhead';
import HeaderBottom from '@/components/HeaderBottom';
import { GlobalContext } from '@/store/index';
import { collectCategory } from '@/utils/index';
import useCategoryEnum from '@/hooks/useCategoryEnum';

const Fullpage = () => {

    const { CATEGORY } = useContext(GlobalContext);
    const { category } = CATEGORY.state;

    const [current, setCurrent] = useState(0);
    
    const { catalogEnum } = useCategoryEnum()

    const [isInterfaceShowing, setIsInterfaceShowing] = useState(true);

    const interfaceHandlers = {
        showInterface: () => setIsInterfaceShowing(true),
        hideInterface: () => setIsInterfaceShowing(false),
    }

    if (!category?.length) return null

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
            {isInterfaceShowing && (
                <div className={styles["container-xl"]}>
                    <div className={styles.socialMedia}>
                        <SocialMedia color="#fff" />
                    </div>
                    <div className={styles.goAhead}>
                        <GoAhead />
                    </div>
                    <div className={styles.headerBottom}>
                        <HeaderBottom />
                    </div>
                </div>
            )}
            <SectionContainer className={styles.sectionContainer} {...options} activeSection={current}>
                {collectCategory(category, catalogEnum).map((props, index) => (
                    <Section className={styles.section} key={index}>
                        <HeaderTitle interfaceHandlers={interfaceHandlers} {...props} />
                    </Section>
                ))}
            </SectionContainer>
        </>
    )
}

export default Fullpage;
