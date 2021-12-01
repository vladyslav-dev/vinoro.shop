import { IProduct } from '@/interfaces/IProduct';

export interface IBasketProduct extends Omit<IProduct, "category" | "order_id" | "description" | "availability"> {
    quantity?: number;
}

export interface IBasketState {
    products: Array<IBasketProduct>;
}

export enum ACTION_TYPES {
    INIT_STATE = 'basket/init-state',
    ADD_PRODUCT = 'basket/add-product',
    REMOVE_PRODUCT = 'basket/remove-product',
    INCREASE_COUNT = 'basket/increase-count',
    DECREASE_COUNT = 'basket/decrease-count',
    CLEAR_STATE = 'basket/clear-state'
}

interface IInitStateAction {
    type: ACTION_TYPES.INIT_STATE;
    payload: Array<IBasketProduct>
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

interface IClearState {
    type: ACTION_TYPES.CLEAR_STATE
}

export type BasketAction =
    IInitStateAction
    | IAddProductAction
    | IRemoveProductAction
    | IIncreaseCountByIdAction
    | IDecreaseCountByIdAction
    | IClearState

export interface BasketHandlers {
    initState: (state: Array<IBasketProduct>) => void;
    addProduct: (product: IBasketProduct) => void;
    removeProductById: (productId: string) => void;
    increaseCountById: (productId: string) => void;
    decreaseCountById: (productId: string) => void;
    clearState: () => void;
}

export type BasketHandler = (dipsatch: React.Dispatch<BasketAction>) => BasketHandlers



