import React from 'react'
import styles from './favoriteMenu.module.scss'

interface IFavoriteMenu {
    length?: number; 
}

const FavoriteMenu = (props: IFavoriteMenu) => {
    const {length} = props;

    return (
        <div className={styles.content}>
           <div className={styles.leftSide}>
                <a>Избранное</a>
           </div>
           <div className={styles.rightSide}>
                <a>Всего товаров: {length || "0"}</a>
           </div>
        </div>
    )
}

export default FavoriteMenu
