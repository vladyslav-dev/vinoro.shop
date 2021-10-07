import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './category.module.scss';
import CardList from '@/components/CardList';
import CardFilter from '@/components/CardFilter'
import Ranger from '@/components/Ranger';

const Category = ({ products }) => {

    type RangeType = "sm" | "md" | "lg"

    const [range, setRange] = useState<RangeType>("lg")
    const [isTreeOpen, setIsTreeOpen] = useState(true)

    const rangeHandler = e => {
        console.log(e.target.name)
        setRange(e.target.name)
    }

    // useEffect(() => {
    //     console.log("Use effect range is ", range)

    //     if (range === "lg") {

    //     }
    //     if (range === "md") {

    //     }
    //     if (range === "sm") {

    //     }
    // }, [range])

    const getCurrentRange = () => {
        switch (range) {
            case "lg":
                return {
                    gridTemplateColumns: `repeat(${isTreeOpen ? 3 : 4}, 1fr)`
                }
            case "md":
                return {
                    gridTemplateColumns: `repeat(${isTreeOpen ? 4 : 5}, 1fr)`
                }
            case "sm":
                return {
                    gridTemplateColumns: `repeat(${isTreeOpen ? 5 : 6}, 1fr)`
                }
            default:
                return {
                    gridTemplateColumns: `repeat(${isTreeOpen ? 4 : 5}, 1fr)`
                }
        }
    }


    return (
        <div className={styles["container-xl"]}>
            <div className={styles.categoryWrapper}>
                <div className={styles.categoryTree}>
                    Component Tree
                </div>
                <div className={styles.categoryContent}>
                    <div className={styles.categoryToolbar}>
                        <CardFilter />
                        <Ranger rangeHandler={rangeHandler} />
                    </div>
                    <div className={styles.categoryList}>
                        <CardList products={products} customStyles={getCurrentRange()} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps = async ({ query }) => {
    const { data } = await axios.get(`http://localhost:3000/api/category/${query.id}`);
    return {
        props: {
            products: data.products
        },
    }

}

export default Category;