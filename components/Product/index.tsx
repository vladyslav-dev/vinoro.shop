import React, { useState, useEffect } from 'react'
import Img from '@/components/Img';
import styles from './Product.module.scss'
import Button from '../Button'
import { IProduct } from '@/interfaces/product';
import { IBasketProduct } from '@/interfaces/product';
import { LinkSvg } from '@/icons/Link';
import useTranslation from 'next-translate/useTranslation';
import Breadcrumb from '@/components/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import useCurrentCategory from '@/hooks/useCurrentCategory';
import useLanguage from '@/hooks/useLanguage';
import { addOne } from '@/store/slices/basket';
import { QuestionSvg } from '../Icons/Question';

interface ProductPageProps {
    product: IProduct;
}

const Product: React.FC<ProductPageProps> = ({ product }) => {

    const { setCurrentCategory } = useCurrentCategory(product.category as string);

    useEffect(() => setCurrentCategory(product.category as string), [product])

    const dispatch = useDispatch();

    const { basketProducts } = useSelector((state: RootState) => state.basketReducer);

    const { language } = useLanguage();

    const { t } = useTranslation();
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const isProductInBasket = Object.values(basketProducts).some(item => item?.id === product?.id)

    const addToBasket = () => dispatch(addOne({
        id: product.id,
        name: product.name,
        price: product.price,
        discount_price: product.discount_price,
        bulk_price: product.bulk_price,
        image: product.image,
    } as IBasketProduct));

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        setIsShowModal(true)
        setTimeout(() => setIsShowModal(false), 2280)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.breadcrumb}>
                <Breadcrumb />
            </div>
            <div className={styles.content}>
                <div className={styles.leftPart}>
                    <Img src={product.image} />
                </div>
                <div className={styles.rightPart}>
                    <div className={styles.productNamePrice}>
                        <p>{product.name[language]}</p>
                        {product.discount_price ? (
                            <div className={styles.productDiscount}>
                                <span className={styles.productNewPrice}>{product.discount_price} ₴</span>
                                {product.price !== 1 && (
                                    <span className={styles.productOldPrice}>{product.price} ₴</span>
                                )}
                            </div>
                        ) : (
                            <div className={styles.productPrice}>
                                {product.price !== 1 && (
                                    <span>{product.price} ₴</span>
                                )}

                            </div>
                        )}
                    </div>
                    {!!product.bulk_price.length && (
                        <div className={styles.bulkPrice}>
                            <div className={styles.bulkPriceTitle}>
                                <p>{t(`product:bulkPrice`)}</p>
                                <span className={styles.bulkPriceTooltip}>
                                    <span className={styles.icon}>
                                        <QuestionSvg />
                                    </span>
                                    <div className={styles.tooltipInfo}>
                                        {t(`product:bulkPriceTooltip`)}
                                    </div>
                                </span>
                            </div>
                            <div className={styles.bulkPriceList}>
                                {product.bulk_price.map((item) => (
                                    <div key={item.id} className={styles.bulkPriceItem}>{item.price} ₴ {t(`product:from`)} {item.from}{t(`product:pc`)}</div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className={styles.productAvailability}>
                        {product.availability ? <p className={styles.cardAvailabilityGreen}>{t("product:availability.inStock")}&nbsp; &#10004;</p> : <p className={styles.cardAvailabilityRed}>{t("product:availability.outOfStock")}&nbsp; &#10008;</p>}
                    </div>
                    <button className={styles.productLink} onClick={copyLink}>
                        <p>{t("product:copyLink")}</p>
                        <LinkSvg />
                    </button>
                    <div className={styles.addButtons}>
                        <Button
                            label={isProductInBasket ? t("product:alreadyInBasket") : t("product:addToBasket")}
                            click={() => { !isProductInBasket ? addToBasket() : null }}
                            styles={{ fontWeight: 600, fontSize: '11px' }}
                        />
                    </div>
                    <div className={styles.productDescriptions}>
                        <p>{product.description[language]}</p>
                    </div>
                </div>
                <div className={`${styles.productModalWarning} ${isShowModal ? styles.productModalWarningShow : null}`}>{t("product:linkCopied")}</div>
            </div>
        </div>
    )
}

export default Product;

