import React, { useEffect } from 'react'
import styles from './SearchModal.module.scss';

import { ArrowModal } from '@/icons/Arrow';
import { LoupeSvg } from '@/icons/Loupe';

const SearchModal = ({ setVisible, searchQuery, setSearchQuery, handleSumbmit, children }) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => document.body.style.overflow = null
    }, [])
    

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            handleSumbmit()
        }
    }

    return (
        <div className={styles.myModal}>
            <div className={styles["container-xl"]}>
                <div className={styles.content}>
                       <div className={styles.wrapper}>
                            <div onClick={() => setVisible(false)} className={styles.arrow}>
                                <ArrowModal  />
                            </div>
                            <div className={styles.inputWrapper}>
                                <div className={styles.input}>
                                    <input type="text" placeholder="Поиск" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => searchQuery && onKeyDownHandler(e) } />
                                    <LoupeSvg />
                                </div>
                            </div>  
                       </div>
                    <div className={styles.categoryList}>
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default SearchModal
