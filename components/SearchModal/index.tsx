import React, { useState, useEffect } from 'react'
import styles from './SearchModal.module.scss';
import Router from 'next/router';
import axios from 'axios';

import { SearchBackArrowSvg } from '@/icons/Arrow';
import { LoupeSvg } from '@/icons/Loupe';

import ToolBar from '@/components/ToolBar';
import CardList from '@/components/CardList';

interface SearchModalProps {
    closeSearch?: () => void;
}

const SearchModal = ({ closeSearch }: SearchModalProps) => {


    const [searchQuery, setSearchQuery] = useState('')
    const [lastQuery, setLastQuery] = useState('')

    const relateQueries = [
        "Чай",
        "Шампанское",
        "Гель для стирки",
        "Fragolino",
        "Вино",
        "Шоколад",
        "Стиральний порошок",
        "Cashet",
        "Кофе",
    ]

    Router.events.on('routeChangeComplete', () => closeSearch())

    const getProductsByQuery = async () => { 
        const res = await axios({   
            method: 'POST',
            url: process.env.NEXT_PUBLIC_DOMAIN + '/api/search',
            data: { searchQuery } 
        });
        setLastQuery(searchQuery)
    }

    useEffect(() => {
        document.body.style.overflowY = 'hidden'
        
        return () => {
            document.body.style.overflow = null
            document.body.style.position = null
        }
    }, [])

    const redirectToSearch = (param?: string) => Router.push({
        pathname: '/search',
        query: {query: param || searchQuery}
    })

    const submitHandler = event => {
        event?.preventDefault();
        redirectToSearch()
    }

    const relateQueryHandler = event => {
        redirectToSearch(event.target.innerText)
    }


    return (
        <div className={styles.myModal}>
            <div className={styles.myModalRow}>
                <div className={styles["container-xl"]}>
                    <div className={styles.wrapper}>
                        <div onClick={() => closeSearch()} className={styles.back}>
                            <SearchBackArrowSvg />
                            <span>НАЗАД</span>
                        </div>
                        <div className={styles.inputWrapper}>
                            <h3>Найди нужний товар тут...</h3>
                            <form className={styles.inputRow} onSubmit={submitHandler}>
                                <input 
                                    type="text"
                                    placeholder="Поиск"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <span className={styles.inputIcon} onClick={submitHandler}>
                                    <LoupeSvg />
                                </span>
                            </form>
                            <div className={styles.relateQuery}>
                                <span className={styles.relateQueryTitle}>Популярние запроси:</span>
                                {relateQueries.map(query => (
                                    <button onClick={relateQueryHandler} className={styles.query} key={query}>{query}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default SearchModal
