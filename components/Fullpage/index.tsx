import React, { useState, useContext, useMemo } from 'react';
import styles from "./Fullpage.module.scss";

import Section from "./helpers/Section";
import SectionContainer from "./helpers/SectionContainer";
import HeaderTitle from '@/components/HeaderTitle';
import SocialMedia from '@/components/SocialMedia';
import GoAhead from '@/components/GoAhead';
import FoollpageBottom from '@/components/FoollpageBottom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { ICatalogCollection } from '@/interfaces/catalog';



const Fullpage = () => {

    const { catalogCollection, isLoaded } = useSelector((state: RootState) => state.catalogReducer);

    console.log(catalogCollection)

    const [current, setCurrent] = useState(0);

    const [isInterfaceShowing, setIsInterfaceShowing] = useState(true);

    const interfaceHandlers = {
        showInterface: () => setIsInterfaceShowing(true),
        hideInterface: () => setIsInterfaceShowing(false),
    }

    const options = {
        sectionClassName: 'section',
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
        scrollBar: false,
        navigation: true,
        verticalAlign: true,
        sectionPaddingTop: '50px',
        sectionPaddingBottom: '50px',
        arrowNavigation: true,
        scrollCallback: (states: any) => setCurrent(states.activeSection),
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
                    <div className={styles.foollpageBottom}>
                        <FoollpageBottom />
                    </div>
                </div>
            )}
            {!!isLoaded && (
                <SectionContainer className={styles.sectionContainer} {...options} activeSection={current}>
                    {Object.values(catalogCollection as ICatalogCollection).map((props, key) => (
                        <Section
                            key={key}
                            className={styles.section}
                            style={{
                                backgroundImage: `url(${props.catalog.catalog_image})`,
                            }}
                        >
                            <HeaderTitle interfaceHandlers={interfaceHandlers} {...props} />
                        </Section>
                    ))}
                </SectionContainer>
            )}
        </>
    )
}

export default Fullpage;
