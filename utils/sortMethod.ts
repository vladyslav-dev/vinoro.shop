import { IProduct } from '@/interfaces/product';

export const sortMethod = {
    default: (products: Array<IProduct>): Array<IProduct> => {
        return products
    },
    ascendingPrice: (products: Array<IProduct>): Array<IProduct> => {
        const sortedProducts = products.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        return sortedProducts
    },
    descendingPrice: (products: Array<IProduct>): Array<IProduct> => {
        const sortedProducts = products.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
        return sortedProducts
    }
}