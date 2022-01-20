import React, { useState, useContext } from 'react'
import Img from '@/components/Img';
import styles from './Product.module.scss'
import Button from '../Button'
import { IProduct } from '@/interfaces/IProduct';
import { IBasketProduct } from '@/interfaces/IBasket';
import { IProductCard } from '@/interfaces/IFavorite'
import { GlobalContext } from '@/store/index';
import { LinkSvg } from '@/icons/Link';
import useTranslation from 'next-translate/useTranslation';
import Breadcrumb from '@/components/Breadcrumb';

interface ProductPageProps {
    product?: IProduct;
    category?: {
        _id: string;
        category_name: string;
    };
}

const Product: React.FC<ProductPageProps> = ({ product, category }) => {

    const { t } = useTranslation();
    const { BASKET, FAVORITES } = useContext(GlobalContext)
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const isProductInBasket = BASKET.state.products.some(item => item?._id === product?._id)

    const isPrductInFavorites = FAVORITES.state.products?.some(item => item?._id === product?._id)

    const addToBasket = () => BASKET.handlers.addProduct({
        _id: product._id,
        name: product.name,
        cost: product.cost,
        image: product.image,
    } as IBasketProduct)

    const addFavorites = () => FAVORITES.handlers.addProduct({
        _id: product._id,
        name: product.name,
        cost: product.cost,
        image: product.image,
        availability: product.availability
    } as IProductCard)

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        setIsShowModal(true)
        setTimeout(() => setIsShowModal(false), 2280)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.breadcrumb}>
                <Breadcrumb category={category} />
            </div>
            <div className={styles.content}>
                <div className={styles.leftPart}>
                    <Img src={product?.image} />
                </div>
                <div className={styles.rightPart}>
                    <div className={styles.productNamePrice}>
                        <p>{product?.name}</p>
                        <p>{product?.cost} UAH</p>
                    </div>
                    <div className={styles.productAvailability}>
                        {product?.availability ? <p className={styles.cardAvailabilityGreen}>{t("product:availability.inStock")}&nbsp; &#10004;</p> : <p className={styles.cardAvailabilityRed}>{t("product:availability.outOfStock")}&nbsp; &#10008;</p>}
                    </div>
                    <button className={styles.productLink} onClick={copyLink}>
                        <p>{t("product:copyLink")}</p>
                        <LinkSvg />
                    </button>
                    <div className={styles.addButtons}>
                        <Button
                            label={isProductInBasket ? t("product:alreadyInBasket") : t("product:addToBasket")}
                            click={() => { !isProductInBasket ? addToBasket() : null }}
                            styles={{ fontWeight: 600 }}
                        />
                        <Button
                            label={isPrductInFavorites ? t("product:alreadyInFavorite") : t("product:addToFavorite")}
                            type="outlined"
                            styles={{ fontWeight: 700 }}
                            click={() => { !isPrductInFavorites ? addFavorites() : null }}
                        />
                    </div>
                    <div className={styles.productDescriptions}>
                        <p>{product?.description}</p>
                    </div>
                </div>
                <div className={`${styles.productModalWarning} ${isShowModal ? styles.productModalWarningShow : null}`}>{t("product:linkCopied")}</div>
            </div>
        </div>
    )
}

export default Product;

