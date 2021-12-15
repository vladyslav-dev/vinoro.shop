import React, { useEffect, useState } from 'react'
import styles from './SearchModal.module.scss'

import { ArrowModal } from '@/icons/Arrow'

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
                        <div onClick={() => setVisible(false)} className={styles.arrow}>
                            <ArrowModal  />
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.input}>
                                <input type="text" placeholder="Поиск" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => onKeyDownHandler(e)}/>
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
