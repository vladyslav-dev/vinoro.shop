import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '@/store/index';
import styles from './favorite.module.scss'
import CardList from '@/components/CardList';
import ToolBar from '@/components/ToolBar';

const Favorite = () => {

    const { FAVORITES } = useContext(GlobalContext)
    const favoriteItem = FAVORITES.state.products

    const [animate, setAnimate] = useState(false);
    const [range, setRange] = useState<RangeType>("md")
    const [productList, setProductList] = useState(favoriteItem);

    useEffect(() => setProductList(favoriteItem), [favoriteItem])

    type RangeType = "sm" | "md" | "lg"

    const getCurrentRange = () => {
        switch (range) {
            case "lg":
                return {
                    gridTemplateColumns: `repeat(${4}, 1fr)`
                }
            case "md":
                return {
                    gridTemplateColumns: `repeat(${5}, 1fr)`
                }
            case "sm":
                return {
                    gridTemplateColumns: `repeat(${6}, 1fr)`
                }
            default:
                return {
                    gridTemplateColumns: `repeat(${5}, 1fr)`
                }
        }
    }

    return (
        <div className={styles["container-xl"]}>
            <div className={styles.wrraper}>
            <ToolBar products={favoriteItem} setAnimate={setAnimate} setRange={setRange}  updateProductList={setProductList}/>
                <div className={styles.favoriteList}>
                    {favoriteItem?.length ? <CardList products={productList} animate={animate} customStyles={getCurrentRange()} removeButton={true}/> : <a>Пусто...</a>}
                </div>
            </div>
        </div>
    )
}

export default Favorite
