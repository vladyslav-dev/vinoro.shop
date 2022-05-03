import { IBasketProduct, IBasketProductCollection, IBulkPrice } from "@/interfaces/product";

export const sortBulkPrice = (bulkPrice: IBulkPrice[]) => {
    const bulkPriceCopy = [...bulkPrice];
    return bulkPriceCopy.sort((a, b) => a.from - b.from);
}

export const calcTotalPrice = (basketProducts: IBasketProductCollection ) => {
    return Object.values(basketProducts).reduce((acc: number, item: IBasketProduct) => {
        return acc + item.total_price;
    }, 0);
}

export const setBasketToLocalStorage = (basketProducts: IBasketProductCollection ) => {
    localStorage.setItem('vinoro.basket', JSON.stringify(basketProducts));
}

export const getBasketFromLocalStorage = (): IBasketProductCollection => {
    const basket = localStorage.getItem('vinoro.basket');

    try {
        if (basket) {
            return JSON.parse(basket);
        } else {
            return {};
        }
    } catch (e) {
        return {};
    }
}