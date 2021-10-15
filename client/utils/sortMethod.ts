import { IProduct } from '@/interfaces/IProduct';

export const sortMethod = {
    default: (products: Array<IProduct>): Array<IProduct> => {
        return products
    },
    priceHigher: (products: Array<IProduct>): Array<IProduct> => {
        const sortedProducts = products.sort((a, b) => (a.cost > b.cost) ? 1 : ((b.cost > a.cost) ? -1 : 0))
        return sortedProducts
    },
    priceLower: (products: Array<IProduct>): Array<IProduct> => {
        const sortedProducts = products.sort((a, b) => (a.cost < b.cost) ? 1 : ((b.cost < a.cost) ? -1 : 0))
        return sortedProducts
    }
}