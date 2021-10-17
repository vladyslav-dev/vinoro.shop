
import {
    IBasketProduct,
    BasketAction,
    ACTION_TYPES
} from '@/interfaces/IBasket';

export const addProduct = (payload: IBasketProduct): BasketAction => ({ type: ACTION_TYPES.ADD_PRODUCT, payload });

export const removeProductById = (payload: string): BasketAction => ({ type: ACTION_TYPES.REMOVE_PRODUCT, payload });

export const increaseCountById = (payload: string): BasketAction => ({ type: ACTION_TYPES.REMOVE_PRODUCT, payload });

export const decreaseCountById = (payload: string): BasketAction => ({ type: ACTION_TYPES.REMOVE_PRODUCT, payload });