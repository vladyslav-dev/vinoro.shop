import { IProduct } from '@/interfaces/IProduct';

export interface IBasketProduct extends Omit<IProduct, "category" | "order_id" | "description" | "availability"> {
    quantity?: number;
}

export interface BasketState {
    products: Array<IBasketProduct>;
}

export enum ACTION_TYPES {
    ADD_PRODUCT = 'basket/add-product',
    REMOVE_PRODUCT = 'basket/remove-product',
    INCREASE_COUNT = 'basket/increase-count',
    DECREASE_COUNT = 'basket/decrease-count',
}

interface IAddProductAction {
    type: ACTION_TYPES.ADD_PRODUCT;
    payload: IBasketProduct
}

interface IRemoveProductAction {
    type: ACTION_TYPES.REMOVE_PRODUCT;
    payload: string
}

interface IIncreaseCountByIdAction {
    type: ACTION_TYPES.INCREASE_COUNT;
    payload: string
}

interface IDecreaseCountByIdAction {
    type: ACTION_TYPES.DECREASE_COUNT;
    payload: string
}

export type BasketAction =
    IAddProductAction
    | IRemoveProductAction
    | IIncreaseCountByIdAction
    | IDecreaseCountByIdAction

export interface BasketHandlers {
    addProduct: (product: IBasketProduct) => void;
    removeProductById: (productId: string) => void;
    increaseCountById: (productId: string) => void;
    decreaseCountById: (productId: string) => void;
}

export type BasketHandler = (dipsatch: React.Dispatch<BasketAction>) => BasketHandlers



