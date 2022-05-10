import React, { useState } from 'react';
import styles from './Fullpage.module.scss';
import ReactPageScroller from 'react-page-scroller';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { ICatalogCollection } from '@/interfaces/catalog';
import HeaderTitle from '../HeaderTitle';
import SocialMedia from '../SocialMedia';
import GoAhead from '../GoAhead';
import FoollpageBottom from '../FoollpageBottom';


const Fullpage: React.FC = () => {
  const { catalogCollection, isLoaded } = useSelector((state: RootState) => state.catalogReducer);

  const [currentPage, setCurrentPage] = useState<number>(0);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className={styles.fullpageWrapper}>
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
          <div className={styles.controller}>
          {Object.keys(catalogCollection).map((key, index) => (
            <div
              key={key}
              className={`${styles.controllerItem} ${index === currentPage ? styles.active : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
          </div>
      </div>
      <div className={styles.sectionContainer}>
        <ReactPageScroller
          customPageNumber={currentPage}
          renderAllPagesOnFirstRender={true}
          pageOnChange={(num: number) => setCurrentPage(num)}
        >
          {Object.values(catalogCollection as ICatalogCollection).map((props, key) => (
            <section
              key={key}
              className={styles.section}
              style={{ backgroundImage: `url(${props.catalog.catalog_image})`}}
            >
              <HeaderTitle catalog={props.catalog} />
            </section>
          ))}
        </ReactPageScroller>
      </div>
    </div>
  )
}

export default Fullpage;