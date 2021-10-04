import { IProduct } from '@/interfaces/IProduct';
import {
    addProduct,
    removeProductById,
    increaseCountById,
    decreaseCountById,
} from './action-creators';

export const getBasketHandlers = (dispatch) => ({
    addProduct: (product: IProduct) => {
        dispatch(addProduct(product));
    },
    removeProductById: (productId: string) => {
        dispatch(removeProductById(productId));
    },
    increaseCountById: (productId: string) => {
        dispatch(increaseCountById(productId));
    },
    decreaseCountById: (productId: string) => {
        dispatch(decreaseCountById(productId));
    },
});