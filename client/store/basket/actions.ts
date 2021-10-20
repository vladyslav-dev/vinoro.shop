import { IBasketProduct, BasketAction, BasketHandler } from '@/interfaces/IBasket';
import {
    initState,
    addProduct,
    removeProductById,
    increaseCountById,
    decreaseCountById,
} from './action-creators';


export const getBasketHandlers: BasketHandler = (dispatch: React.Dispatch<BasketAction>) => ({
    initState: (state: Array<IBasketProduct>) => {
        dispatch(initState(state));
    },
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