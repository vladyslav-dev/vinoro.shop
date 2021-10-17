import { IBasketProduct, BasketAction, BasketHandler } from '@/interfaces/IBasket';
import {
    addProduct,
    removeProductById,
    increaseCountById,
    decreaseCountById,
} from './action-creators';


export const getBasketHandlers: BasketHandler = (dispatch: React.Dispatch<BasketAction>) => ({
    addProduct: (product: IBasketProduct) => {
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