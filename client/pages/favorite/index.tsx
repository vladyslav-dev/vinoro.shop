import FavoriteMenu from '@/components/FavoriteMenu'
import React, { useContext } from 'react'
import { GlobalContext } from '@/store/index';
import styles from './favorite.module.scss'
import CardList from '@/components/CardList';

const Favorite = () => {

    const { FAVORITES } = useContext(GlobalContext)
    const favoriteItem = FAVORITES.state.products
    console.log(favoriteItem)
    return (
        <div className={styles["container-xl"]}>
            <div className={styles.wrraper}>
                <FavoriteMenu length={favoriteItem?.length}/>
                <div className={styles.favoriteList}>
                    <CardList products={favoriteItem} customStyles={{gridTemplateColumns: "repeat(6, 1fr)"}} removeButton={true}/>
                </div>
            </div>
        </div>
    )
}

export default Favorite
