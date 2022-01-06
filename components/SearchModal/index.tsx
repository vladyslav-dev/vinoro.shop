import React, { useState, useEffect } from 'react'
import styles from './SearchModal.module.scss';
import Router from 'next/router';
import axios from 'axios';

import { ArrowModal } from '@/icons/Arrow';
import { LoupeSvg } from '@/icons/Loupe';

import ToolBar from '@/components/ToolBar';
import CardList from '@/components/CardList';

interface SearchModalProps {
    closeSearch?: () => void;
}

const SearchModal = ({ closeSearch }: SearchModalProps) => {

    const [animate, setAnimate] = useState(false)
    const [products, setProducts] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [lastQuery, setLastQuery] = useState('')

    Router.events.on('routeChangeComplete', () => closeSearch())

    const getProductsByQuery = async () => { 
        const res = await axios({   
            method: 'POST',
            url: process.env.NEXT_PUBLIC_DOMAIN + '/api/search',
            data: { searchQuery } 
        });
        setProducts(res.data.products)
        setLastQuery(searchQuery)
    }

    useEffect(() => {
        document.body.style.overflowY = 'scroll'
        document.body.style.position = 'fixed'
        
        return () => {
            document.body.style.overflow = null
            document.body.style.position = null
        }
    }, [])
    

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            getProductsByQuery()
        }
    }

    return (
        <div className={styles.myModal}>
            <div className={styles["container-xl"]}>
                <div className={styles.content}>
                       <div className={styles.wrapper}>
                            <div onClick={() => closeSearch()} className={styles.arrow}>
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
                        (!products || products.length) ? (
                            <>
                                    <ToolBar 
                                        products={products}
                                        updateProductList={setProducts}
                                        setAnimate={setAnimate}
                                    />
                                    <CardList 
                                        products={products}
                                        animate={animate}
                                        customStyles={{gridTemplateColumns: `repeat(${5}, 1fr)`}} 
                                    />
                            </>
                        ) : (
                            <p>Товаров за запросом - {lastQuery} не найдено</p> 
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default SearchModal
