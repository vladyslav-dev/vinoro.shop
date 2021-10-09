import React from 'react'
import Image from 'next/image'
import styles from './ProductPage.module.scss'
import Button from '../Button'

const ProductPage = ({product}) => {

    const addBasket = () => {
        console.log('add')
    }

    const addFavorites = () => {
        console.log('fav')
    }

    return (
        <div className={styles.content}>
           <div className={styles.leftPart}>
                <Image src={product.image} alt={product.name} layout='fill' className={styles.imageProduct} quality={100} /> 
           </div>
           <div className={styles.rightPart}>
                <div className={styles.productNamePrice}>
                    <p>
                        {product.name}
                    </p>
                    <p>
                        {product.cost} UAH
                    </p>
                </div>
                <div className={styles.productAvailability}>
                    {product.availability ? <p className={styles.cardAvailabilityGreen}>Есть в наличии &#10004;</p> : <p  className={styles.cardAvailabilityRed}>Нет в наличии &#10008;</p>}
                </div>
                <div className={styles.addButtons}>
                    <Button label="ДОБАВИТЬ В КОРЗИНУ" styles={{width: "100%", margin: '15px 0'}} click={addBasket}/>
                    <Button label="ДОБАВИТЬ В ИЗБРАННОЕ"styles={{width: "100%", backgroundColor: 'white', border: "2px solid black", color: 'black', margin: '15px 0'}} click={addFavorites}/>
                </div>
                <div className={styles.productDescriptions}>
                    <p>
                        {product.description}
                    </p>
                </div>
           </div>
        </div>
    )
}

export default ProductPage
function useDispatch() {
    throw new Error('Function not implemented.')
}

