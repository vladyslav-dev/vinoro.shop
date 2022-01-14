import React, { useContext } from 'react'
import { GlobalContext } from '@/store/index';
import styles from './favorite.module.scss';
import Catalog from '@/components/Catalog';
import EmptyCatalog from '@/components/EmptyCatalog';

const Favorite = () => {

    const { FAVORITES } = useContext(GlobalContext)
    const favoriteProductList = FAVORITES.state.products

    return (
        <div className={styles.favorite}>
            <div className={styles["container-xl"]}>
                <Catalog 
                    products={favoriteProductList}
                    alt={(
                        <EmptyCatalog 
                            buttonLink={{
                                path: '/',
                                text: "НА ГЛАВНУЮ"
                            }}
                            textWarnings="У вас нет добавленных товаров в избранное :(" 
                        />
                    )}
                />
            </div>
        </div>
    )
}

export default Favorite
